"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
// import { login } from "@/services/auth";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    try {
    //   await login(username, password);
      router.push("/admin");
    } catch {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl bg-surface p-8 shadow-card"
      >
        <h1 className="mb-6 text-2xl font-bold" style={{ color: "var(--text)" }}>
          Admin login
        </h1>

        <label className="mb-4 block">
          <span className="mb-1 block text-sm" style={{ color: "var(--muted)" }}>Username</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border px-3 py-2"
            style={{ borderColor: "var(--border)", color: "var(--text)", backgroundColor: "var(--card)" }}
          />
        </label>

        <label className="mb-6 block">
          <span className="mb-1 block text-sm" style={{ color: "var(--muted)" }}>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border px-3 py-2"
            style={{ borderColor: "var(--border)", color: "var(--text)", backgroundColor: "var(--card)" }}
          />
        </label>

        {error && (
          <p className="mb-4 text-sm" style={{ color: "var(--danger)" }}>{error}</p>
        )}

        <Button text="Log in" />
      </form>
    </div>
  );
}