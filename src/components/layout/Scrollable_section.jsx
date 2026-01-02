// src/components/layout/ScrollableSection.jsx

import GradualBlur from "../animations/Gradual_Blur.jsx";
import HeroSection from "./Hero_section.jsx"; // Import HeroSection
import About_me from "./About_me.jsx"; // Import About_me
import Projects from "./Projects.jsx"; // Import Projects

export default function ScrollableSection() {
  return (
    <section style={{ position: "relative" }}>
      {/* <div style={{ padding: "6rem 2rem 0 2rem" }}> */}
      <div>
        <HeroSection />
        <About_me />
        <Projects />
      </div>

      {/* page-level blur handled in App; keep this inert or page-targeted */}
      <GradualBlur
        target="page"
        position="bottom"
        height="4rem"
        strength={2}
        divCount={20}
        curve="ease-in"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
