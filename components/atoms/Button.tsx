interface ButtonProps {
  label: string;
  link?: boolean;
  href?: string;
}

type ButtonTag = "a" | "button";

export default function Button({ label, link = true, href }: ButtonProps) {
  let BtnType = link ? "a" : ("button" as ButtonTag);
  return (
    <BtnType
      href={href}
      className="flex px-4 py-2 text-lg transition md:text-xl bg-scooter text-dark w-max hover:bg-scooter-400"
    >
      {label}
    </BtnType>
  );
}
