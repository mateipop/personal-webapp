import { useEffect } from "react";
import profileImg from "../../assets/images/abstract.jpg";
import LogoLoop from "../animations/Logo_Loop.jsx";
import GlareHover from "../animations/Glare_Hover.jsx";
import AnimatedContent from "../animations/Animated_Content.jsx";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiPython,
  SiSharp,
  SiDotnet,
  SiVite,
  SiNetlify,
} from "react-icons/si";

export default function App() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },

    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },

    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },

    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },

    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },

    {
      node: <SiPython />,
      title: "Python",
      href: "https://www.python.org",
    },
    {
      node: <SiSharp></SiSharp>,
      title: "C#",
      href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },

    {
      node: <SiDotnet />,
      title: ".NET",
      href: "https://dotnet.microsoft.com/",
    },
    {
      node: <SiVite />,
      title: "Vite",
      href: "https://vitejs.dev/",
    },

    {
      node: <SiNetlify />,
      title: "Netlify",
      href: "https://www.netlify.com/",
    },
  ];

  return (
    <div>
      <div className="min-h-screen relative flex flex-col items-center justify-center gap-6 px-6 py-12 text-center">
        {/* The GlareHover component is already correctly wrapped around the image */}
        {/* The parent div's style is removed to allow the content to size the container */}
        <div className="relative">
          <GlareHover
            width="20rem" // matches Tailwind w-40 (10rem)
            height="20rem"
            borderRadius="9999px" // makes the wrapper circular
            glareColor="#ffffff"
            glareOpacity={0.8}
            glareAngle={0}
            glareSize={400}
            transitionDuration={800}
            playOnce={false}
            className="overflow-hidden"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </GlareHover>
        </div>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="max-w-3xl mx-auto text-center font-mono text-lg md:text-basew">
            <p className="text-slate-200 leading-relaxed">
              Hey, I’m Matei — a 22-year-old developer who builds things that
              work, and occasionally things that think. My background is in the
              "tangible" side of tech.
            </p>

            <p className="mt-4 text-slate-200 leading-relaxed ">
              At Continental, I built Windows apps that translated tyre sensor
              data into something human-readable—essentially giving cars a
              voice. Before that, I spent time at Jolly Roger realizing that
              customer support is just debugging humans in real-time (and humans
              are much harder to patch than code).
            </p>

            <p className="mt-4 text-slate-200 leading-relaxed">
              I like building small, useful tools that make life easier, whether
              it’s reading sensor data, automating a boring task, or hacking
              together a flashy React animation. My stack of choice is React +
              .NET (with a side of Python), but I’m more motivated by solving
              problems than by worshiping one framework.
            </p>

            <p className="mt-4 text-slate-200 leading-relaxed">
              Lately, my curiosity has shifted from just building tools to
              making them smarter. I’m currently deep-diving into AI and LLMs,
              exploring how to move beyond basic automation and into the world
              of generative agents. My stack is React + .NET, but these days
              there’s usually a Python script running an LLM chain somewhere in
              the background.
            </p>

            <p className="mt-4 text-slate-200 leading-relaxed">
              Outside of code, I’m usually riding motorcycles, trying to
              convince people that Tailwind classes aren't hieroglyphics, or
              drinking coffee strong enough to fine-tune a Llama model on its
              own. TL;DR: I like tech, I like people, and I’m currently obsessed
              with making machines talk back (intentionally). If the build
              breaks, it’s personal. If the LLM starts hallucinating, it's a
              feature request.
            </p>
          </div>
        </AnimatedContent>
      </div>
      <div className="h-12 mb-12">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={70}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut
          fadeOutColor="black"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}
