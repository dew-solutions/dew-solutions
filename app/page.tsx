export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>DEW Solutions</h1>

        <div>
          <a
            href="tel:+16107518710"
            style={{
              color: "#fff",
              marginRight: "15px",
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
          minHeight: "70vh",
          backgroundColor: "#111",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", maxWidth: "800px", margin: "0 auto" }}>
          Websites & AI Automation Built to Grow Your Business
        </h2>

        <p
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            fontSize: "18px",
          }}
        >
          DEW Solutions builds modern websites and intelligent automation systems
          that help businesses generate leads and save time.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a
            href="tel:+16107518710"
            style={{
              padding: "12px 20px",
              backgroundColor: "#fff",
              color: "#000",
              textDecoration: "none",
              marginRight: "10px",
              borderRadius: "4px",
            }}
          >
            Call Now
          </a>

          <a
            href="https://cal.com/dew-solutions/demo-meeting"
            target="_blank"
            style={{
              padding: "12px 20px",
              backgroundColor: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Book a Demo
          </a>
        </div>
      </section>

      {/* FOOTER / CONTACT INFO */}
      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Contact Information</h3>

        <p style={{ margin: "8px 0" }}>
          Phone:{" "}
          <a
            href="tel:+16107518710"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            +1 (610) 751-8710
          </a>
        </p>

        <p style={{ margin: "8px 0" }}>
          Email:{" "}
          <a
            href="mailto:DEWSOLUTIONSOWNER@GMAIL.COM"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            DEWSOLUTIONSOWNER@GMAIL.COM
          </a>
        </p>

        <p style={{ margin: "8px 0" }}>
          Hours: 9:00 AM – 6:00 PM (EST)
        </p>

        <p style={{ marginTop: "30px", fontSize: "14px", color: "#aaa" }}>
          © {new Date().getFullYear()} DEW Solutions
        </p>
      </footer>
    </main>
  );
}