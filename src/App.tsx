import { NewWaveMultiPagePrototype } from "../prototype/components/generated/NewWaveMultiPagePrototype";
import AdminPanel from "./AdminPanel";
import StudioPage from "./StudioPage";

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/studio") return <StudioPage />;
  if (path === "/admin") return <AdminPanel />;
  return <NewWaveMultiPagePrototype />;
}
