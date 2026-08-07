import { Button } from "./ui/button";


import { Check, Cloud, RotateCw } from "lucide-react";

        export default function AutoSaveIndicator({ status = "Saved", onRetry }: { status?: "Saving" | "Saved" | "Save failed"; onRetry?: () => void }) {
        return (
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground" aria-live="polite">{status === "Saved" ? <Check className="size-4 text-emerald-600" /> : <Cloud className="size-4" />}<span>{status}</span>{status === "Save failed" && <Button variant="ghost" size="sm" onClick={onRetry}><RotateCw className="mr-1 size-3" />Retry</Button>}</div>
        );
        }