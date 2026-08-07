
        

import { Bell, Landmark, Languages, Menu } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useLocation } from "react-router-dom";
        export default function GlobalHeader() {
  const location = useLocation();
        return (
            <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur"><a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-3">Skip to content</a><div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"><Link to="/" className="flex items-center gap-2 font-bold text-primary"><span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground"><Landmark className="size-5" /></span><span>MuniSubmit</span></Link><nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation"><Button variant="ghost" asChild><Link to="/" aria-current={location.pathname === "/" ? "page" : undefined}>Home</Link></Button><Button variant="ghost" size="sm"><Languages className="size-4" />English / Français</Button><Button asChild><Link to="/login">Sign in</Link></Button>{location.pathname.startsWith("/admin") && <Badge>Production</Badge>}</nav><Sheet><SheetTrigger asChild><Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu"><Menu className="size-5" /></Button></SheetTrigger><SheetContent><div className="mt-8 grid gap-3"><Button variant="ghost" asChild><Link to="/">Public home</Link></Button><Button variant="ghost"><Languages className="size-4" />English / Français</Button><Button asChild><Link to="/login">Sign in</Link></Button><Button variant="outline"><Bell className="size-4" />Notifications</Button></div></SheetContent></Sheet></div></header>
        );
        }