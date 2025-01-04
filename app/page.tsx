import Select from "@/components/landing/home/Select";
import HomeImage from "@/public/assets/header/home.jpg";
import Form from "@/components/landing/home/Form";
import Form2 from "@/components/landing/home/Form2";
import Form3 from "@/components/landing/home/Form3";
import Form4 from "@/components/landing/home/Form4";

export default function Home() {
  return (
    <>
      <Select 
        title="Home"
        description="Home description"
        activeButtonLetter="Home"
        backgroundImage={HomeImage.src}      
      />
      <Form />
      <Form2 />
      <Form3 />
      <Form4 />
    </>
  );
}
