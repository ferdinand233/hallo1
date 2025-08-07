import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './App.css';

function App() {
  const [data, setData] = useState({
    sender_name: '',
    sender_address: '',
    iban: '',
    ust_id: '',
    client_name: '',
    client_address: '',
    service: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const today = new Date().toLocaleDateString();
    const invoiceNumber = "RE-" + Date.now().toString().slice(-6);

    doc.setFontSize(16);
    doc.text("RECHNUNG", 105, 20, null, null, "center");

    doc.setFontSize(12);
    doc.text("Rechnungssteller:", 14, 35);
    doc.setFont("helvetica", "normal");
    doc.text(data.sender_name || "-", 14, 42);
    doc.text(data.sender_address || "-", 14, 49);
    doc.text("IBAN: " + (data.iban || "-"), 14, 56);
    doc.text("USt-ID: " + (data.ust_id || "-"), 14, 63);

    doc.setFont("helvetica", "bold");
    doc.text("Empfänger:", 14, 75);
    doc.setFont("helvetica", "normal");
    doc.text(data.client_name || "-", 14, 82);
    doc.text(data.client_address || "-", 14, 89);

    doc.setFont("helvetica", "normal");
    doc.text("Rechnungsnummer: " + invoiceNumber, 14, 100);
    doc.text("Rechnungsdatum: " + (data.date || today), 14, 107);

    doc.setFont("helvetica", "bold");
    doc.text("Leistung", 14, 120);
    doc.text("Betrag (€)", 150, 120);

    doc.setFont("helvetica", "normal");
    doc.text(data.service || "-", 14, 127);
    doc.text(data.amount || "-", 150, 127);

    doc.setFont("helvetica", "bold");
    doc.text("Gesamtbetrag: €" + (data.amount || "0.00"), 14, 140);

    doc.setFontSize(10);
    doc.text("Bitte überweisen Sie den Betrag innerhalb von 7 Tagen.", 14, 155);
    doc.text("Hinweis: Gemäß § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.", 14, 162);

    doc.save("rechnung.pdf");
  };

  return (
    <div className="container">
      <h1>Professioneller Rechnungs-Generator</h1>
      <form>
        <h2>Rechnungssteller</h2>
        <input name="sender_name" placeholder="Name" onChange={handleChange} />
        <input name="sender_address" placeholder="Adresse" onChange={handleChange} />
        <input name="iban" placeholder="IBAN" onChange={handleChange} />
        <input name="ust_id" placeholder="USt-ID" onChange={handleChange} />

        <h2>Empfänger</h2>
        <input name="client_name" placeholder="Name" onChange={handleChange} />
        <input name="client_address" placeholder="Adresse" onChange={handleChange} />

        <h2>Rechnungsdetails</h2>
        <input name="service" placeholder="Leistung" onChange={handleChange} />
        <input name="amount" type="number" placeholder="Betrag (€)" onChange={handleChange} />
        <input name="date" type="date" onChange={handleChange} />

        <button type="button" onClick={generatePDF}>PDF herunterladen</button>
      </form>
    </div>
  );
}

export default App;