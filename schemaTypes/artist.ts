import { defineType, defineField } from "sanity";
import { publishStateField, seoFields, slugField } from "./shared";

export const artist = defineType({
  name: "artist",
  title: "Artists",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Artist name", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "portrait", title: "Portrait", type: "image", options: { hotspot: true } }),
    defineField({ name: "coverArtwork", title: "Featured artwork", type: "image", options: { hotspot: true } }),
    defineField({ name: "shortBio", title: "Short bio", type: "text", rows: 3 }),
    defineField({ name: "biography", title: "Full biography", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "genres", title: "Genres", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
    defineField({ name: "spotify", title: "Spotify URL", type: "url" }),
    defineField({ name: "appleMusic", title: "Apple Music URL", type: "url" }),
    publishStateField,
    ...seoFields,
  ],
  preview: { select: { title: "name", media: "portrait", subtitle: "shortBio" } },
});
