// import Button from "../components/Button";
import Glow from "../components/Glow";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavbarComponent";
import "../index.css";
// import chatImage from "../assets/icons/uim_whatsapp.svg";

export default function Home() {
  return (
    <>
      <Glow top={"0"} />
      <Glow top={"20rem"} left={"80rem"} />
      <section className="full-vh bg-black">
        <nav style={{ width: "100%" }}>
          <Navbar />
        </nav>
        <HeroSection />
      </section>
    </>
  );
}
