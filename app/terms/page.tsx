export default function TermsPage() {
  return (
    <main>
      <h1 style={{ fontSize: "36px", marginBottom: "20px", fontWeight: 700 }}>
        Terms & Conditions – The Pitch Deck
      </h1>
      <p style={{ opacity: 0.8, marginBottom: "30px" }}>
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>1. Acceptance of Terms</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          By using The Pitch Deck (“the App”), you agree to these Terms & Conditions and our Privacy Policy.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>2. User Responsibilities</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Do not misuse the app or attempt to disrupt gameplay.</li>
          <li>You are responsible for keeping your account secure.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>3. Prohibited Use</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Harassment or abusive behavior</li>
          <li>Illegal activity or content</li>
          <li>Reverse engineering or hacking attempts</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>4. Termination</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          We reserve the right to suspend or delete your account if these terms are violated.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>5. Liability Disclaimer</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          The App is provided “as is” without warranties. We are not responsible for any damages resulting from
          the use of the App.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>6. Contact</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          For inquiries, contact <strong>info@thepitchdeck.store</strong>.
        </p>
      </section>
    </main>
  );
}
