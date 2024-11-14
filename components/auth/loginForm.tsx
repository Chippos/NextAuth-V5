'use client';

import { z } from 'zod';
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

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required'),
});

const LoginForm = ({ buttonTitle }: { buttonTitle: string }) => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
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
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className='w-full' onClick={form.handleSubmit(onSubmit)}>
        {buttonTitle}
      </Button>
    </Form>
  );
};

export default LoginForm;
