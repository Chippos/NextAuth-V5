'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Header from './header';
import Social from './social';

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const AuthCard = ({ title, description, children }: AuthCardProps) => {
  return (
    <Card className='w-full max-w-sm border-0 sm:border shadow-none sm:shadow-sm'>
      <Header title={title} description={description} />
      <CardContent className='space-y-4'>
        {children}
        <Social />
        <div className='text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link href='/signup' className='underline'>
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthCard;
