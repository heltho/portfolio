import React from "react";
import { PrismicRichText } from "@prismicio/react";
import LayoutSection from "@/components/layouts/LayoutSection";
import Heading from "@/components/atoms/Heading";

/**
 * @typedef {import("@prismicio/client").Content.SkillsSlice} SkillsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SkillsSlice>} SkillsProps
 * @param { SkillsProps }
 */
const Skills = ({ slice }) => {
  console.log(slice.items[1]);
  return (
    <LayoutSection>
      <Heading title="Skills" level="h2" haveIcon={true} />
    </LayoutSection>
  );
};

export default Skills;
