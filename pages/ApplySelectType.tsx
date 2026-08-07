import React from "react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import ApplicationWizardProgress from "../components/ApplicationWizardProgress";
import ContextHelpDrawer from "../components/ContextHelpDrawer";
import WizardNavigation from "../components/WizardNavigation";

import { Building2, Info, MapPinned, Ruler } from "lucide-react";
import { useState } from "react";

export default function ApplySelectType() {
    const [selected, setSelected] = useState("");
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 min-w-0">
          <><ApplicationWizardProgress currentStep={1} /><div><Badge variant="outline">New application</Badge><h1 className="mt-3 text-3xl font-bold">What are you applying for?</h1><p className="mt-2 text-muted-foreground">Choose the planning application that best matches your project.</p></div><RadioGroup value={selected} onValueChange={setSelected} className="grid gap-4 lg:grid-cols-3">{[["minor-variance",Ruler,"Minor Variance","Request relief from a zoning by-law requirement."],["zoning-amendment",MapPinned,"Zoning By-law Amendment","Request a change to permitted land use or zoning provisions."],["site-plan",Building2,"Site Plan Control","Submit plans for detailed site design review."]].map(([value,Icon,title,description]) => <Label key={value as string} htmlFor={value as string} className={`cursor-pointer rounded-xl border p-5 shadow-sm transition-colors ${selected === value ? "border-primary bg-accent" : "bg-card hover:border-primary/50"}`}><RadioGroupItem id={value as string} value={value as string} className="sr-only" /><Icon className="size-7 text-primary" /><CardTitle className="mt-4">{title as string}</CardTitle><CardDescription className="mt-2">{description as string}</CardDescription></Label>)}</RadioGroup>{selected && <Alert><Info className="size-4" /><AlertDescription>Your document checklist will update for this application type.</AlertDescription></Alert>}<WizardNavigation backLabel="Cancel" backRoute="/dashboard" nextLabel="Continue to property" nextRoute="/apply/property-details" nextDisabled={!selected} /><ContextHelpDrawer /></>
      </div>
    </div>
  );
}