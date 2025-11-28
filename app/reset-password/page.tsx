'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

type Status = 'idle' | 'error' | 'info' | 'success';

export default function ResetPasswordPage() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [errorDescription, setErrorDescription] = useState<string | null>(null);

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');

  // Supabase reset link tokenları URL HASH kısmında gönderir (#access_token=...)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash.startsWith('#')
      ? window.location.hash.substring(1)
      : window.location.hash;

    const params = new URLSearchParams(hash);
    const at = params.get('access_token');
    const rt = params.get('refresh_token');
    const err = params.get('error_description');

    if (err) {
      setErrorDescription(err);
      setStatus('error');
      setMessage(err);
      return;
    }

    if (!at || !rt) {
      setStatus('error');
      setMessage('Reset link expired or invalid.');
      return;
    }

    setAccessToken(at);
    setRefreshToken(rt);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessToken || !refreshToken) {
      setStatus('error');
      setMessage('Missing reset credentials. Please request a new reset email.');
      return;
    }

    if (password.length < 8) {
      setStatus('error');
      setMessage('Password must be at least 8 characters.');
      return;
    }

    if (password !== confirm) {
      setStatus('error');
      setMessage('Passwords do not match.');
      return;
    }

    setLoading(true);
    setStatus('info');
    setMessage('Updating password…');

    // 1) Session set et
    const { error: sessionError } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    if (sessionError) {
      setLoading(false);
      setStatus('error');
      setMessage(sessionError.message);
      return;
    }

    // 2) Şifreyi güncelle
    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setLoading(false);
      setStatus('error');
      setMessage(updateError.message);
      return;
    }

    setStatus('success');
    setMessage('Password updated. Redirecting…');

    // 3) App deep link’ine dön
    setTimeout(() => {
      window.location.href = 'thepitchdeck://password-reset-success';
    }, 1200);
  };

  const disableForm = !!errorDescription || (!accessToken || !refreshToken);

  return (
    <html lang="en">
      <head>
        <title>ThePitchDeck — Reset Password</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(circle at top, #1e1b4b 0%, #020617 100%)',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          color: '#fff',
        }}
      >
        <section
          style={{
            width: '100%',
            maxWidth: 430,
            background: 'rgba(15,23,42,0.9)',
            padding: 32,
            borderRadius: 20,
            border: '1px solid rgba(148,163,184,0.35)',
            boxShadow: '0 25px 50px -12px rgba(15,23,42,0.7)',
          }}
        >
          <h1
            style={{
              margin: '0 0 8px',
              fontSize: 28,
              fontWeight: 700,
              background:
                'linear-gradient(90deg, #818cf8 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Reset Password
          </h1>
          <p style={{ opacity: 0.75, marginBottom: 24 }}>
            Create your new ThePitchDeck password.
          </p>

          <form onSubmit={handleSubmit}>
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginBottom: 18,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              New password
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={disableForm || loading}
                style={{
                  padding: 14,
                  fontSize: 16,
                  borderRadius: 12,
                  background: 'rgba(15,23,42,1)',
                  border: '1px solid rgba(148,163,184,0.7)',
                  color: '#fff',
                }}
              />
            </label>

            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginBottom: 18,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Confirm password
              <input
                type="password"
                required
                minLength={8}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                disabled={disableForm || loading}
                style={{
                  padding: 14,
                  fontSize: 16,
                  borderRadius: 12,
                  background: 'rgba(15,23,42,1)',
                  border: '1px solid rgba(148,163,184,0.7)',
                  color: '#fff',
                }}
              />
            </label>

            <button
              type="submit"
              disabled={disableForm || loading}
              style={{
                padding: 16,
                width: '100%',
                border: 'none',
                borderRadius: 12,
                background:
                  'linear-gradient(90deg,#22c55e,#16a34a)',
                fontSize: 16,
                color: '#02150e',
                fontWeight: 700,
                cursor: disableForm || loading ? 'not-allowed' : 'pointer',
                opacity: disableForm || loading ? 0.6 : 1,
              }}
            >
              {loading ? 'Updating…' : 'Update Password'}
            </button>

            <div
              style={{
                marginTop: 12,
                fontSize: 14,
                minHeight: 22,
                color:
                  status === 'error'
                    ? '#f87171'
                    : status === 'info'
                    ? '#fbbf24'
                    : status === 'success'
                    ? '#4ade80'
                    : '#e5e7eb',
              }}
            >
              {message}
            </div>
          </form>
        </section>
      </body>
    </html>
  );
}
