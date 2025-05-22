
// Nova Home: Sidebar à esquerda, conteúdo à direita via Outlet
import { Outlet } from "react-router-dom";
import BarberSidebar from "@/components/sidebar/BarberSidebar";

export default function Index() {
  return (
    <div className="min-h-screen w-full flex bg-gray-100">
      <BarberSidebar />
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <Outlet />
      </main>
    </div>
  );
}
