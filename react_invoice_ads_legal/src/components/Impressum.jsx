import React from 'react';

export const Impressum = ({ goBack }) => (
  <div className="container">
    <h2>Impressum</h2>
    <p>Angaben gemäß § 5 TMG:</p>
    <p>Ferdinand Wutte<br />Urberweg 26a<br />3400 Klosterneuburg</p>
    <p>Kontakt:<br />E-Mail: ferdinand.wutte@gmail.com</p>
    <button onClick={goBack}>Zurück</button>
  </div>
);