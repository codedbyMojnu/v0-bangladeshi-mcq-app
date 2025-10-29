"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"

interface AdminLoginProps {
  onLoginSuccess: (token: string) => void
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (data.success) {
        localStorage.setItem("adminToken", data.token)
        onLoginSuccess(data.token)
      } else {
        setError(data.error || "লগইন ব্যর্থ হয়েছে")
      }
    } catch (err) {
      setError("একটি ত্রুটি ঘটেছে")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-foreground mb-2 text-center">প্রশাসক লগইন</h1>
        <p className="text-muted-foreground text-center mb-8">প্রশ্ন সম্পাদনা করতে লগইন করুন</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">ইমেইল</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@education.bd"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">পাসওয়ার্ড</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="পাসওয়ার্ড"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90"
          >
            <LogIn className="w-4 h-4" />
            {loading ? "লগইন হচ্ছে..." : "লগইন করুন"}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs text-blue-900">
            <strong>ডেমো অ্যাকাউন্ট:</strong>
            <br />
            ইমেইল: admin@education.bd
            <br />
            পাসওয়ার্ড: admin123
          </p>
        </div>
      </div>
    </div>
  )
}
