
import { Outlet, Link, useLocation } from "react-router-dom";
import { Building2, Gauge, HeartPulse, LogOut, ReceiptText, Settings } from "lucide-react";
import { Badge } from "./ui/badge";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import Header from "./Header";
import Footer from "./Footer";

        export default function Layout() {
  const { pathname } = useLocation();
  const isAdminPage = pathname.startsWith("/admin");
  const isAdminLogin = pathname === "/admin/login";
  const variant = pathname === "/dashboard" || pathname.startsWith("/apply/") ? "applicant" : "guest";
  const adminLinks = [{ label: "Dashboard overview", to: "/admin/dashboard", icon: Gauge }, { label: "Fee configurations", to: "/admin/fee-configurations", icon: ReceiptText }, { label: "Integration health", to: "/admin/integrations", icon: HeartPulse }, { label: "System settings", to: "/admin/settings", icon: Settings }];
        return (
            <div className="min-h-screen bg-background text-foreground"><a href="#main-content" className="sr-only z-[100] rounded bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to main content</a>{isAdminPage && !isAdminLogin ? <SidebarProvider><Sidebar collapsible="icon"><SidebarHeader><Link to="/admin/dashboard" className="flex items-center gap-2 px-2 py-3 font-bold text-sidebar-foreground"><Building2 className="size-5" /><span className="group-data-[collapsible=icon]:hidden">MuniSubmit</span></Link><Badge className="w-fit group-data-[collapsible=icon]:hidden">Production</Badge></SidebarHeader><SidebarContent><SidebarMenu>{adminLinks.map(item => <SidebarMenuItem key={item.to}><SidebarMenuButton asChild isActive={pathname === item.to} tooltip={item.label}><Link to={item.to}><item.icon /><span>{item.label}</span></Link></SidebarMenuButton></SidebarMenuItem>)}</SidebarMenu></SidebarContent><SidebarFooter><SidebarMenu><SidebarMenuItem><SidebarMenuButton><LogOut /><span>Sign out</span></SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarFooter></Sidebar><SidebarInset><header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b bg-background px-4"><SidebarTrigger /><div><p className="text-sm font-semibold">Municipal administration</p><p className="text-xs text-muted-foreground">MuniSubmit operations</p></div></header><main id="main-content" className="min-w-0 flex-1"><Outlet /></main></SidebarInset></SidebarProvider> : <div className="flex min-h-screen flex-col"><Header projectName="MuniSubmit" variant={variant} /><main id="main-content" className="min-w-0 flex-1"><Outlet /></main><Footer projectName="MuniSubmit" /></div>}</div>
        );
        }