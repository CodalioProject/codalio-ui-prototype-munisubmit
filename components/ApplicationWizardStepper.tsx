
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Progress } from "./ui/progress";

const defaultSteps = ["Type", "Property", "Details", "Review", "Submit"];
const routes = ["/apply/select-type", "/apply/property-details", "/apply/form-details", "/apply/review", "/apply/confirmation"];
        export default function ApplicationWizardStepper({ currentStep, steps = defaultSteps }: { currentStep: number; steps?: string[] }) {
        return (
            <div className="overflow-x-auto rounded-lg border bg-card p-4" aria-label={`Step ${currentStep} of ${steps.length}`}><div className="mb-4 flex min-w-max items-center justify-between gap-5">{steps.map((step, index) => { const number = index + 1; const completed = number < currentStep; const active = number === currentStep; return <div key={step} className="flex items-center gap-2"><span className={`grid size-8 place-items-center rounded-full border text-sm font-semibold ${active ? "border-primary bg-primary text-primary-foreground" : completed ? "border-emerald-600 bg-emerald-50 text-emerald-700" : "bg-muted text-muted-foreground"}`}>{completed ? <Check className="size-4" /> : number}</span>{completed ? <Link className="font-medium text-foreground hover:underline" to={routes[index]}>{step}</Link> : <span className={active ? "font-semibold text-foreground" : "text-muted-foreground"} aria-current={active ? "step" : undefined}>{step}</span>}</div>; })}</div><Progress value={(currentStep / steps.length) * 100} /></div>
        );
        }