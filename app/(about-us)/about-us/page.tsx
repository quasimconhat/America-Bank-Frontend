import Hero from "@/components/landing/about/Hero"
import Select from "@/components/landing/home/Select";
import AboutUsImage from "@/public/assets/header.jpg";

export default function Home() {
  return (
    <>
      <Select 
        title="About Us"
        description="AboutUs description"
        activeButtonLetter="About Us"
        backgroundImage={AboutUsImage.src}      
      />
      <Hero />
    </>
  );
}
