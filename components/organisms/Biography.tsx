import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import LayoutSection from "../layouts/LayoutSection";

export default function Biography() {
  return (
    <LayoutSection>
      <Heading title="Biography" level="h2" haveIcon={true} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus nunc,
        cursus in tellus id, sodales feugiat purus. Maecenas sem velit, tempor
        in ex in, rutrum efficitur lectus. Nam sodales libero ac mi dapibus
        scelerisque. Etiam quis neque porta, scelerisque risus ac, pulvinar
        purus. Vivamus dapibus non leo vel porta. Etiam sollicitudin, lectus at
        finibus euismod, ipsum purus malesuada diam, in congue magna lectus
        rhoncus nibh. Morbi nec dui laoreet, eleifend nisl at, bibendum nisi.
      </p>
      <Button label="Download my resume" href="#" />
    </LayoutSection>
  );
}
