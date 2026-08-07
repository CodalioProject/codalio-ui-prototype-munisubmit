
        import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Languages, Landmark, Menu, UserRound } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
        export default function PortalHeader({}) {
  const location = useLocation();
  const [language, setLanguage] = useState("English");
  const nav = [{ label: "Home", route: "/" }, { label: "My applications", route: "/dashboard" }, { label: "New application", route: "/apply/select-type" }, { label: "Admin", route: "/admin/dashboard" }];
        return (
            return <><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a><header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur"><div className="flex min-h-16 items-center gap-3 px-4 md:px-6"><Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu className="size-5" /></Button></SheetTrigger><SheetContent side="left" className="w-72 p-6"><nav className="mt-8 flex flex-col gap-2">{nav.map((item) => <Button key={item.route} asChild variant={location.pathname === item.route ? "secondary" : "ghost"} className="justify-start"><Link to={item.route}>{item.label}</Link></Button>)}</nav></SheetContent></Sheet><Link to="/" className="flex items-center gap-2 font-bold text-primary"><span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground"><Landmark className="size-5" /></span><span className="text-lg">MuniSubmit</span></Link><Badge variant="secondary" className="hidden sm:inline-flex">Production</Badge><div className="ml-auto flex items-center gap-1"><Button variant="ghost" size="sm" onClick={() => setLanguage(language === "English" ? "Français" : "English")}><Languages className="size-4" /> <span className="hidden sm:inline">{language}</span></Button><Button variant="ghost" size="icon" aria-label="Notifications"><Bell className="size-5" /></Button><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label="Profile menu"><Avatar className="size-8"><AvatarFallback><UserRound className="size-4" /></AvatarFallback></Avatar></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem>Account settings</DropdownMenuItem><DropdownMenuItem>Sign out</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div></div></header></>;
        );
        }
