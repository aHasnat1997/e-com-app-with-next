import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Email is empty",
  }).email('Input valid email'),
  password: z.string().min(8, {
    message: "Password must 8",
  }),
});

export default function LoginFrom() {
  // const { toast } = useToast();

  // 1. Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
      // toast({
      //   title: 'Error',
      //   description: 'An error occurred during login. Please try again.',
      //   duration: 2000,
      // });
    }
  }

  return (
    <section>
      <h2 className='text-6xl font-extrabold text-white'>User Login</h2>
      <div className="mt-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Jon Do" {...field} />
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
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="***************" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex items-end">
              <Button
                type="submit"
                className="ml-auto bg-transparent border text-white hover:text-black"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-full">
        <h2 className="text-white text-center mt-8">
          <span>Do not Have an account?</span>
          <Link
            href='/register'
            className="underline ml-2"
          >
            Register
          </Link>
        </h2>
      </div>
    </section>
  )
}
