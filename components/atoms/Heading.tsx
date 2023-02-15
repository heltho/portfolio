interface HeadingProps {
  title: string;
  level: string;
  haveIcon?: boolean;
}

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Heading({ title, level, haveIcon }: HeadingProps) {
  let HeadingLevel = level as HeadingLevel;
  return (
    <HeadingLevel className="flex items-center gap-4 mb-6">
      {haveIcon && <span className="font-medium text-scooter">{">"}</span>}
      {title}
    </HeadingLevel>
  );
}
