import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Table, TableBody, TableCell, TableRow } from "../components/ui/table";
import ApplicationWizardStepper from "../components/ApplicationWizardStepper";
import WizardHelpPanel from "../components/WizardHelpPanel";

import { ArrowLeft, CheckCircle2, Pencil } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ApplicationReview() {
    const [accurate, setAccurate] = useState(false);
    const [consent, setConsent] = useState(false);
    const navigate = useNavigate();
  return (
   <div className="w-full min-w-0 bg-muted/30 text-foreground overflow-x-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="pt-6"><ApplicationWizardStepper currentStep={4} /></section>
  <section className="py-8"><div className="grid gap-6 lg:grid-cols-[minmax(0,_2fr)_minmax(20rem,_1fr)]"><div className="space-y-4">{[{t:"Application type",v:"Minor Variance",to:"/apply/select-type"},{t:"Property details",v:"123 Main Street · R2 Residential",to:"/apply/property-details"},{t:"Project details",v:"Residential addition and setback variance",to:"/apply/form-details"},{t:"Documents",v:"3 required · 3 uploaded",to:"/apply/form-details"}].map(item => <Card key={item.t}><CardContent className="flex items-center justify-between gap-4 p-5"><div><p className="font-semibold">{item.t}</p><p className="mt-1 text-sm text-muted-foreground">{item.v}</p></div><Button variant="outline" size="sm" asChild><Link to={item.to}><Pencil className="mr-2 size-3" />Edit</Link></Button></CardContent></Card>)}</div><Card><CardHeader><CardTitle>Estimated fees</CardTitle><CardDescription>CAD · verified after submission</CardDescription></CardHeader><CardContent><Table><TableBody>{[["Base application fee","$1,250.00"],["Land size surcharge","$148.40"],["GIS processing fee","$75.00"]].map(row => <TableRow key={row[0]}><TableCell>{row[0]}</TableCell><TableCell className="text-right">{row[1]}</TableCell></TableRow>)}<TableRow className="font-bold"><TableCell>Estimated total</TableCell><TableCell className="text-right">$1,473.40</TableCell></TableRow></TableBody></Table><Alert className="mt-5"><AlertDescription>Municipal staff verify the final fee before sending a payment request.</AlertDescription></Alert></CardContent></Card></div><Card className="mt-6"><CardContent className="space-y-4 p-6"><div className="flex items-start gap-3"><Checkbox id="accurate" checked={accurate} onCheckedChange={v => setAccurate(v === true)} /><Label htmlFor="accurate" className="leading-6">I confirm the information is complete and accurate.</Label></div><div className="flex items-start gap-3"><Checkbox id="consent" checked={consent} onCheckedChange={v => setConsent(v === true)} /><Label htmlFor="consent" className="leading-6">I consent to electronic communication about this application.</Label></div><Alert><CheckCircle2 className="size-4" /><AlertTitle>Ready for secure submission</AlertTitle><AlertDescription>Application data and documents are sent to Munirom AppTrack before payment.</AlertDescription></Alert><div className="flex justify-between"><Button variant="outline" onClick={() => navigate("/apply/form-details")}><ArrowLeft className="mr-2 size-4" />Back</Button><Button disabled={!accurate || !consent} onClick={() => navigate("/apply/confirmation")}>Submit application</Button></div></CardContent></Card><WizardHelpPanel resources={["How estimated fees work","What happens after submission","Privacy and consent"]} /></section>
      </div>
    </div>
  );
}