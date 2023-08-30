import LoginRedirect from "@/components/LoginRedirect";
import SignInPage from "@/components/SignIn";

export default function SignIn() {
  return (
    <LoginRedirect>
      <SignInPage />
    </LoginRedirect>
  );
}
