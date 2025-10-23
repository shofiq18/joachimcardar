import ForgetPasswordPage from "@/app/components/auth/forget-password";
import ResetPassword from "@/app/components/auth/reset-password";



export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ForgetPasswordPage/>
      <ResetPassword/>
    </div>
  );
}
