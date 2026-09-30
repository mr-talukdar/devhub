const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        style={{
          width: "20%",
          height: "100%",
          backgroundColor: "var(--color-primary)",
          color: "black",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        DH
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "var(--color-text)",
          width: "80%",
        }}>
        <div style={{ fontSize: 22 }}>DevHub</div>
        <div style={{ fontSize: 12, color: "#6b6d71" }}>Engineering Hub</div>
      </div>
    </div>
  );
};

export default Logo;
