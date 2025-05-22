
import BarberHome from "../components/BarberHome";

export default function Index() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col w-full max-w-md min-h-screen bg-gray-100">
        <BarberHome />
      </div>
    </div>
  );
}
