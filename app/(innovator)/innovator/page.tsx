import Select from "@/components/landing/home/Select";
import Innovator from "@/components/landing/innovator/Innovator";
import InnovatorImage from "@/public/assets/header.jpg";

export default function Home() {
  return (
    <>
      <Select 
        title="Innovator"
        description="Innovator description"
        activeButtonLetter="Innovator"
        backgroundImage={InnovatorImage.src}      
      />
      <Innovator />
    </>
  );
}
