"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, Package, Heart } from "lucide-react"

export default function AccountPage() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joinDate: "January 2024",
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Account</h1>
            <p className="text-muted-foreground">Welcome back, {user.name}!</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:bg-muted transition-colors">
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>

        {/* Account Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Profile Info */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Profile Information</h2>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="text-foreground font-medium">{user.name}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground font-medium">{user.email}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Member Since</p>
              <p className="text-foreground font-medium">{user.joinDate}</p>
            </div>
            <Link href="/account/settings">
              <Button
                variant="outline"
                className="w-full border-foreground text-foreground hover:bg-foreground/10 bg-transparent"
              >
                Edit Profile
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Package className="h-6 w-6 text-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Recent Orders</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
              </div>
              <Link href="/account/orders">
                <Button
                  variant="outline"
                  className="w-full border-foreground text-foreground hover:bg-foreground/10 bg-transparent"
                >
                  View Orders
                </Button>
              </Link>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Saved Items</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
              </div>
              <Link href="/wishlist">
                <Button
                  variant="outline"
                  className="w-full border-foreground text-foreground hover:bg-foreground/10 bg-transparent"
                >
                  View Wishlist
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Account Menu */}
        <div className="bg-card border border-border rounded-lg divide-y divide-border">
          <Link
            href="/account/addresses"
            className="flex items-center justify-between p-4 hover:bg-muted transition-colors"
          >
            <span className="font-medium text-foreground">Addresses</span>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/account/payments"
            className="flex items-center justify-between p-4 hover:bg-muted transition-colors"
          >
            <span className="font-medium text-foreground">Payment Methods</span>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/account/notifications"
            className="flex items-center justify-between p-4 hover:bg-muted transition-colors"
          >
            <span className="font-medium text-foreground">Notification Preferences</span>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/account/settings"
            className="flex items-center justify-between p-4 hover:bg-muted transition-colors"
          >
            <span className="font-medium text-foreground">Account Settings</span>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}
