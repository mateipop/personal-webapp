import { re } from "mathjs";
import MagicBento from "../animations/Magic_Bento.jsx";
export default function Projects() {
  return (
    <section id="projects" className="flex justify-center my-20">
      <div className="w-full max-w-5xl">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={false}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="31,255,255"
        />
      </div>
    </section>
  );
}
