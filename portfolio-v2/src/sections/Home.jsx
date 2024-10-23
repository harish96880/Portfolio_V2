import Button from "../components/Button";
import "../index.css";
import chatImage from "../assets/icons/uim_whatsapp.svg";

export default function Home() {
  return (
    <section className="full-vh d-flex align-items-center justify-content-center bg-black">
      <Button logo={chatImage}>Get in Touch</Button>
    </section>
  );
}
