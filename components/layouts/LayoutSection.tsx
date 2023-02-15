type LayoutSectionProps = {
  children: React.ReactNode;
};

export default function LayoutSection({ children }: LayoutSectionProps) {
  return <section className="py-16">{children}</section>;
}
