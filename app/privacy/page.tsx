export default function PrivacyPage() {
  return (
    <main>
      <h1>Privacy Policy – The Pitch Deck</h1>
      <p>Last Updated: {new Date().toLocaleDateString()}</p>

      <p>
        The Pitch Deck (“we”, “our”, “us”) respects your privacy. This Privacy Policy explains what
        information we collect, how we use it, and your rights regarding your data.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Email address</li>
        <li>Username</li>
        <li>Authentication data (Supabase)</li>
        <li>Device information (Expo standard analytics)</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To create and manage your account</li>
        <li>To enable gameplay and friend features</li>
        <li>To improve app performance</li>
      </ul>

      <h2>Third Party Services</h2>
      <p>
        We use the following services for authentication and app functionality:
      </p>
      <ul>
        <li>Supabase (Authentication)</li>
        <li>Expo (Application Framework)</li>
        <li>Apple Sign In (Optional login method)</li>
      </ul>

      <h2>Account Deletion</h2>
      <p>
        You can delete your account at any time from inside the app. All personal data associated with
        your account will be permanently removed.
      </p>

      <h2>Contact</h2>
      <p>
        For any privacy questions, you can contact us at:
        <br />
        <strong>info@thepitchdeck.store</strong>
      </p>
    </main>
  );
}
