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
          The Pitch Deck (“we”, “our”, “us”) values your privacy. This Privacy Policy explains
          what information we collect and how it is used within the app.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Information We Collect</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          The app can be used in Guest Mode without providing any personal information.
          If you choose to create an account, we may collect:
        </p>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Email address (optional, only for registered accounts)</li>
          <li>Username</li>
          <li>Authentication & session data (Supabase)</li>
        </ul>
        <p style={{ lineHeight: 1.7, opacity: 0.9, marginTop: "10px" }}>
          We do <strong>not</strong> collect device identifiers or analytics data.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>How We Use Your Information</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Allowing you to create and manage an account (optional)</li>
          <li>Enabling multiplayer gameplay features such as lobbies and friends</li>
          <li>Maintaining secure sessions and app functionality</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Guest Mode</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          Users may access gameplay features without creating an account. Guest users do not
          provide personal information, and no identifying data is stored.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Account Deletion</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          Registered users may request to permanently delete their account directly inside the app.
          All related data will be removed.
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
