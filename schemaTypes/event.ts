import { defineType, defineField } from "sanity";
import { publishStateField, seoFields, slugField } from "./shared";

export const event = defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Event name", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "poster", title: "Event image / poster", type: "image", options: { hotspot: true } }),
    defineField({ name: "description", title: "Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "venue", title: "Venue", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "startsAt", title: "Start date and time", type: "datetime" }),
    defineField({ name: "endsAt", title: "End date and time", type: "datetime" }),
    defineField({ name: "ticketUrl", title: "External ticket URL", type: "url" }),
    publishStateField,
    ...seoFields,
  ],
  preview: { select: { title: "title", subtitle: "startsAt", media: "poster" } },
});
