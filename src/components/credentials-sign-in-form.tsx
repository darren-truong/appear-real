"use client";

import { signInDefaultValues } from "@/lib/constants";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Link from "next/link";

import { useActionState } from "react";
import SignInButton from "./sign-in-button";
import { signInWithCredentials } from "@/actions/users.actions";
import { useSearchParams } from "next/navigation";

export default function CredentialsSignInForm() {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={signInDefaultValues.password}
          />
        </div>
        <div>
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className="text-destructive text-center">{data.message}</div>
        )}

        <div className="text-muted-foreground text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" target="_self" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}
