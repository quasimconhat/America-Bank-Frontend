import Select from "@/components/landing/home/Select";
import Products from "@/components/landing/product/Product";
import Products2 from "@/components/landing/product/Product2";
import Products3 from "@/components/landing/product/Product3";
import Products4 from "@/components/landing/product/Product4";
import ProductsImage from "@/public/assets/header.jpg";

export default function Home() {
  return (
    <>
      <Select 
        title="Products"
        description="Products description"
        activeButtonLetter="Products"
        backgroundImage={ProductsImage.src}      
      />
      <Products />
      <Products2 />
      <Products3 />
      <Products4 />
    </>
  );
}
