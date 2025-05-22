
export default function HistoryPage() {
  // Exemplo estático - substitua pela lógica de histórico real no futuro
  const mockHistory = [
    { id: 1, client: "Marco Santos", date: "2024-05-20", service: "Corte", time: "10:00" },
    { id: 2, client: "Pedro Almeida", date: "2024-05-19", service: "Barba", time: "17:00" },
  ];
  return (
    <div className="flex-1 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">Histórico de Agendamentos</h2>
      <div className="bg-white rounded-xl shadow p-5 divide-y divide-gray-100">
        {mockHistory.map((item) => (
          <div key={item.id} className="py-3 flex justify-between">
            <div>
              <div className="font-medium">{item.client}</div>
              <div className="text-xs text-gray-500">{item.service} em {item.date} às {item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
