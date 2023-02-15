import Image from "next/image";
import Button from "../atoms/Button";

export default function Hero() {
  return (
    <header className="flex flex-col-reverse gap-8 py-16 md:flex-row md:justify-between md:items-center">
      <div className="text-center md:text-left">
        <h1 className="text-white text-4xl md:text-[3.375rem] font-semibold leading-tight mb-4 md:mb-6">
          Hi there ! <br /> I am{" "}
          <span className="text-scooter">Thomas Hellin</span>
        </h1>
        <p className="text-white-alt font-medium text-xl md:text-[1.75rem] mb-6 md:mb-8">
          Full-stack Developer
        </p>
        <div className="flex justify-center md:justify-start">
          <Button label="Get in touch" href="#contact" />
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
}
