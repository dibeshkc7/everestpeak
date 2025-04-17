import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-bold text-center mb-8">EPIC</h1>

        <div className="space-y-4">
          <Button variant="outline" className="w-full gap-2">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              {/* Google SVG icon */}
            </svg>
            Sign In with Google
          </Button>

          <Button variant="outline" className="w-full gap-2">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              {/* Microsoft SVG icon */}
            </svg>
            Sign In with Microsoft
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="text-center text-sm">
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        <footer className="mt-8 text-center text-xs text-muted-foreground">
          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </footer>
      </div>
    </div>
  );
}
