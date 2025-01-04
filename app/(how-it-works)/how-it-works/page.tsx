import Hero from "@/components/landing/how-it-works/Hero"
import Process1 from "@/components/landing/how-it-works/Process1"
import Process2 from "@/components/landing/how-it-works/Process2"
import Select from "@/components/landing/home/Select";
import HowItWorksImage from "@/public/assets/header.jpg";

export default function Home() {
  return (
    <>
      <Select 
        title="How It Works"
        description="HowItWorks description"
        activeButtonLetter="How It Works"
        backgroundImage={HowItWorksImage.src}      
      />
      <Hero />
      <Process1 />
      <Process2 />
    </>
  );
}
