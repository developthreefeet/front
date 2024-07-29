'use client';

import { collageItems, departmentItems } from '@/shared/lib/assets';
import { Button } from '@/shared/ui/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/ui/form';
import { Input } from '@/shared/ui/ui/input';
import FormSelectComponent from '@/widgets/FormSelectComponent';
import { useModifyProfile } from '../model/useModifyProfile';

const ModifyProfileForm = () => {
  const { form, onSubmit } = useModifyProfile();

  return (
    <Form {...form}>
      <form className="space-y-9" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="한글 조합 (2~15자)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="college"
            render={() => (
              <FormItem>
                <FormLabel>단과대 선택</FormLabel>
                <FormControl>
                  <FormSelectComponent
                    placeholder="단과대를 선택해주세요."
                    items={collageItems}
                    control={form.control}
                    name="college"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="department"
            render={() => (
              <FormItem>
                <FormLabel>학과 선택</FormLabel>
                <FormControl>
                  <FormSelectComponent
                    placeholder="학과를 선택해주세요."
                    items={departmentItems}
                    control={form.control}
                    name="department"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" size="long">
            수정완료
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ModifyProfileForm;