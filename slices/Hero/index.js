import React from "react";
import Button from "@/components/atoms/Button";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <header className="flex flex-col-reverse max-w-5xl gap-8 py-16 mx-auto md:py-32 md:flex-row md:justify-between md:items-center">
    <div className="text-center md:text-left">
      <h1
        className="text-white text-4xl md:text-[3.375rem] font-semibold leading-tight mb-4 md:mb-6"
        dangerouslySetInnerHTML={{ __html: slice.primary.title }}
      ></h1>
      <p className="text-white-alt font-medium text-xl md:text-[1.75rem] mb-6 md:mb-8">
        {slice.primary.job}
      </p>
      <div className="flex justify-center md:justify-start">
        <Button
          label={slice.primary.button_label}
          href={slice.primary.button_anchor}
        />
      </div>
    </div>
    <Image
      src="./img/header-icon.svg"
      height={320}
      width={334}
      alt=""
      className="w-2/3 mx-auto sm:w-1/2 md:w-auto md:mx-0"
    />
  </header>
);

export default Hero;
