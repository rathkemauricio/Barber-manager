
import { Calendar } from "lucide-react";

interface Appointment {
  id: number;
  time: string;
  client: string;
  service: string;
  value: number;
}

export default function ScheduleCard({ appointments }: { appointments: Appointment[] }) {
  // TODO: trocar data dinâmica depois
  const today = new Date();
  const weekday = today.toLocaleDateString("pt-BR", { weekday: "long" });
  const date = today.toLocaleDateString("pt-BR", { day: "numeric", month: "long" });

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-5 mb-4 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-base font-semibold text-gray-700 capitalize">{weekday}</span>
          <div className="text-gray-400 text-sm leading-tight">{date}</div>
        </div>
        <span>
          <Calendar className="text-blue-300 w-5 h-5" />
        </span>
      </div>
      {appointments.length === 0 ? (
        <div className="text-center text-sm text-gray-400 py-6">Nenhum agendamento hoje</div>
      ) : (
        <div className="divide-y">
          {appointments.map((a) => (
            <div key={a.id} className="flex justify-between items-center py-2">
              <div>
                <div className="text-base text-gray-700 font-medium">{a.time} <span className="ml-2">{a.client}</span></div>
                <div className="text-xs text-gray-500">{a.service}</div>
              </div>
              <div className="text-sm font-bold text-green-700">
                R$ {a.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
