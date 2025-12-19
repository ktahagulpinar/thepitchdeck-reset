export default function HomePage() {
  const appStoreUrl = "https://apps.apple.com/app/the-pitch-deck/id6755654587";

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "60px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
        <img
          src="/logo.png"
          alt="The Pitch Deck logo"
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            objectFit: "cover",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        />

        <div>
          <h1 style={{ fontSize: 42, margin: 0, fontWeight: 800, letterSpacing: -0.5 }}>
            The Pitch Deck
          </h1>
          <p style={{ margin: "6px 0 0", opacity: 0.75, lineHeight: 1.6 }}>
            Live match card game — play cards based on real moments.
          </p>
        </div>
      </div>

      <section style={{ marginBottom: 26 }}>
        <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: 16, marginTop: 0 }}>
          Watch live matches with friends and react instantly with cards. Create a lobby, join with a code,
          and keep the hype going.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: 12,
              fontWeight: 700,
              textDecoration: "none",
              background: "#111827",
              color: "white",
            }}
          >
            Available on the App Store
          </a>

          <a
            href="/privacy"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: 12,
              fontWeight: 700,
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.12)",
              color: "inherit",
            }}
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: 12,
              fontWeight: 700,
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.12)",
              color: "inherit",
            }}
          >
            Terms
          </a>

          <a
            href="mailto:support@thepitchdeck.store"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: 12,
              fontWeight: 700,
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.12)",
              color: "inherit",
            }}
          >
            Contact
          </a>
        </div>
      </section>

      <section style={{ marginTop: 34, paddingTop: 18, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <p style={{ margin: 0, opacity: 0.6 }}>
          © {new Date().getFullYear()} The Pitch Deck
        </p>
      </section>
    </main>
  );
}
