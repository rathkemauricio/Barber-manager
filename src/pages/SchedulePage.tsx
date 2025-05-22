
import { useState } from "react";
import { Calendar } from "lucide-react";

const mockAppointments = [
  { id: 1, date: "2024-05-21", time: "10:00", client: "João Silva", service: "Corte", value: 30 },
  { id: 2, date: "2024-05-21", time: "11:00", client: "Carlos Mendes", service: "Barba", value: 20 },
  { id: 3, date: "2024-05-22", time: "13:00", client: "Lucas Oliveira", service: "Corte", value: 30 },
];

function getTodayISO() {
  const today = new Date();
  return today.toISOString().slice(0, 10);
}

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(getTodayISO());

  // gerar datas (simples)
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  // filtrar agendamentos do dia selecionado
  const todayAppointments = mockAppointments.filter(a => a.date === selectedDate);

  return (
    <div className="flex-1 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 flex gap-2 items-center">
        <Calendar className="w-6 h-6 text-blue-600" />
        Agendamentos
      </h2>
      {/* Barra de dias para seleção */}
      <div className="flex w-full gap-2 mb-6 overflow-x-auto">
        {days.map((day) => {
          const dateStr = day.toISOString().slice(0, 10);
          const isSel = dateStr === selectedDate;
          return (
            <button
              key={dateStr}
              className={`rounded-lg px-3 py-2 text-sm font-semibold border transition-colors ${
                isSel
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-blue-50"
              }`}
              onClick={() => setSelectedDate(dateStr)}
            >
              {day.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit" })}
            </button>
          );
        })}
      </div>
      {/* Agendamentos do dia */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Horários e agendamentos</h3>
        {todayAppointments.length === 0 ? (
          <div className="text-gray-400 py-5 text-center">Nenhum agendamento para este dia.</div>
        ) : (
          todayAppointments.map((appt) => (
            <div key={appt.id} className="mb-3 p-3 rounded-lg border border-gray-100 flex flex-col gap-1">
              <div className="flex justify-between text-base font-medium">
                <span>{appt.time}</span>
                <span>R$ {appt.value}</span>
              </div>
              <div className="text-gray-600">{appt.client}</div>
              <div className="text-xs text-gray-400">{appt.service}</div>
            </div>
          ))
        )}
        {/* Botão para novo agendamento */}
        <button className="w-full mt-6 bg-blue-200 hover:bg-blue-300 text-blue-900 font-semibold text-lg py-3 rounded-xl transition-all">
          Novo agendamento
        </button>
      </div>
    </div>
  );
}
