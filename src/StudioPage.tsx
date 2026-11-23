import { Studio } from "sanity";
import config from "../sanity.config";

export default function StudioPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Studio config={config} />
    </div>
  );
}
