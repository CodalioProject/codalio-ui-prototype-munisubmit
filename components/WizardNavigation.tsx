
        
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
        export default function WizardNavigation({ backLabel = "Back", backRoute, nextLabel = "Continue", nextRoute, autosaveMessage = "Draft saved", nextDisabled = false }: { backLabel?: string; backRoute: string; nextLabel?: string; nextRoute: string; autosaveMessage?: string; nextDisabled?: boolean }) {
  const navigate = useNavigate();
        return (
            <div className="sticky bottom-0 z-30 border-t bg-background/95 py-4 backdrop-blur"><div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between"><Button variant="outline" onClick={() => navigate(backRoute)}><ArrowLeft className="size-4" />{backLabel}</Button><div className="flex items-center gap-2 text-sm text-muted-foreground" aria-live="polite"><CheckCircle2 className="size-4 text-emerald-600" />{autosaveMessage}</div><Button disabled={nextDisabled} onClick={() => navigate(nextRoute)}>{nextLabel}<ArrowRight className="size-4" /></Button></div></div>
        );
        }