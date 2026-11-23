import { defineType, defineField } from "sanity";
import { seoFields } from "./shared";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page title", type: "string", initialValue: "About New Wave", validation: (Rule) => Rule.required() }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 4 }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "story", title: "The story", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({ name: "values", title: "Values / principles", type: "array", of: [{ type: "object", fields: [defineField({ name: "title", title: "Title", type: "string" }), defineField({ name: "description", title: "Description", type: "text" })] }] }),
    ...seoFields,
  ],
});
