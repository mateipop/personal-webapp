import { useEffect } from "react";
import heroImg from "../../assets/images/git-profile-image.png";
import CV from "../../assets/images/Mega_CV.pdf";
import StarBorder from "../animations/Star_Border.jsx";
import DecryptedText from "../animations/Decrypted_Text";
import Projects from "./Projects";

export default function Hero_section() {
  useEffect(() => {
    document.title = "Matei Pop - Portofolio";
  }, []);

  const downloadCVButton = () => {
    const pdfUrl = CV;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = " ";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      className="relative overflow-hidden bg-transparent"
      style={{ height: "720px" }}
    >
      {/* Background image */}
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ filter: "brightness(0.5) contrast(0.9) saturate(0.9)" }}
      />

      {/* Vignette + left shadow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 70% 50%, rgba(6,0,16,0) 25%, rgba(6,0,16,0.6) 65%, rgba(6,0,16,0.9) 100%)",
        }}
      />
      <div className="absolute inset-y-0 left-0 w-3/5 md:w-1/2 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      {/* Text */}
      <div className="relative z-10 mx-auto grid h-full max-w-6xl grid-cols-12">
        <div className="col-span-12 flex items-center md:col-span-6">
          <div className="max-w-xl px-6 text-white md:px-8 lg:px-10">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <div style={{ marginTop: "4rem" }}>
                <DecryptedText
                  text="Pop Matei-Ionuț"
                  animateOn="both"
                  revealDirection="center"
                  speed={150}
                  sequential={true}
                  maxIterations={2}
                />
              </div>
            </h1>
            <div style={{ marginTop: "1rem" }}>
              <DecryptedText
                text="Thanks for stopping by! My name’s Matei, and this is where I share
              the projects I’ve worked on, the tools I enjoy using, and the
              lessons I’ve picked up while building. Think of it as both a
              portfolio and a personal journal."
                animateOn="view"
                revealDirection="center"
                speed={220}
                sequential={false}
                maxIterations={30}
              />
            </div>
            <div className="mt-8 flex gap-3">
              <StarBorder
                as="button"
                color="cyan"
                thickness={3}
                speed="2s"
                className="hover:scale-[1.02] transition-transform"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                See projects
              </StarBorder>

              <StarBorder
                as="button"
                color="cyan"
                thickness={3}
                speed="2s"
                className=" hover:scale-[1.02] transition-transform"
                onClick={downloadCVButton}
              >
                Download CV
              </StarBorder>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:col-span-6" />
      </div>
    </section>
  );
}
