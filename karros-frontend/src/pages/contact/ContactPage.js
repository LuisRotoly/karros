import "./contact.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function ContactPage() {
  return (
    <div>
      <p className="contact-title">Fale conosco</p>
      <div className="contact-block">
        <div className="contact-margin">
          <EmailIcon className="contact-icon" />
          <p className="contact-subtitle">E-mail</p>
          <p className="email">contato@karros.com</p>
        </div>
        <div className="contact-margin">
          <PhoneIcon className="contact-icon" />
          <p className="contact-subtitle">Telefone</p>
          <p className="phone">(00)00000-0000</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
