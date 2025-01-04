import Select from "@/components/landing/small-business/Select";
import HomeImage from "@/public/assets/header/home.jpg";
import Form from "@/components/landing/small-business/Form";
import Form2 from "@/components/landing/small-business/Form2";
import Form3 from "@/components/landing/small-business/Form3";
import Form4 from "@/components/landing/small-business/Form4";

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
