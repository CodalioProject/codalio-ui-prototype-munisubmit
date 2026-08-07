
import { Link } from "react-router-dom";
import { Languages } from "lucide-react";
import { Button } from "./ui/button";

        export default function Footer({ projectName = "MuniSubmit" }: { projectName?: string }) {
        return (
            <footer className="mt-auto border-t bg-card"><div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8"><div><p className="font-semibold text-foreground">{projectName}</p><p className="mt-2 text-sm text-muted-foreground">A clear, secure path to municipal planning services.</p></div><div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"><Link to="/contact" className="text-muted-foreground hover:text-foreground">Municipal contact</Link><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link><Link to="/accessibility" className="text-muted-foreground hover:text-foreground">Accessibility</Link><Button variant="ghost" size="sm"><Languages className="mr-2 size-4" /> Français</Button></div></div></footer>
        );
        }