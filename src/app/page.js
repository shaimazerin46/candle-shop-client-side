import Image from "next/image";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import FeaturesProduct from "./components/FeaturesProduct";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <FeaturesProduct></FeaturesProduct>
    </div>
  );
}
