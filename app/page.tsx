import Link from "next/link";
import {
  Sparkles,
  Calendar,
  Brain,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-soft">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-purple">Proxa AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-slate hover:text-dark transition">
              Login
            </Link>
            <Link href="/signup" className="bg-teal hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition shadow-sm">
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-purple/10 text-purple text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          Built for social media managers
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight tracking-tight">
          Create & plan on-brand
          <br />
          <span className="text-purple">content in minutes</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate max-w-2xl mx-auto">
          Proxa AI helps social media managers stop wasting time thinking about what to post.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="w-full sm:w-auto bg-teal hover:bg-teal-600 text-white font-semibold px-8 py-3.5 rounded-xl transition shadow-lg shadow-teal/25 flex items-center justify-center gap-2">
            Start Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="#features" className="w-full sm:w-auto border-2 border-gray-200 hover:border-purple text-dark font-semibold px-8 py-3.5 rounded-xl transition">
            See How It Works
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Everything you need to stay on-brand
          </h2>
          <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
            From planning to publishing, Proxa AI keeps your content consistent and on schedule.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
              <Brain className="w-6 h-6 text-teal" />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">AI content generation</h3>
            <p className="text-slate">
              Generate on-brand captions, ideas, and post copy in seconds, tuned to your voice.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center mb-5">
              <Calendar className="w-6 h-6 text-purple" />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">Visual content calendar</h3>
            <p className="text-slate">
              Plan and schedule weeks of posts at a glance, across every platform you manage.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
              <LayoutDashboard className="w-6 h-6 text-teal" />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">One dashboard, every brand</h3>
            <p className="text-slate">
              Switch between client brands and accounts without losing your place.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 text-center">
        <div className="bg-purple rounded-3xl px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to plan your next post?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Join social media managers already saving hours every week with Proxa AI.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 bg-teal hover:bg-teal-600 text-white font-semibold px-8 py-3.5 rounded-xl transition shadow-lg"
          >
            Start Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
            }
            
