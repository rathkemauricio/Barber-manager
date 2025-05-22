
import { DollarSign, Calendar, Clock, Users } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Financeiro", icon: DollarSign, path: "/financeiro" },
  { label: "Agendamentos", icon: Calendar, path: "/agendamentos" },
  { label: "Histórico", icon: Clock, path: "/historico" },
  { label: "Clientes", icon: Users, path: "/clientes" },
];

export default function BottomNavBar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 shadow-sm">
      <ul className="flex justify-between items-center max-w-md mx-auto px-1 py-0.5">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <li key={item.path} className="flex-1">
              <NavLink
                to={item.path}
                className={`flex flex-col items-center py-2 rounded transition-colors ${
                  active ? "bg-gray-100 text-primary font-semibold" : "text-gray-500"
                }`}
                style={{ fontSize: 12 }}
              >
                <item.icon className={`w-6 h-6 mb-0.5 ${active ? "text-primary" : "text-gray-400"}`} />
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
