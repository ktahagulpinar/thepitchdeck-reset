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
          Guest users may access gameplay features without creating an account.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>2. User Responsibilities</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Do not misuse the App or attempt to disrupt gameplay.</li>
          <li>Account creation is optional. If you choose to register, you are responsible for keeping your login credentials secure.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>3. Prohibited Use</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Harassment, abusive behavior, or inappropriate content</li>
          <li>Illegal activity or attempts to harm the App or other users</li>
          <li>Reverse engineering, unauthorized access, or hacking attempts</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>4. Termination</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          We may suspend or delete your account if you violate these Terms. Guest users may stop using the App at any time.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>5. Liability Disclaimer</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          The App is provided “as is” without warranties of any kind. We are not liable for any damages resulting from your use of the App.
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
