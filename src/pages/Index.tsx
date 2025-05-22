
import { Outlet } from "react-router-dom";
import BottomNavBar from "@/components/BottomNavBar";

export default function Index() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100 pb-16">
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full">
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  );
}
