import { defineType, defineField } from "sanity";
import { seoFields } from "./shared";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Internal title", type: "string", initialValue: "New Wave homepage", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero headline", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroText", title: "Hero supporting text", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroVideoUrl", title: "Hero video URL", type: "url" }),
    defineField({ name: "primaryCtaLabel", title: "Primary button label", type: "string" }),
    defineField({ name: "primaryCtaUrl", title: "Primary button URL", type: "string" }),
    defineField({ name: "featuredArtists", title: "Featured artists", type: "array", of: [{ type: "reference", to: [{ type: "artist" }] }] }),
    defineField({ name: "featuredReleases", title: "Featured releases", type: "array", of: [{ type: "reference", to: [{ type: "musicRelease" }] }] }),
    defineField({ name: "featuredEvents", title: "Featured events", type: "array", of: [{ type: "reference", to: [{ type: "event" }] }] }),
    ...seoFields,
  ],
  preview: { select: { title: "title", subtitle: "heroTitle", media: "heroImage" } },
});
