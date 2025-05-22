
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function AddAppointmentModal({ onClose, onSave }: { onClose: () => void; onSave: (appointment: any) => void }) {
  const [client, setClient] = useState("");
  const [service, setService] = useState("");
  const [value, setValue] = useState("");
  const [time, setTime] = useState("");
  
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-xs mx-auto">
        <form
          className="flex flex-col gap-3"
          onSubmit={e => {
            e.preventDefault();
            if (!client || !service || !value || !time) return;
            onSave({ client, service, value: Number(value), time });
          }}
        >
          <h2 className="text-lg font-bold text-gray-800 mb-2">Novo agendamento</h2>
          <input
            className="rounded-lg border px-3 py-2 focus:outline-blue-300"
            placeholder="Nome do cliente"
            value={client}
            onChange={e => setClient(e.target.value)}
            required
          />
          <input
            className="rounded-lg border px-3 py-2 focus:outline-blue-300"
            placeholder="Serviço (ex: Corte)"
            value={service}
            onChange={e => setService(e.target.value)}
            required
          />
          <input
            className="rounded-lg border px-3 py-2 focus:outline-blue-300"
            placeholder="Valor (R$)"
            type="number"
            min={0}
            value={value}
            onChange={e => setValue(e.target.value)}
            required
          />
          <input
            className="rounded-lg border px-3 py-2 focus:outline-blue-300"
            placeholder="Horário (ex: 15:00)"
            value={time}
            onChange={e => setTime(e.target.value)}
            required
          />
          <div className="flex gap-2 mt-3">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold py-2"
            >
              Salvar
            </button>
            <button
              type="button"
              className="flex-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
