import { Home, BookOpen, FileText, Users, Target, Brain, HelpCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    icon: Home,
    url: "/dashboard",
  },
  {
    title: "Courses",
    icon: BookOpen,
    url: "/courses",
  },
  {
    title: "Exam Prep",
    icon: FileText,
    url: "/exam-prep",
  },
  {
    title: "Community",
    icon: Users,
    url: "/community",
  },
  {
    title: "Goals",
    icon: Target,
    url: "/goals",
  },
  {
    title: "Interactive Tutoring",
    icon: Brain,
    url: "/tutoring",
  },
  {
    title: "Help",
    icon: HelpCircle,
    url: "/help",
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    tooltip={item.title}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}