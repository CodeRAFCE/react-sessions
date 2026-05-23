import { useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  console.log("ErrorPage error:", error);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.code}>{error.status}</div>
        <div style={styles.emoji}>🍽️</div>
        <h1 style={styles.title}>{error.statusText}</h1>
        <p style={styles.subtitle}>
          Looks like this page took the wrong turn. Let's get you back on track.
        </p>
        <button style={styles.btn} onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "calc(100vh - 72px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f5",
    padding: "40px 20px",
  },
  card: {
    background: "#fff",
    borderRadius: "20px",
    padding: "60px 48px",
    textAlign: "center",
    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
    maxWidth: "420px",
    width: "100%",
  },
  code: {
    fontSize: "96px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #ff6b35, #e84c4c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1,
    marginBottom: "8px",
  },
  emoji: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#888",
    lineHeight: "1.6",
    marginBottom: "32px",
  },
  btn: {
    padding: "12px 32px",
    fontSize: "15px",
    fontWeight: "600",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #ff6b35, #e84c4c)",
    color: "#fff",
    transition: "filter 0.2s",
  },
};

export default ErrorPage;
