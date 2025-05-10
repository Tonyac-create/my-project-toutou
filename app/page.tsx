import HeroSection from "./components/HeroSection";
import SectionNounou from "./components/SectionNounou";
import SectionAssitants from "./components/SectionAssitants";
import SectionPictures from "./components/SectionPictures";
import SectionContact from "./components/SectionContact";

export default function Home() {
  return (
    <main className="px-6 sm:px-8 lg:px-12">
      <HeroSection />
      <SectionNounou />
      <SectionAssitants />
      <SectionPictures />
      <SectionContact />
    </main>
  );
}
