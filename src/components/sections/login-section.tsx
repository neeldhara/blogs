import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { Checkbox } from "../ui/checkbox";

const LoginSection = () => {
  return (
    <section className="bg-sand-100 py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <Card className="mx-auto w-full max-w-sm">
            <CardHeader className="flex flex-col items-center space-y-0">
              <img
                src="/images/layout/logo.svg"
                alt="logo"
                width={94}
                height={18}
                className="mb-7 dark:invert"
              />
              <p className="mb-2 text-2xl font-bold">Welcome back</p>
              <p className="text-muted-foreground">
                Please enter your details.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Input type="email" placeholder="Enter your email" required />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="border-muted-foreground"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-primary text-sm font-medium">
                    Forgot password
                  </a>
                </div>
                <Button type="submit" className="mt-2 w-full">
                  Create an account
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  Sign up with Google
                </Button>
              </div>
              <div className="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                <p>Don&apos;t have an account?</p>
                <a href="/signup" className="text-primary font-medium">
                  Sign up
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
