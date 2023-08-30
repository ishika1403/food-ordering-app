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
    onSubmit: async (values) => {
      const response = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      if (!response.ok) {
        alert("Invalid credentials! Try again.");
      } else {
        router.replace("/");
      }
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.formDiv}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <h1>Sign In</h1>
          <div>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Username"
            />
            {formik.touched.username && formik.errors.username && (
              <div>{formik.errors.username}</div>
            )}
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
