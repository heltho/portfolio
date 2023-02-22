import React from "react";
import { PrismicRichText } from "@prismicio/react";
import LayoutSection from "@/components/layouts/LayoutSection";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";

/**
 * @typedef {import("@prismicio/client").Content.BiographySlice} BiographySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BiographySlice>} BiographyProps
 * @param { BiographyProps }
 */
const Biography = ({ slice }) => (
  <LayoutSection>
    <Heading title={slice.primary.title} level="h2" haveIcon={true} />
    <PrismicRichText field={slice.primary.description} />
    <Button
      label={slice.primary.button_label}
      href={slice.primary.resume.url}
    />
  </LayoutSection>
);

export default Biography;
