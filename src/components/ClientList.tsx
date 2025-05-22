
import { Phone } from "lucide-react";

interface Client {
  id: number;
  name: string;
  phone: string;
  cutsMonth: number;
  loyalty?: string;
}

export default function ClientList({ clients }: { clients: Client[] }) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-4">
      {clients.map((client) => (
        <div key={client.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
          <div>
            <div className="text-base font-medium text-gray-700">{client.name}</div>
            <div className="text-xs text-gray-500">{client.phone}</div>
            <div className="text-xs text-blue-700 mt-1">
              {client.loyalty
                ? client.loyalty
                : `${client.cutsMonth} ${client.cutsMonth === 1 ? "corte" : "cortes"} neste mês`}
            </div>
          </div>
          <a
            href={`tel:${client.phone.replace(/ /g, "")}`}
            className="rounded-full bg-blue-200 hover:bg-blue-300 transition-colors p-2"
            aria-label={`Ligar para ${client.name}`}
          >
            <Phone className="w-5 h-5 text-blue-600" />
          </a>
        </div>
      ))}
    </div>
  );
}
