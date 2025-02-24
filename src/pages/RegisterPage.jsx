import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", backgroundColor: "#e3f2fd", minHeight: "100vh", padding: "20px" }}>
      <Header />
      <main style={{ padding: "40px", backgroundColor: "#ffffff", margin: "20px auto", maxWidth: "450px", borderRadius: "12px", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", textAlign: "center" }}>
        <h2 style={{ color: "#1565c0", fontSize: "28px", fontWeight: "bold", marginBottom: "15px" }}>Register</h2>
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
