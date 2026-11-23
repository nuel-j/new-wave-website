import { NewWaveMultiPagePrototype } from "../prototype/components/generated/NewWaveMultiPagePrototype";
import AdminPanel from "./AdminPanel";

export default function App() {
  const isAdmin = window.location.pathname.replace(/\/$/, "") === "/admin";
  return isAdmin ? <AdminPanel /> : <NewWaveMultiPagePrototype />;
}
