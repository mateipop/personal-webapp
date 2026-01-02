import { useState } from "react";

import HeroSection from "./components/layout/Hero_section.jsx";
import About_me from "./components/layout/About_me.jsx";
import Gradual_Blur from "./components/animations/Gradual_Blur.jsx";
import ScrollableSection from "./components/layout/Scrollable_section.jsx";

export default function App() {
  const [effectsOn, setEffectsOn] = useState(true);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#060010] text-white">
      {/* Hero section with laser + bio text */}
      <ScrollableSection />
    </div>
  );
}
