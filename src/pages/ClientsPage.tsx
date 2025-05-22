
import ClientList from "@/components/ClientList";

const mockClients = [
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
];

export default function ClientsPage() {
  return (
    <div className="flex-1 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">Clientes</h2>
      <ClientList clients={mockClients} />
    </div>
  );
}
