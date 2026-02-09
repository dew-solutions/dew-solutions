export const metadata = {
  title:
    "AI Automation & Website Design | Clermont FL, Orlando FL, Augusta GA | DEW Solutions",
  description:
    "DEW Solutions provides AI automation, custom website design, and lead generation services for businesses in Clermont Florida, Orlando Florida, and Augusta Georgia. We help companies generate leads, automate workflows, and grow online.",
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
    "lead generation services",
    "websites for local businesses",
    "DEW solutions clermont fl",
    "DEW solutions augusta ga",

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

        .hoverLift {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .hoverLift:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 32px rgba(0,0,0,0.18);
        }

        a.button {
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        a.button:hover {
          transform: translateY(-2px);
          opacity: 0.9;
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
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 700 }}>
          DEW Solutions
        </h1>

        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href="tel:+16107518710"
            className="button"
            style={{
              padding: "10px 18px",
              border: "1px solid #fff",
              borderRadius: "999px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Call Now
          </a>

          <a
            href="https://cal.com/dew-solutions/demo-meeting"
            target="_blank"
            className="button"
            style={{
              padding: "10px 18px",
              backgroundColor: "#2563eb",
              borderRadius: "999px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
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
        {/* GRID + NOISE */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            animation: "gridMove 20s linear infinite",
            opacity: 0.25,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "48px",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: 1.15,
            }}
          >
            Websites & AI Automation Built to Grow Your Business
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "28px auto",
              fontSize: "19px",
              color: "#d1d5db",
            }}
          >
            DEW Solutions helps Orlando-area businesses generate more leads,
            save time, and scale operations using modern websites and
            intelligent automation.
          </p>

          <div style={{ marginTop: "42px" }}>
            <a
              href="tel:+16107518710"
              className="button"
              style={{
                padding: "15px 26px",
                backgroundColor: "#fff",
                color: "#000",
                textDecoration: "none",
                marginRight: "14px",
                borderRadius: "999px",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Call Now
            </a>

            <a
              href="https://cal.com/dew-solutions/demo-meeting"
              target="_blank"
              className="button"
              style={{
                padding: "15px 26px",
                backgroundColor: "#2563eb",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "999px",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "36px", marginBottom: "14px" }}>
          How It Works
        </h3>
        <p style={{ color: "#555", marginBottom: "60px" }}>
          Simple. Transparent. Results-focused.
        </p>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
          }}
        >
          {[
            ["1. Strategy Call", "We learn about your business, goals, and bottlenecks."],
            ["2. Build & Automate", "We design your site and automate key workflows."],
            ["3. Launch & Scale", "You start capturing leads and saving time immediately."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="hoverLift"
              style={{
                padding: "36px 28px",
                borderRadius: "14px",
                backgroundColor: "#fafafa",
                border: "1px solid #e5e7eb",
                textAlign: "left",
              }}
            >
              <h4 style={{ marginBottom: "12px", fontSize: "20px" }}>
                {title}
              </h4>
              <p style={{ color: "#555", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          backgroundColor: "#f9fafb",
        }}
      >
        <h3 style={{ fontSize: "36px", marginBottom: "14px" }}>
          What We Do
        </h3>

        <p style={{ color: "#555", marginBottom: "60px" }}>
          Designed for small businesses, startups, and service providers.
        </p>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
          }}
        >
          {[
            {
              title: "Website Design",
              desc: "High-conversion websites built for speed, clarity, and trust.",
            },
            {
              title: "AI Automation",
              desc: "Automated follow-ups, booking, and lead handling.",
            },
            {
              title: "Lead Generation",
              desc: "Funnels and systems that turn traffic into real opportunities.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="hoverLift"
              style={{
                border: "1px solid #e5e7eb",
                padding: "34px 28px",
                borderRadius: "14px",
                backgroundColor: "#fff",
                textAlign: "left",
              }}
            >
              <h4 style={{ marginBottom: "14px", fontSize: "20px" }}>
                {service.title}
              </h4>
              <p style={{ color: "#555", lineHeight: 1.6 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALENDAR */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#f4f4f5",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "36px", marginBottom: "16px" }}>
          Book a Free Strategy Call
        </h3>

        <p style={{ color: "#555", marginBottom: "40px" }}>
          A quick conversation to see if DEW Solutions is right for you.
        </p>

        <iframe
          src="https://cal.com/dew-solutions/demo-meeting"
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "700px",
            border: "none",
            borderRadius: "16px",
            backgroundColor: "#fff",
          }}
        />
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "24px", fontSize: "24px" }}>
          Contact Information
        </h3>

        <p>
          📞{" "}
          <a href="tel:+16107518710" style={{ color: "#fff" }}>
            +1 (610) 751-8710
          </a>
        </p>

        <p>
          📧{" "}
          <a href="mailto:DEWSOLUTIONSOWNER@GMAIL.COM" style={{ color: "#fff" }}>
            DEWSOLUTIONSOWNER@GMAIL.COM
          </a>
        </p>

        <p style={{ marginTop: "10px" }}>
          🕘 Operating Hours: 9:00 AM – 6:00 PM (EST)
        </p>

        <p style={{ marginTop: "34px", fontSize: "14px", color: "#aaa" }}>
          © {new Date().getFullYear()} DEW Solutions. All rights reserved.
        </p>
      </footer>
    </main>
  );
}