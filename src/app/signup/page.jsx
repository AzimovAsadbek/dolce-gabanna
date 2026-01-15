"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignup = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      // Simulate signup
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Signup attempt:", data);
      setSuccess(true);
    } catch (err) {
      setError("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Account Created!
            </h1>
            <p className="text-muted-foreground">
              Welcome to our store. Start shopping now.
            </p>
          </div>
          <Link href="/products">
            <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 font-medium">
              Start Shopping
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Create Account</h1>
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-lg p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-800 rounded text-sm">
              {error}
            </div>
          )}
          <AuthForm mode="signup" onSubmit={handleSignup} />
        </div>

        {/* Links */}
        <p className="text-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Back to Home
          </Link>
        </p>
      </div>
    </main>
  );
}
