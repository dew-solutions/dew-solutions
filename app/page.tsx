// app/page.tsx
export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* NAVBAR */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <strong style={{ fontSize: 20 }}>DEW Solutions</strong>

        <div style={{ display: "flex", gap: 12 }}>
          <a
            href="tel:+16107518710"
            style={{
              padding: "10px 16px",
              border: "1px solid #fff",
              color: "#fff",
              textDecoration: "none",
              borderRadius: 6,
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
              color: "#fff",
              textDecoration: "none",
              borderRadius: 6,
            }}
          >
            Book a Demo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          minHeight: "85vh",
          background: "linear-gradient(to bottom, #000, #111)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h1 style={{ fontSize: 48, maxWidth: 900 }}>
          Websites & AI Automation Built to Grow Your Business
        </h1>

        <p
          style={{
            marginTop: 20,
            fontSize: 18,
            maxWidth: 700,
            color: "#ccc",
          }}
        >
          DEW Solutions designs high-converting websites and intelligent
          automation systems that help businesses save time, capture more leads,
          and scale efficiently.
        </p>

        <div style={{ marginTop: 30, display: "flex", gap: 16 }}>
          <a
            href="tel:+16107518710"
            style={{
              padding: "14px 24px",
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: 600,
              textDecoration: "none",
              borderRadius: 8,
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
              fontWeight: 600,
              textDecoration: "none",
              borderRadius: 8,
            }}
          >
            Book a Free Demo
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: 36 }}>What We Do</h2>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
            maxWidth: 1000,
            marginInline: "auto",
          }}
        >
          <div style={{ padding: 24, border: "1px solid #eee" }}>
            <h3>Website Design</h3>
            <p>
              Modern, fast, mobile-friendly websites designed to convert
              visitors into customers.
            </p>
          </div>

          <div style={{ padding: 24, border: "1px solid #eee" }}>
            <h3>AI Automation</h3>
            <p>
              AI agents, chatbots, and automations that handle leads, scheduling,
              and follow-ups automatically.
            </p>
          </div>

          <div style={{ padding: 24, border: "1px solid #eee" }}>
            <h3>Lead Generation</h3>
            <p>
              Funnels, integrations, and automations that turn traffic into real
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CALENDAR */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center", fontSize: 36 }}>
          Book a Free Strategy Call
        </h2>

        <div style={{ marginTop: 40 }}>
          <iframe
            src="https://cal.com/dew-solutions/demo-meeting"
            style={{
              width: "100%",
              height: 700,
              border: "none",
            }}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: 30,
          textAlign: "center",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        © {new Date().getFullYear()} DEW Solutions
      </footer>
      {/* CONTACT INFO / FOOTER */}
         <section
           style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "60px 20px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: 32, marginBottom: 20 }}>
               Get in Touch
             </h2>

            <p style={{ fontSize: 18, marginBottom: 10 }}>
             📞{" "}
            <a
               href="tel:+16107518710"
               style={{ color: "#fff", textDecoration: "underline" }}
             >
               +1 (610) 751-8710
            </a>
        </p>

         <p style={{ fontSize: 18, marginBottom: 10 }}>
           📧{" "}
          <a
             href="mailto:DEWSOLUTIONSOWNER@GMAIL.COM"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
             DEWSOLUTIONSOWNER@GMAIL.COM
          </a>
        </p>

        <p style={{ fontSize: 18, marginBottom: 30 }}>
          🕘 Operating Hours: 9:00 AM – 6:00 PM (EST)
        </p>

       <p style={{ fontSize: 14, color: "#aaa" }}>
           © {new Date().getFullYear()} DEW Solutions. All rights reserved.
        </p>
     </section>
    </main>
  );
}