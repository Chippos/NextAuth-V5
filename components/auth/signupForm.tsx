'use client';

import { z } from 'zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/global/form-error';
import { FormSuccess } from '@/components/global/form-success';
import { signupSchema } from '@/schemas';
import { signup } from '@/app/actions/signup';

const SignupForm = ({ buttonTitle }: { buttonTitle: string }) => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof signupSchema>) => {
    startTransition(() => {
      signup(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <Form {...form}>
      <FormField
        name='name'
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Input
                type='text'
                placeholder='John Marston'
                autoComplete='on'
                disabled={isPending}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name='email'
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Input
                type='email'
                placeholder='m@example.com'
                autoComplete='on'
                disabled={isPending}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name='password'
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className='capitalize'>{field.name}</FormLabel>
            <FormControl>
              <Input
                type='password'
                placeholder='******'
                autoComplete='off'
                disabled={isPending}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormError message={error} />
      <FormSuccess message={success} />
      <Button
        className='w-full'
        disabled={isPending}
        onClick={form.handleSubmit(onSubmit)}>
        {buttonTitle}
      </Button>
    </Form>
  );
};

export default SignupForm;
