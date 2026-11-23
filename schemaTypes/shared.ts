import { defineField } from "sanity";

export const slugField = defineField({
  name: "slug",
  title: "URL slug",
  type: "slug",
  options: { source: "title", maxLength: 96 },
  validation: (Rule) => Rule.required(),
});

export const publishStateField = defineField({
  name: "visibility",
  title: "Visibility",
  type: "string",
  initialValue: "draft",
  options: {
    list: [
      { title: "Draft", value: "draft" },
      { title: "Published", value: "published" },
    ],
    layout: "radio",
  },
});

export const seoFields = [
  defineField({ name: "seoTitle", title: "SEO title", type: "string" }),
  defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 3 }),
];
