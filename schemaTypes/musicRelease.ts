import { defineType, defineField } from "sanity";
import { publishStateField, seoFields, slugField } from "./shared";

export const musicRelease = defineType({
  name: "musicRelease",
  title: "Sound & music",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Release title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "artist", title: "Artist", type: "reference", to: [{ type: "artist" }] }),
    defineField({ name: "releaseType", title: "Release type", type: "string", options: { list: ["Single", "EP", "Album", "Mixtape"] } }),
    defineField({ name: "coverArt", title: "Cover artwork", type: "image", options: { hotspot: true } }),
    defineField({ name: "releaseDate", title: "Release date", type: "date" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "tracks", title: "Track list", type: "array", of: [{ type: "object", fields: [defineField({ name: "title", title: "Track title", type: "string" }), defineField({ name: "duration", title: "Duration", type: "string" }), defineField({ name: "audioUrl", title: "Audio preview URL", type: "url" })] }] }),
    defineField({ name: "spotifyUrl", title: "Spotify URL", type: "url" }),
    defineField({ name: "appleMusicUrl", title: "Apple Music URL", type: "url" }),
    defineField({ name: "youtubeUrl", title: "YouTube URL", type: "url" }),
    publishStateField,
    ...seoFields,
  ],
  preview: { select: { title: "title", subtitle: "releaseType", media: "coverArt" } },
});
