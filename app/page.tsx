
import About from "@/components/about";
import FeaturedPrograms from "@/components/featured-programs";
import {HeroDemo1} from "@/components/hero";
import How from "@/components/how";

export default function Home() {
  return (
    <div>
      <HeroDemo1 />
      <About/>
      <How/>
      <FeaturedPrograms/>
    </div>
  );
}
  
