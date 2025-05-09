import HeroSection from "./components/HeroSection";
import SectionNounou from "./components/SectionNounou";
import SectionAssitants from "./components/SectionAssitants";
import SectionPictures from "./components/SectionPictures";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <SectionNounou />
      <SectionAssitants />
      <SectionPictures />
    </main>
  );
}
