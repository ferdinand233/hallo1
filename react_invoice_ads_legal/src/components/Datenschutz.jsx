import React from 'react';

export const Datenschutz = ({ goBack }) => (
  <div className="container">
    <h2>Datenschutzerklärung</h2>
    <p>Diese Website verwendet Google AdSense, einen Dienst zur Einbindung von Werbeanzeigen der Google LLC.</p>
    <p>AdSense verwendet Cookies und verarbeitet personenbezogene Daten wie IP-Adressen und Nutzerverhalten.</p>
    <p>Durch die Nutzung dieser Website stimmen Sie der Verarbeitung Ihrer Daten gemäß DSGVO zu.</p>
    <button onClick={goBack}>Zurück</button>
  </div>
);