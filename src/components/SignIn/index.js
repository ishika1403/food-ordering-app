"use client";
import styles from "./index.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SigninSchema = Yup.object().shape({
  username: Yup.string().trim().required("Required"),
  password: Yup.string().trim().required("Required"),
});

export default function SignInPage() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const response = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (!response.ok) {
        setSubmitting(false);
        alert("Invalid credentials! Try again.");
      } else {
        router.refresh();
      }
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.formDiv}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <h1>Sign In</h1>
          <div className={styles.fieldContainer}>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Username"
            />
            {formik.touched.username && formik.errors.username && (
              <span>{formik.errors.username}</span>
            )}
          </div>
          <div className={styles.fieldContainer}>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password && (
              <span>{formik.errors.password}</span>
            )}
          </div>

          <button type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
