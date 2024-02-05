"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import Link from "next/link";
import { useRouter } from "next/navigation";

const phoneRegex = new RegExp(
  /^\+8801[3456789]\d{8}$/
);
const formSchema = z.object({
  phone: z.string().regex(phoneRegex, 'Invalid Number! follow this +8801XXXXXXXX'),
  password: z.string().min(8, {
    message: "Must be at least 8 characters.",
  })
})

export default function LoginFrom() {
  const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
      password: ''
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    router.push('/')
  }

  return (
    <section>
      <h2 className='text-6xl font-extrabold text-white'>User Login</h2>
      <div className="mt-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone No.</FormLabel>
                  <FormControl>
                    <Input placeholder="Only BD Number (+8801XXXXXXXX)" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage className="text-red-900" />
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
                    <Input type="password" placeholder="***************" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage className="text-red-900" />
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
          Do not Have an account?
          <Link
            href='/login'
            className="underline ml-2"
          >
            Register
          </Link>
        </h2>
      </div>
    </section>
  )
}
