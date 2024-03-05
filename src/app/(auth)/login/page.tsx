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
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();
  const { toast } = useToast();
  const onLoginUser = async (values: FormSchema) => {
    console.log("Logging in...");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onLoginUser)}
        className="space-y-8 w-full p-2 sm:w-1/2 m-auto my-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
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
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormDescription>This is your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-8 flex-col sm:flex-row">
          <Button type="submit" className="w-full" variant={"outline"}>
            Login
          </Button>
          <Button
            type="button"
            onClick={() => router.push("/register")}
            className="w-full"
            variant={"outline"}
          >
            Sign in
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
