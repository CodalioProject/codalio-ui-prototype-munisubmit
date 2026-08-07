
        

import { Check } from "lucide-react";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
        export default function ApplicationWizardProgress({ currentStep = 1, steps = ["Type", "Property", "Details", "Review", "Submit"] }: { currentStep?: number; steps?: string[] }) {
        return (
            <section aria-label="Application progress" className="rounded-lg border bg-card p-4 shadow-sm"><div className="mb-3 flex items-center justify-between md:hidden"><span className="font-medium">Step {currentStep} of {steps.length}: {steps[currentStep - 1]}</span><Badge variant="outline">{Math.round((currentStep / steps.length) * 100)}%</Badge></div><Progress value={(currentStep / steps.length) * 100} className="md:hidden" /><ol className="hidden grid-cols-5 gap-2 md:grid">{steps.map((step, index) => { const number = index + 1; const done = number < currentStep; const active = number === currentStep; return <li key={step} aria-current={active ? "step" : undefined} className="flex flex-col items-center gap-2 text-center"><span className={`grid size-9 place-items-center rounded-full border text-sm font-semibold ${active ? "border-primary bg-primary text-primary-foreground" : done ? "border-primary bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{done ? <Check className="size-4" /> : number}</span><span className={active ? "font-semibold text-foreground" : "text-sm text-muted-foreground"}>{step}</span></li>})}</ol></section>
        );
        }