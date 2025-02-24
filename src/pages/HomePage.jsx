import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", backgroundColor: "#e3f2fd", minHeight: "100vh", padding: "20px" }}>
      <Header />
      
      <main style={{ padding: "50px", backgroundColor: "#ffffff", margin: "20px auto", maxWidth: "900px", borderRadius: "15px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", textAlign: "center" }}>
        <h2 style={{ color: "#1565c0", fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>Welcome to Personal Finance Manager</h2>
        <p style={{ fontSize: "20px", color: "#424242", lineHeight: "1.8" }}>Track your income, expenses, and savings effortlessly.</p>

        {/* Features Section */}
        <section style={{ marginTop: "30px" }}>
          <h3 style={{ color: "#0d47a1", fontSize: "28px", marginBottom: "15px" }}>Key Features</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ backgroundColor: "#bbdefb", padding: "20px", borderRadius: "10px" }}>
              <h4 style={{ color: "#0d47a1" }}>💰 Expense Tracking</h4>
              <p style={{ color: "#424242", fontSize: "16px" }}>Monitor your daily expenses and categorize them efficiently.</p>
            </div>
            <div style={{ backgroundColor: "#b2dfdb", padding: "20px", borderRadius: "10px" }}>
              <h4 style={{ color: "#00695c" }}>📊 Financial Analytics</h4>
              <p style={{ color: "#424242", fontSize: "16px" }}>Visualize your spending habits with easy-to-read charts.</p>
            </div>
            
          </div>
        </section>

        {/* Call-to-Action */}
        <section style={{ marginTop: "40px" }}>
          <h3 style={{ color: "#0d47a1", fontSize: "28px", marginBottom: "10px" }}>Take Control of Your Finances</h3>
          <p style={{ fontSize: "18px", color: "#424242" }}>Join thousands of users managing their financial goals.</p>
          <button style={{ marginTop: "15px", backgroundColor: "#1565c0", color: "#ffffff", border: "none", padding: "12px 20px", fontSize: "18px", fontWeight: "bold", borderRadius: "8px", cursor: "pointer", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
            Get Started
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
