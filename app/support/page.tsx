// app/support/page.tsx  (veya pages/support.tsx)
// Şık, sade, mobile-first bir Support Page tasarımı

import React from "react";

const faqs = [
  {
    question: "Why can’t I join my friend’s lobby?",
    answer:
      "Make sure you both have the latest version of the app installed and a stable internet connection. If the lobby code or invite link is old, ask your friend to create a new lobby.",
  },
  {
    question: "Cards are not refreshing or points are not updating.",
    answer:
      "Try leaving the lobby and joining again. If the problem persists, force close the app and reopen it. In rare cases our servers might be under maintenance.",
  },
  {
    question: "Do I have to drink to play The Pitch Deck?",
    answer:
      "No. The Pitch Deck is designed as a fun party companion. You and your friends decide your own rules – the app never forces or encourages alcohol consumption.",
  },
  {
    question: "My account or login is not working.",
    answer:
      "Check that you’re signing in with the same Google or Apple account you used before. If you still have issues, send us a short description and screenshots via the contact form below.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-10 md:px-6 md:py-16">
        {/* Header */}
        <header className="space-y-3 text-center md:text-left">
          <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
            The Pitch Deck · Support
          </span>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Need help with{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              The Pitch Deck
            </span>
            ?
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Having trouble joining lobbies, starting a game or logging in?  
            Check the quick help below or send us a message – we usually respond within{" "}
            <span className="font-semibold text-emerald-300">24 hours</span>.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-start">
          {/* Contact Form */}
          <section className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-900/40 backdrop-blur">
            <h2 className="text-lg font-semibold md:text-xl">Contact support</h2>
            <p className="text-sm text-slate-300">
              Tell us briefly what went wrong. Include your device model and OS version if you can
              (for example: <span className="font-mono">iPhone 14 · iOS 18</span> or{" "}
              <span className="font-mono">Pixel 7 · Android 15</span>).
            </p>

            <form
              className="space-y-4"
              action="mailto:info@thepitchdeck.store"
              method="post"
              encType="text/plain"
            >
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-200">
                  What’s the issue?
                </label>
                <select
                  name="topic"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
                >
                  <option value="lobby">Can’t join / create lobby</option>
                  <option value="cards">Cards / points not updating</option>
                  <option value="login">Login / account problem</option>
                  <option value="bug">Bug / crash</option>
                  <option value="feedback">Feature request / feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what happened, what you expected to see, and any error message you saw…"
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:brightness-110 active:scale-[0.98]"
              >
                Send message
                <span aria-hidden>📨</span>
              </button>

              <p className="text-xs text-slate-400">
                Or email us directly at{" "}
                <a
                  href="mailto:info@thepitchdeck.store"
                  className="font-medium text-emerald-300 underline-offset-2 hover:underline"
                >
                  info@thepitchdeck.store
                </a>
                .
              </p>
            </form>
          </section>

          {/* Side panel: quick info + FAQ */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-sky-500/10 p-5 shadow-lg shadow-emerald-500/20">
              <h3 className="text-sm font-semibold text-emerald-300">
                Quick info
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-200">
                <li>
                  ✅ <span className="font-medium">Platform:</span> iOS & Android
                </li>
                <li>
                  ✅ <span className="font-medium">Game type:</span> live football party card game
                </li>
                <li>
                  ✅ <span className="font-medium">Login:</span> Google & Apple Sign-In
                </li>
                <li>
                  ✅ <span className="font-medium">Average response time:</span> under 24 hours
                </li>
              </ul>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">
                Frequently asked questions
              </h3>
              <div className="space-y-3">
                {faqs.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-slate-800 bg-slate-950/40 p-3 text-xs text-slate-200"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left font-medium text-slate-100">
                      <span>{item.question}</span>
                      <span className="text-slate-500 group-open:hidden">＋</span>
                      <span className="hidden text-slate-500 group-open:inline">–</span>
                    </summary>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <p className="text-[11px] leading-relaxed text-slate-500">
              The Pitch Deck is intended for adults. The app itself does not sell
              alcohol or encourage alcohol consumption. You and your friends are
              always in control of how you play. Please drink responsibly and follow
              the laws in your country.
            </p>
          </aside>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-4 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} The Pitch Deck · All rights reserved.
        </footer>
      </div>
    </main>
  );
}
