import React from "react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import ApplicationWizardStepper from "../components/ApplicationWizardStepper";
import WizardHelpPanel from "../components/WizardHelpPanel";

import { ArrowRight, FileText, Save } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SelectApplicationType() {
    const types = ["Minor Variance", "Zoning By-law Amendment", "Site Plan Control", "Consent / Severance"];
    const [selected, setSelected] = useState("");
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const handleNext = () => { if (!selected) { setShowError(true); return; } navigate("/apply/property-details"); };
  return (
   <div className="w-full min-w-0 bg-muted/30 text-foreground overflow-x-hidden">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="pt-6"><ApplicationWizardStepper currentStep={1} /></section>
  <section className="py-8"><Card><CardHeader><CardTitle className="text-2xl">What are you applying for?</CardTitle><CardDescription>Choose the option that best matches your project. Requirements will update automatically.</CardDescription></CardHeader><CardContent><RadioGroup value={selected} onValueChange={setSelected} className="grid gap-4 md:grid-cols-2">{types.map(type => <Label key={type} htmlFor={type} className={`flex cursor-pointer gap-4 rounded-lg border p-5 transition-colors ${selected === type ? "border-primary bg-accent" : "hover:bg-muted"}`}><RadioGroupItem id={type} value={type} /><span><span className="block font-semibold">{type}</span><span className="mt-1 block text-sm font-normal text-muted-foreground">View tailored forms and required documents.</span></span></Label>)}</RadioGroup>{showError && <Alert variant="destructive" className="mt-5"><AlertDescription>Select an application type before continuing.</AlertDescription></Alert>}<div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between"><Button variant="outline"><Save className="mr-2 size-4" />Save draft</Button><Button onClick={handleNext}>Next: Property <ArrowRight className="ml-2 size-4" /></Button></div></CardContent></Card><WizardHelpPanel resources={["Choosing an application type","Ontario Planning Act guidance","Contact the planning department"]} /></section>
      </div>
    </div>
  );
}