
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { DollarSign, Calendar, Clock, Users } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  { label: "Financeiro", icon: DollarSign, path: "/financeiro" },
  { label: "Agendamentos", icon: Calendar, path: "/agendamentos" },
  { label: "Histórico", icon: Clock, path: "/historico" },
  { label: "Clientes", icon: Users, path: "/clientes" },
];

export default function BarberSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.path}>
                    <Link to={item.path}>
                      <item.icon className="w-5 h-5" />
                      <span className="ml-2">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
