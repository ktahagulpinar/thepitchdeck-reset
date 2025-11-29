export default function TermsPage() {
  return (
    <main>
      <h1>Terms & Conditions – The Pitch Deck</h1>
      <p>Last Updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using The Pitch Deck application (“the App”), you agree to be bound by these Terms &
        Conditions.
      </p>

      <h2>2. User Responsibilities</h2>
      <ul>
        <li>You must not misuse the app or attempt to disrupt its services.</li>
        <li>You are responsible for maintaining the security of your account.</li>
      </ul>

      <h2>3. Prohibited Behavior</h2>
      <ul>
        <li>Harassment, abuse, or inappropriate behavior</li>
        <li>Using the app for illegal purposes</li>
        <li>Attempting to hack or reverse engineer the app</li>
      </ul>

      <h2>4. Account Termination</h2>
      <p>
        We reserve the right to suspend or terminate your account if you violate these terms.
      </p>

      <h2>5. Disclaimer</h2>
      <p>
        The App is provided “as is” without any warranties. We are not responsible for any damages
        resulting from your use of the app.
      </p>

      <h2>6. Contact</h2>
      <p>
        For questions about these Terms, contact:
        <br />
        <strong>info@thepitchdeck.store</strong>
      </p>
    </main>
  );
}
