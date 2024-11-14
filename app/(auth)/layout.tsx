import React from 'react';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='container mx-auto h-screen flex items-center justify-center'>
      <div className='bg-grid h-screen' />
      {children}
    </div>
  );
};

export default AuthLayout;
