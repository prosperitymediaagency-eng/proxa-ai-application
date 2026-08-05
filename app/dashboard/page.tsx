"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sparkles, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, [router, supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-soft flex items-center justify-center">
        <div className="text-slate">Loading...</div>
      </div>
    );
  }

  const name = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "there";

  return (
    <div className="min-h-screen bg-soft">
      <nav className="bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-purple">Proxa AI</span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-slate hover:text-dark text-sm">
          <LogOut className="w-4 h-4" />
          Log out
        </button>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-dark mb-2">Welcome, {name} 👋</h1>
        <p className="text-slate mb-10">This is your Proxa AI dashboard.</p>

        <div className="grid sm:grid-cols-2 gap-6">
          <Link href="/dashboard/generate" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h2 className="font-bold text-lg text-dark mb-2">AI Content Generator</h2>
            <p className="text-slate text-sm">Create on-brand posts in seconds.</p>
          </Link>
          <Link href="/dashboard/calendar" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h2 className="font-bold text-lg text-dark mb-2">Content Calendar</h2>
            <p className="text-slate text-sm">Plan and schedule your content.</p>
          </Link>
          <Link href="/dashboard/brand" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h2 className="font-bold text-lg text-dark mb-2">Brand Memory</h2>
            <p className="text-slate text-sm">Save your brand voice and guidelines.</p>
          </Link>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm opacity-60">
            <h2 className="font-bold text-lg text-dark mb-2">Analytics</h2>
            <p className="text-slate text-sm">Coming soon.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
