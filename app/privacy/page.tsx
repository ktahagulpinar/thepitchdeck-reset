export default function PrivacyPage() {
  return (
    <main>
      <h1 style={{ fontSize: "36px", marginBottom: "20px", fontWeight: 700 }}>
        Privacy Policy – The Pitch Deck
      </h1>
      <p style={{ opacity: 0.8, marginBottom: "30px" }}>
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Overview</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          The Pitch Deck (“we”, “our”, “us”) values your privacy. This Privacy Policy describes how we collect,
          use, and protect your personal information.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Information We Collect</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Email Address</li>
          <li>Username</li>
          <li>Authentication & session data (Supabase)</li>
          <li>Device information for app analytics</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>How We Use Your Information</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Account creation and identity verification</li>
          <li>Enabling multiplayer gameplay and friend features</li>
          <li>Improving app performance and user experience</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Account Deletion</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          You may request to permanently delete your account directly inside the app. All related data will be
          removed.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Contact</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          For privacy inquiries, reach us at <strong>info@thepitchdeck.store</strong>.
        </p>
      </section>
    </main>
  );
}
