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
        }}
      >
        <h1 style={{ margin: 0, fontSize: "22px" }}>DEW Solutions</h1>

        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href="tel:+16107518710"
            style={{
              padding: "10px 16px",
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
            style={{
              padding: "10px 16px",
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
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "44px", maxWidth: "900px", margin: "0 auto" }}>
          Websites & AI Automation Built to Grow Your Business
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "24px auto",
            fontSize: "18px",
            color: "#ccc",
          }}
        >
          DEW Solutions helps businesses generate more leads, save time, and
          scale operations through modern websites and intelligent automation.
        </p>

        <div style={{ marginTop: "36px" }}>
          <a
            href="tel:+16107518710"
            style={{
              padding: "14px 24px",
              backgroundColor: "#fff",
              color: "#000",
              textDecoration: "none",
              marginRight: "14px",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            Call Now
          </a>

          <a
            href="https://cal.com/dew-solutions/demo-meeting"
            target="_blank"
            style={{
              padding: "14px 24px",
              backgroundColor: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            Book a Free Demo
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "90px 20px",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <h3 style={{ fontSize: "34px", marginBottom: "50px" }}>
          What We Do
        </h3>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "28px",
          }}
        >
          <div style={{ border: "1px solid #eee", padding: "28px" }}>
            <h4>Website Design</h4>
            <p>
              Clean, modern, mobile-friendly websites designed to convert
              visitors into customers.
            </p>
          </div>

          <div style={{ border: "1px solid #eee", padding: "28px" }}>
            <h4>AI Automation</h4>
            <p>
              AI chatbots, automations, and workflows that handle leads,
              scheduling, and follow-ups automatically.
            </p>
          </div>

          <div style={{ border: "1px solid #eee", padding: "28px" }}>
            <h4>Lead Generation</h4>
            <p>
              Funnels and systems that turn traffic into real business
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CALENDAR */}
      <section
        style={{
          padding: "90px 20px",
          backgroundColor: "#f4f4f4",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "34px", marginBottom: "30px" }}>
          Book a Free Strategy Call
        </h3>

        <iframe
          src="https://cal.com/dew-solutions/demo-meeting"
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "700px",
            border: "none",
            margin: "0 auto",
          }}
        />
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "24px" }}>Contact Information</h3>

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

        <p>🕘 Operating Hours: 9:00 AM – 6:00 PM (EST)</p>

        <p style={{ marginTop: "30px", fontSize: "14px", color: "#aaa" }}>
          © {new Date().getFullYear()} DEW Solutions
        </p>
      </footer>

    </main>
  );
}