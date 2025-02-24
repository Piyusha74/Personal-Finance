import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashboardPage = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, name: "Salary", account: "Bank", type: "Income", amount: 5000 },
    { id: 2, name: "Groceries", account: "Credit Card", type: "Expense", amount: 200 },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    name: "",
    account: "",
    type: "Income",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const addTransaction = () => {
    if (newTransaction.name && newTransaction.account && newTransaction.amount) {
      setTransactions((prev) => [
        ...prev,
        { id: prev.length + 1, ...newTransaction, amount: parseFloat(newTransaction.amount) },
      ]);
      setNewTransaction({ name: "", account: "", type: "Income", amount: "" });
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", backgroundColor: "#e3f2fd", minHeight: "100vh", padding: "20px" }}>
      <Header />
      <main style={{ padding: "40px", backgroundColor: "#ffffff", margin: "20px auto", maxWidth: "900px", height: "400px", borderRadius: "12px", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", textAlign: "center" }}>
        <h2 style={{ color: "#1e88e5", fontSize: "32px", fontWeight: "bold", marginBottom: "15px" }}>Dashboard</h2>
        <p style={{ fontSize: "18px", color: "#424242", lineHeight: "1.6" }}>Your financial overview goes here.</p>
        
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr style={{ backgroundColor: "#1e88e5", color: "white" }}>
              <th style={{ padding: "10px" }}>Transaction</th>
              <th>Account</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td>{txn.name}</td>
                <td>{txn.account}</td>
                <td>{txn.type}</td>
                <td>${txn.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
          <br></br>
          <br></br>
          <br></br>
        <h3 style={{ marginTop: "20px", color: "#1e88e5" }}>Add Transaction</h3>
        <div>
          <input type="text" name="name" placeholder="Transaction Name" value={newTransaction.name} onChange={handleChange} style={{ margin: "5px", padding: "5px" }} />
          <input type="text" name="account" placeholder="Account" value={newTransaction.account} onChange={handleChange} style={{ margin: "5px", padding: "5px" }} />
          <select name="type" value={newTransaction.type} onChange={handleChange} style={{ margin: "5px", padding: "5px" }}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <input type="number" name="amount" placeholder="Amount" value={newTransaction.amount} onChange={handleChange} style={{ margin: "5px", padding: "5px" }} />
          <button onClick={addTransaction} style={{ margin: "5px", padding: "8px 15px", backgroundColor: "#1e88e5", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}>Add</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;