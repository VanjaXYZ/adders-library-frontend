"use client";
import { FormSchema } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Config } from "../../../../Config";

const RegisterForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();
  const { toast } = useToast();
  const onRegisterUser = async (values: FormSchema) => {
    try {
      const createUser = await axios.post(`${Config.baseURL}/auth/register`, {
        username: values.username,
        password: values.password,
      });
      if (createUser.status === 201) {
        router.replace("/login");
        toast({
          variant: "success",
          title: "Registered succesfully!",
        });
        return createUser;
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error.response.data.message,
      });
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onRegisterUser)}
        className="space-y-8 w-full p-2 sm:w-1/2 m-auto my-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Username</FormLabel>
              <FormControl>
                <Input placeholder="min. 4 characters" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Password</FormLabel>
              <FormControl>
                <Input placeholder="min. 8 characters" {...field} />
              </FormControl>
              <FormDescription>This is your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-8 flex-col sm:flex-row">
          <Button type="submit" className="w-full" variant={"outline"}>
            Sign in
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
