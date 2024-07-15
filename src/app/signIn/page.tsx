'use client';

import { Button } from '@/shared/ui/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/shared/ui/ui/form';
import { Input } from '@/shared/ui/ui/input';
import { useForm } from 'react-hook-form';

const page = () => {
  const form = useForm();
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="w-28 h-28 bg-gray-100 mb-16">아이콘 자리</div>
        <Form {...form}>
          <form
            className="space-y-4 mt-2"
            onSubmit={form.handleSubmit((data) => console.log(data))}
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="이메일" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="비밀번호" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="long">
              로그인
            </Button>
          </form>
        </Form>
      </div>
      <div className="flex justify-center items-center mt-1">
        <p className="text-sm">아직 회원이 아니라면?</p>
        <Button variant="link" className="text-blue-300">
          회원가입
        </Button>
      </div>
    </>
  );
};

export default page;