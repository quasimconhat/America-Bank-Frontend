import Select from "@/components/landing/home/Select";
import Services from "@/components/landing/services/Services";
import Services2 from "@/components/landing/services/Services2";
import ServicesImage from "@/public/assets/header.jpg";

export default function Home() {
  return (
    <>
      <Select 
        title="Services"
        description="Services description"
        activeButtonLetter="Services"
        backgroundImage={ServicesImage.src}      
      />
      <Services />
      <Services2 />
    </>
  );
}
