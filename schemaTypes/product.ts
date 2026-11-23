import { defineType, defineField } from "sanity";
import { publishStateField, seoFields, slugField } from "./shared";

export const product = defineType({
  name: "product",
  title: "Shop products",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Product name", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "mainImage", title: "Main product image", type: "image", options: { hotspot: true } }),
    defineField({ name: "gallery", title: "Additional images", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "description", title: "Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "price", title: "Price", type: "number", validation: (Rule) => Rule.min(0) }),
    defineField({ name: "currency", title: "Currency", type: "string", initialValue: "NGN", options: { list: ["NGN", "USD", "GBP", "EUR"] } }),
    defineField({ name: "variants", title: "Variants (size, colour, etc.)", type: "array", of: [{ type: "object", fields: [defineField({ name: "name", title: "Variant name", type: "string" }), defineField({ name: "sku", title: "SKU", type: "string" }), defineField({ name: "stockNote", title: "Stock note", type: "string" })] }] }),
    defineField({ name: "category", title: "Category", type: "string" }),
    publishStateField,
    ...seoFields,
  ],
  preview: { select: { title: "title", subtitle: "price", media: "mainImage" } },
});
