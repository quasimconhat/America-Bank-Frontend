import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link";

interface BoxProps {
  width: string
  height: string
  letter1: string
  letter2: string
  buttons: Array<{
    text: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  }>
  active: string
  buttonLetter: string
}

const buttonLetters = [
  { text: 'Innovator', link: 'innovator', title: 'Innovator', description: 'Innovator description' },
  { text: 'Services', link: 'services', title: 'Services', description: 'Services description' },
  { text: 'Products', link: 'products', title: 'Products', description: 'Products description' },
  { text: 'How It Works', link: 'how-it-works', title: 'How It Works', description: 'How It Works description' },
  { text: 'About Us', link: 'about-us', title: 'About Us', description: 'About Us description' },
];

export const Box: React.FC<BoxProps> = ({
  width,
  height,
  letter1,
  letter2,
  buttons,
  active,
  buttonLetter
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center pt-[2%] rounded-lg border-2 bg-white",
        width,
        height,
      )}
      style={{ minHeight: 'fit-content' }}
    >
      <span className="text-4xl font-bold mb-4 text-center">{letter1}</span>
      <span className="text-2xl mb-4 text-center">{letter2}</span>
      <div className="flex flex-wrap gap-2 justify-center">
        {buttons && buttons.map((button, index) => (
          <Button key={index} variant={button.variant || "default"}>
            {button.text}
          </Button>
        ))}
      </div>
      <div className="bg-gray-100 w-[100%] pb-0 flex justify-center mt-[2vh]">
        <div className="px-4">
        {buttonLetter==="0" && buttonLetters.map((button) => (
            <Link href={ `/${button.link}`} key={button.text}>
                <button
                    key={button.text}
                    className={`px-8 py-4 text-sm md:text-base lg:text-lg ${
                    button.text === active
                        ? 'border-b-2 font-bold border-blue-500 text-blue-500'
                        : ''
                    }`}
                >
                    {button.text}
                </button>
            </Link>
        ))}
        </div>
      </div>
    </div>
  )
}
