export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
          background: "linear-gradient(135deg, #1a1f3c, #2d3250, #1f1a2c)",
          minHeight: "100vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "95%",
            maxWidth: "850px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
            borderRadius: "18px",
            padding: "40px",
            margin: "40px 0",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
