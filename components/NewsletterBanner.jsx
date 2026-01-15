"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Stay Updated</h2>
          <p className="text-primary-foreground/90">
            Get exclusive access to new collections, sales, and insider tips
            delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded bg-primary-foreground text-primary placeholder-primary/50 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary-foreground text-primary rounded hover:bg-primary-foreground/90 transition-colors font-medium flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            <span className="hidden sm:inline">Subscribe</span>
          </button>
        </form>

        {submitted && (
          <p className="text-primary-foreground/90 text-sm">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
}
