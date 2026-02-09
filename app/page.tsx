export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* ANIMATED BACKGROUND STYLES */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hoverLift {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .hoverLift:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
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
          background: "linear-gradient(270deg, #000, #111, #000)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 18s ease infinite",
          color: "#fff",
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
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
          DEW Solutions helps businesses generate more leads, save time, and
          scale operations through modern websites and intelligent automation.
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
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <h3 style={{ fontSize: "36px", marginBottom: "14px" }}>
          What We Do
        </h3>

        <p style={{ color: "#555", marginBottom: "60px" }}>
          Simple, effective solutions designed to drive real results.
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
              desc:
                "Clean, modern, mobile-friendly websites designed to convert visitors into customers.",
            },
            {
              title: "AI Automation",
              desc:
                "AI chatbots and automations that handle leads, scheduling, and follow-ups automatically.",
            },
            {
              title: "Lead Generation",
              desc:
                "Funnels and systems that turn traffic into real business opportunities.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="hoverLift"
              style={{
                border: "1px solid #e5e7eb",
                padding: "34px 28px",
                borderRadius: "14px",
                backgroundColor: "#fafafa",
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
          No pressure. Just a quick call to see if we’re a good fit.
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
          <a
            href="tel:+16107518710"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            +1 (610) 751-8710
          </a>
        </p>

        <p>
          📧{" "}
          <a
            href="mailto:DEWSOLUTIONSOWNER@GMAIL.COM"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
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