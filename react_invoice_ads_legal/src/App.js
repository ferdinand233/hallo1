import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './index.css';
import CookieConsent from './components/CookieConsent';
import { Impressum } from './components/Impressum';
import { Datenschutz } from './components/Datenschutz';

function App() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderAddress: '',
    iban: '',
    ustId: '',
    clientName: '',
    clientAddress: '',
    service: '',
    amount: '',
    date: ''
  });

  const [view, setView] = useState('form');

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('RECHNUNG', 105, 20, null, null, 'center');
    doc.setFontSize(12);
    doc.text(`Rechnungssteller:
${formData.senderName}
${formData.senderAddress}
IBAN: ${formData.iban}
USt-ID: ${formData.ustId}`, 20, 40);
    doc.text(`Empfänger:
${formData.clientName}
${formData.clientAddress}`, 20, 90);
    doc.text(`Leistung: ${formData.service}`, 20, 130);
    doc.text(`Betrag: ${formData.amount} €`, 20, 140);
    doc.text(`Datum: ${formData.date}`, 20, 150);
    doc.save("rechnung.pdf");
  };

  if (view === 'impressum') return <Impressum goBack={() => setView('form')} />;
  if (view === 'datenschutz') return <Datenschutz goBack={() => setView('form')} />;

  return (
    <div className="container">
      <h1>Rechnungsgenerator</h1>
      <input placeholder="Name Rechnungssteller" onChange={e => setFormData({ ...formData, senderName: e.target.value })} />
      <input placeholder="Adresse Rechnungssteller" onChange={e => setFormData({ ...formData, senderAddress: e.target.value })} />
      <input placeholder="IBAN" onChange={e => setFormData({ ...formData, iban: e.target.value })} />
      <input placeholder="USt-ID (optional)" onChange={e => setFormData({ ...formData, ustId: e.target.value })} />
      <input placeholder="Name Empfänger" onChange={e => setFormData({ ...formData, clientName: e.target.value })} />
      <input placeholder="Adresse Empfänger" onChange={e => setFormData({ ...formData, clientAddress: e.target.value })} />
      <textarea placeholder="Leistung" onChange={e => setFormData({ ...formData, service: e.target.value })} />
      <input placeholder="Betrag (€)" type="number" onChange={e => setFormData({ ...formData, amount: e.target.value })} />
      <input placeholder="Datum" type="date" onChange={e => setFormData({ ...formData, date: e.target.value })} />
      <button onClick={generatePDF}>PDF generieren</button>
      <br /><br />
      <a href="#" onClick={() => setView('impressum')}>Impressum</a> | <a href="#" onClick={() => setView('datenschutz')}>Datenschutz</a>
      <CookieConsent />
    </div>
  );
}

export default App;