import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", backgroundColor: "#e3f2fd", minHeight: "100vh", padding: "20px" }}>
      <Header />
      <main style={{ padding: "40px", backgroundColor: "#ffffff", margin: "20px auto", maxWidth: "400px", borderRadius: "12px", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", textAlign: "center" }}>
        <h2 style={{ color: "#1565c0", fontSize: "28px", fontWeight: "bold", marginBottom: "15px" }}>Login</h2>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;