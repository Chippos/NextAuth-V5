import AuthCard from '@/components/auth/authCard';
import SignupForm from '@/components/auth/signupForm';

const SignupPage = () => {
  return (
    <AuthCard
      title='Create Account'
      description='Enter your information to create an account'>
      <SignupForm buttonTitle='Create an account' />
    </AuthCard>
  );
};

export default SignupPage;
