import { defineType, defineField } from "sanity";
import { publishStateField, seoFields, slugField } from "./shared";

export const editorial = defineType({
  name: "editorial",
  title: "Editorial",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "format", title: "Format", type: "string", options: { list: ["Article", "Interview", "Photography", "Culture"] } }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Content", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "publishedAt", title: "Publish date", type: "datetime" }),
    publishStateField,
    ...seoFields,
  ],
  preview: { select: { title: "title", subtitle: "format", media: "coverImage" } },
});
