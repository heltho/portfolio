// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = HeroSlice | BiographySlice | SkillsSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
export type AllDocumentTypes = HomepageDocument;
/**
 * Primary content in Biography → Primary
 *
 */
interface BiographySliceDefaultPrimary {
    /**
     * Title field in *Biography → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: biography.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Biography → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: biography.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Button label field in *Biography → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: biography.primary.button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
    /**
     * Resume field in *Biography → Primary*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: biography.primary.resume
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    resume: prismicT.LinkToMediaField;
}
/**
 * Default variation for Biography Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Biography`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BiographySliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BiographySliceDefaultPrimary>, never>;
/**
 * Slice variation for *Biography*
 *
 */
type BiographySliceVariation = BiographySliceDefault;
/**
 * Biography Shared Slice
 *
 * - **API ID**: `biography`
 * - **Description**: `Biography`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BiographySlice = prismicT.SharedSlice<"biography", BiographySliceVariation>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
    /**
     * Title field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Job field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.job
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    job: prismicT.KeyTextField;
    /**
     * Button label field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
    /**
     * Button anchor field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.button_anchor
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_anchor: prismicT.KeyTextField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Skills → Primary
 *
 */
interface SkillsSliceDefaultPrimary {
    /**
     * Title field in *Skills → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Item in Skills → Items
 *
 */
export interface SkillsSliceDefaultItem {
    /**
     * Logo field in *Skills → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.items[].logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Label field in *Skills → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * test field in *Skills → Items*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.items[].test
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    test: prismicT.RelationField;
}
/**
 * Default variation for Skills Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Skills`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SkillsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SkillsSliceDefaultPrimary>, Simplify<SkillsSliceDefaultItem>>;
/**
 * Slice variation for *Skills*
 *
 */
type SkillsSliceVariation = SkillsSliceDefault;
/**
 * Skills Shared Slice
 *
 * - **API ID**: `skills`
 * - **Description**: `Skills`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SkillsSlice = prismicT.SharedSlice<"skills", SkillsSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, AllDocumentTypes, BiographySliceDefaultPrimary, BiographySliceDefault, BiographySliceVariation, BiographySlice, HeroSliceDefaultPrimary, HeroSliceDefault, HeroSliceVariation, HeroSlice, SkillsSliceDefaultPrimary, SkillsSliceDefaultItem, SkillsSliceDefault, SkillsSliceVariation, SkillsSlice };
    }
}