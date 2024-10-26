import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import ChatIcon from "../assets/icons/uim_whatsapp.svg";

export default function HeroSection() {
  const heroRoleText = {
    color: "#2CF9FC",
    fontFamily: "Montserrat",
    fontSize: "1.12rem",
    fontWeight: "400",
    letterSpacing: "0.37rem",
  };

  const heroDescText = {
    color: "#B8B8B8",
    fontFamily: "Montserrat",
    fontSize: "23px",
    fontWeight: "400",
    letterSpacing: "1.32px",
  };
  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <div className="row align-items-center" style={{ minHeight: "100vh" }}>
        {/* First Column - Image */}
        <div className="col-md-6 d-none d-md-block">
          <div
            style={{
              backgroundImage: `url('your-image-url-here')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
              width: "100%",
            }}
          />
        </div>

        {/* Second Column - Hero Content */}
        <div className="col-md-6 text-start">
          <h4 className="" style={heroRoleText}>
            WEB DEVELOPER AND DESIGNER
          </h4>
          <h1 className="display-3 fw-bold text-white">
            Available for <br />
            Freelance Projects
          </h1>
          <p className="lead" style={heroDescText}>
            Transforming Ideas into Engaging <br />
            Websites and Mobile Apps
          </p>
          <Button
            width={"16rem"}
            height={"3rem"}
            outlineColor={"rgba(0, 255, 183, 0.33)"}
            logo={ChatIcon}
            logoWidth={"45rem"}
            fontSize={"1.1rem"}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
