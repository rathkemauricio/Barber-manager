
import { DollarSign } from "lucide-react";

export default function FinanceCard({ day, month }: { day: number; month: number }) {
  return (
    <div className="w-full bg-green-50 border border-green-300 rounded-xl p-4 flex flex-col items-center shadow-sm animate-fade-in">
      <div className="flex gap-2 items-center mb-1">
        <DollarSign className="w-5 h-5 text-green-600" />
        <span className="text-lg font-semibold text-green-800">Gestão Financeira</span>
      </div>
      <div className="flex justify-around w-full mt-2">
        <div className="flex flex-col items-center w-1/2">
          <span className="text-xs text-gray-400">Receita Dia</span>
          <span className="text-lg font-bold text-green-700">R$ {day}</span>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <span className="text-xs text-gray-400">Receita Mês</span>
          <span className="text-lg font-bold text-green-700">R$ {month}</span>
        </div>
      </div>
    </div>
  );
}
