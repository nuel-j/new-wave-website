import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "new-wave",
  title: "New Wave",
  projectId: "o9wcuk9w",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
