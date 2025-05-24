import Image from "next/image";
import About from "./components/About";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
    </div>
  );
}
