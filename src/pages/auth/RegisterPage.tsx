
import Layout from "@/components/layout/Layout";
import AuthForm from "@/components/auth/AuthForm";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AuthForm defaultTab="register" />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
