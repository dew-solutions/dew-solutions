export const metadata = {
  title:
    "AI Automation & Website Design | Clermont FL, Orlando FL, Augusta GA | DEW Solutions",
  description:
    "DEW Solutions provides AI automation, custom website design, and lead generation services for businesses in Clermont Florida, Orlando Florida, and Augusta Georgia.",
  keywords: [
    "AI automation Clermont FL",
    "website design Clermont Florida",
    "AI automation Orlando FL",
    "website design Orlando Florida",
    "AI automation Augusta GA",
    "website design Augusta Georgia",
    "small business automation",
    "AI chatbot services",
    "custom websites for small business",
  ],
  openGraph: {
    title:
      "AI Automation & Website Design | Clermont FL, Orlando FL, Augusta GA",
    description:
      "Custom websites and AI automation for businesses in Central Florida and Augusta, Georgia.",
    url: "https://www.dewsolutions.com",
    siteName: "DEW Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* GLOBAL STYLES */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }

        .noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .hoverLift {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .hoverLift:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.18);
        }

        .button {
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .button:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .divider {
          height: 1px;
          width: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255,255,255,0.15),
            transparent
          );
          margin: 80px 0;
        }

        .accent {
          color: #3b82f6;
        }
      `}</style>

      {/* NAVBAR */}
      <header
        style={{
          background: "linear-gradient(270deg, #000, #111, #000)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 18s ease infinite",
          color: "#fff",
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <h1 style={{ margin: 0, fontSize: "22px" }}>DEW Solutions</h1>

        <div style={{ display: "flex", gap: "12px" }}>
          <a href="tel:+16107518710" className="button"
            style={{ padding: "10px 18px", border: "1px solid #fff", borderRadius: "999px", color: "#fff", textDecoration: "none" }}>
            Call Now
          </a>
          <a href="https://cal.com/dew-solutions/demo-meeting" target="_blank" className="button"
            style={{ padding: "10px 18px", backgroundColor: "#2563eb", borderRadius: "999px", color: "#fff", textDecoration: "none" }}>
            Book Demo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(270deg, #000, #111, #000)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 18s ease infinite",
          color: "#fff",
          padding: "130px 20px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div className="noise" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px at 50% 30%, rgba(59,130,246,0.25), transparent 60%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: "48px", maxWidth: "900px", margin: "0 auto" }}>
            Websites & <span className="accent">AI Automation</span> Built to Grow Your Business
          </h2>
          <p style={{ maxWidth: "720px", margin: "28px auto", fontSize: "19px", color: "#d1d5db" }}>
            Serving Clermont FL, Orlando FL, and Augusta GA with modern websites and AI systems.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section style={{ padding: "100px 20px", backgroundColor: "#fff", color: "#000", textAlign: "center" }}>
        <h3 style={{ fontSize: "36px" }}>How It Works</h3>
        <p style={{ color: "#555", marginBottom: "60px" }}>Simple. Transparent. Results-focused.</p>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
          {[
            ["1. Strategy Call", "We learn your goals and challenges."],
            ["2. Build & Automate", "We design and automate your systems."],
            ["3. Launch & Scale", "You capture leads and save time."],
          ].map(([t, d], i) => (
            <div key={i} className="hoverLift" style={{ padding: "36px", backgroundColor: "#fafafa", borderRadius: "16px", textAlign: "left" }}>
              <h4>{t}</h4>
              <p style={{ color: "#555" }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f9fafb", textAlign: "center" }}>
        <h3 style={{ fontSize: "36px" }}>What We Do</h3>
        <p style={{ color: "#555", marginBottom: "60px" }}>
          Websites and AI systems designed to grow local businesses.
        </p>
      </section>

      {/* CALENDAR */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f4f4f5", textAlign: "center" }}>
        <h3 style={{ fontSize: "36px" }}>Book a Free Strategy Call</h3>
        <iframe
          src="https://cal.com/dew-solutions/demo-meeting"
          style={{ width: "100%", maxWidth: "1000px", height: "700px", border: "none", borderRadius: "16px" }}
        />
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#000", color: "#fff", padding: "70px 20px", textAlign: "center" }}>
        <p>📞 <a href="tel:+16107518710" style={{ color: "#fff" }}>+1 (610) 751-8710</a></p>
        <p>📧 <a href="mailto:DEWSOLUTIONSOWNER@GMAIL.COM" style={{ color: "#fff" }}>DEWSOLUTIONSOWNER@GMAIL.COM</a></p>
        <p style={{ color: "#aaa", marginTop: "24px" }}>
          © {new Date().getFullYear()} DEW Solutions
        </p>
      </footer>

    </main>
  );
}