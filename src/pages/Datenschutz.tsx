import { Link } from "react-router-dom";

const PINK = "#E9B8C8";
const GOLD = "#D6B76D";
const TEXT = "#2A2528";
const MUTED = "#7A6E72";
const BG = "#FFF7F2";

const heading: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  color: PINK,
  fontSize: 16,
  marginBottom: 10,
  marginTop: 0,
};

const body: React.CSSProperties = {
  color: MUTED,
  fontSize: 13,
  lineHeight: 1.88,
  margin: 0,
};

const section: React.CSSProperties = { marginBottom: 32 };

export default function Datenschutz() {
  return (
    <div style={{ background: BG, minHeight: "100vh", padding: "60px 0 120px", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        <Link to="/" style={{ color: PINK, fontSize: 13, textDecoration: "none", letterSpacing: 1.5, textTransform: "uppercase" }}>
          ← Zurück zur Startseite
        </Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: TEXT, fontSize: 36, margin: "24px 0 6px" }}>
          Datenschutzerklärung
        </h1>
        <p style={{ ...body, marginBottom: 36 }}>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG).
        </p>

        <div style={section}>
          <h3 style={heading}>1. Verantwortliche</h3>
          <p style={body}>
            Danijela Bošković<br />
            Klosterneuburger Straße 98<br />
            1200 Wien<br />
            Österreich<br /><br />
            E-Mail: kontakt@divinenails.at<br />
            Telefon: +43 676 3633721
          </p>
        </div>

        <div style={section}>
          <h3 style={heading}>2. Zugriffsdaten und Hosting</h3>
          <p style={body}>
            Beim Besuch dieser Website werden automatisch Informationen durch den Hosting-Anbieter gespeichert. Dazu gehören insbesondere:
          </p>
          <ul style={{ ...body, paddingLeft: 20, marginTop: 8 }}>
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene Seiten</li>
            <li>Browsertyp und Betriebssystem</li>
          </ul>
          <p style={{ ...body, marginTop: 8 }}>
            Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit der Website.
          </p>
        </div>

        <div style={section}>
          <h3 style={heading}>3. Kontaktformular und Kontaktaufnahme</h3>
          <p style={body}>
            Wenn Sie über das Kontaktformular oder per E-Mail Kontakt mit uns aufnehmen, werden die von Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer und Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.<br /><br />
            Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO bzw. zur Durchführung vorvertraglicher Maßnahmen gemäß Art. 6 Abs. 1 lit. b DSGVO.<br /><br />
            Für das Kontaktformular verwenden wir den Dienst <strong>Web3Forms</strong>. Die über das Formular eingegebenen Daten werden zur Übermittlung Ihrer Anfrage an Web3Forms übermittelt und anschließend per E-Mail an uns weitergeleitet.<br /><br />
            <strong>Anbieter:</strong><br />
            Web3Forms<br /><br />
            Weitere Informationen zur Datenverarbeitung durch Web3Forms finden Sie in der{" "}
            <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: PINK }}>
              Datenschutzerklärung des Anbieters
            </a>.<br /><br />
            Die Daten werden nicht ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben, sofern dies nicht zur Bearbeitung Ihrer Anfrage erforderlich ist.
          </p>
        </div>

        <div style={section}>
          <h3 style={heading}>4. Instagram</h3>
          <p style={body}>
            Auf dieser Website befinden sich Links zu Instagram.<br />
            Beim Anklicken des Links werden Sie auf die Plattform Instagram weitergeleitet. Dabei können Daten durch Meta Platforms verarbeitet werden.<br /><br />
            Weitere Informationen finden Sie unter:{" "}
            <a href="https://privacycenter.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: PINK }}>
              privacycenter.instagram.com
            </a>
          </p>
        </div>

        <div style={section}>
          <h3 style={heading}>5. Google Maps</h3>
          <p style={body}>
            Auf dieser Website ist Google Maps zur Darstellung unseres Standorts eingebunden.<br />
            Beim Aufruf der Karte können personenbezogene Daten, insbesondere Ihre IP-Adresse, an Google übermittelt werden.<br /><br />
            Anbieter:<br />
            Google Ireland Limited<br />
            Gordon House, Barrow Street<br />
            Dublin 4, Irland<br /><br />
            Weitere Informationen:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: PINK }}>
              policies.google.com/privacy
            </a>
          </p>
        </div>

        <div style={section}>
          <h3 style={heading}>6. Ihre Rechte</h3>
          <p style={body}>Ihnen stehen grundsätzlich die Rechte auf:</p>
          <ul style={{ ...body, paddingLeft: 20, marginTop: 8 }}>
            <li>Auskunft</li>
            <li>Berichtigung</li>
            <li>Löschung</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerruf</li>
            <li>Widerspruch</li>
          </ul>
          <p style={{ ...body, marginTop: 12 }}>
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der österreichischen Datenschutzbehörde beschweren.<br /><br />
            Österreichische Datenschutzbehörde<br />
            Barichgasse 40–42<br />
            1030 Wien<br />
            <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: PINK }}>
              www.dsb.gv.at
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
