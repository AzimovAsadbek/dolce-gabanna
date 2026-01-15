"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      // Simulate login
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login attempt:", data);
      // Redirect would happen here in a real app
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Sign In</h1>
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-primary hover:underline font-medium"
            >
              Create one
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
          <AuthForm mode="login" onSubmit={handleLogin} />
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 border border-border rounded hover:bg-muted transition-colors font-medium text-sm">
              Google
            </button>
            <button className="py-3 border border-border rounded hover:bg-muted transition-colors font-medium text-sm">
              Apple
            </button>
          </div>
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
