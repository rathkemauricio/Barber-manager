
import { useState } from "react";
import ScheduleCard from "./ScheduleCard";
import ClientList from "./ClientList";
import AddAppointmentModal from "./AddAppointmentModal";
import FinanceCard from "./FinanceCard";
import { Switch } from "@/components/ui/switch";
import { DollarSign, Plus } from "lucide-react";

export default function BarberHome() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [financial, setFinancial] = useState(false);

  // Exemplo de dados mockados
  const [appointments, setAppointments] = useState([
    { id: 1, time: "10:00", client: "João Silva", service: "Corte", value: 30 },
    { id: 2, time: "11:00", client: "Carlos Mendes", service: "Barba", value: 20 },
  ]);
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Pedro Almeida",
      phone: "+55 99999-1234",
      cutsMonth: 3,
      loyalty: "",
    },
    {
      id: 2,
      name: "Marco Santos",
      phone: "+55 99999-9876",
      cutsMonth: 9,
      loyalty: "1 corte grátis após 10",
    },
    {
      id: 3,
      name: "Lucas Oliveira",
      phone: "+55 99999-0000",
      cutsMonth: 2,
      loyalty: "",
    },
  ]);

  // Resumo financeiro (mock)
  const dayRevenue = appointments.reduce((acc, a) => acc + a.value, 0);
  const monthRevenue = 1240; // Exemplo mock

  // Handler para adicionar novo agendamento
  const handleAddAppointment = (appointment: any) => {
    setAppointments((prev) => [...prev, { id: Date.now(), ...appointment }]);
    setShowAddModal(false);
  };

  return (
    <div className="w-full flex flex-col items-center p-4 pt-8 pb-4 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-5 tracking-tight">Barbearia</h1>
      <button
        onClick={() => setShowAddModal(true)}
        className="w-full rounded-xl bg-blue-200 hover:bg-blue-300 text-blue-900 font-semibold text-lg py-3 mb-6 transition-all"
      >
        <span className="flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" /> Novo agendamento
        </span>
      </button>
      <ScheduleCard appointments={appointments} />
      <div className="w-full mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-gray-700">Clientes</span>
          <span className="flex gap-2 items-center">
            <DollarSign className="w-4 h-4 text-green-600" />
            <Switch
              checked={financial}
              onCheckedChange={setFinancial}
              id="finance-toggle"
            />
            <span className="text-sm text-gray-500">Gestão financeira</span>
          </span>
        </div>
        <ClientList clients={clients} />
        {financial && (
          <div className="mt-5 animate-fade-in">
            <FinanceCard day={dayRevenue} month={monthRevenue} />
          </div>
        )}
      </div>
      {showAddModal && (
        <AddAppointmentModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddAppointment}
        />
      )}
    </div>
  );
}
