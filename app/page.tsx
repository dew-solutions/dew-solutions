export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* NAVBAR */}
      <header
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "22px" }}>DEW Solutions</h1>

        <div>
          <a
            href="tel:+16107518710"
            style={{
              color: "#fff",
              marginRight: "16px",
              textDecoration: "underline",
            }}
          >
            Call
          </a>
          <a
            href="https://cal.com/dew-solutions/demo-meeting"
            target="_blank"
            style={{
              color: "#fff",
              textDecoration: "underline",
            }}
          >
            Book Demo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px", maxWidth: "900px", margin: "0 auto" }}>
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

        <div style={{ marginTop: "32px" }}>
          <a
            href="tel:+16107518710"
            style={{
              padding: "14px 22px",
              backgroundColor: "#fff",
              color: "#000",
              textDecoration: "none",
              marginRight: "12px",
              borderRadius: "4px",
              fontWeight: 600,
            }}
          >
            Call Now
          </a>

          <a
            href="https://cal.com/dew-solutions/demo-meeting"
            target="_blank"
            style={{
              padding: "14px 22px",
              backgroundColor: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px",
              fontWeight: 600,
            }}
          >
            Book a Free Demo
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <h3 style={{ fontSize: "32px", marginBottom: "40px" }}>
          What We Do
        </h3>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          <div style={{ border: "1px solid #eee", padding: "24px" }}>
            <h4>Website Design</h4>
            <p>
              Clean, modern, mobile-friendly websites designed to convert
              visitors into customers.
            </p>
          </div>

          <div style={{ border: "1px solid #eee", padding: "24px" }}>
            <h4>AI Automation</h4>
            <p>
              AI chatbots, automations, and workflows that handle leads,
              scheduling, and follow-ups automatically.
            </p>
          </div>

          <div style={{ border: "1px solid #eee", padding: "24px" }}>
            <h4>Lead Generation</h4>
            <p>
              Funnels and systems that turn traffic into real business
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT INFO */}
      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Contact Information</h3>

        <p style={{ margin: "8px 0" }}>
          📞{" "}
          <a
            href="tel:+16107518710"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            +1 (610) 751-8710
          </a>
        </p>

        <p style={{ margin: "8px 0" }}>
          📧{" "}
          <a
            href="mailto:DEWSOLUTIONSOWNER@GMAIL.COM"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            DEWSOLUTIONSOWNER@GMAIL.COM
          </a>
        </p>

        <p style={{ margin: "8px 0" }}>
          🕘 Operating Hours: 9:00 AM – 6:00 PM (EST)
        </p>

        <p style={{ marginTop: "30px", fontSize: "14px", color: "#aaa" }}>
          © {new Date().getFullYear()} DEW Solutions
        </p>
      </footer>

    </main>
  );
}