import AuthCard from '@/components/auth/authCard';
import LoginForm from '@/components/auth/loginForm';

const LoginPage = () => {
  return (
    <AuthCard
      title='Welcome back! 👋'
      description='Enter your email below to login to your account'>
      <LoginForm buttonTitle='Login' />
    </AuthCard>
  );
};

export default LoginPage;
