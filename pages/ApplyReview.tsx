import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import ApplicationWizardProgress from "../components/ApplicationWizardProgress";
import ContextHelpDrawer from "../components/ContextHelpDrawer";
import WizardNavigation from "../components/WizardNavigation";

import { Info, Pencil, Send } from "lucide-react";
import { useState } from "react";

export default function ApplyReview() {
    const [accurate, setAccurate] = useState(false);
    const [fees, setFees] = useState(false);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 min-w-0">
          <><ApplicationWizardProgress currentStep={4} /><div><h1 className="text-3xl font-bold">Review application and estimated fees</h1><p className="mt-2 text-muted-foreground">Confirm your details before securely submitting to municipal staff.</p></div><div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]"><Card><CardHeader><CardTitle>Application summary</CardTitle></CardHeader><CardContent className="space-y-5">{[["Application type","Minor Variance"],["Property","18 Maple Avenue · Parcel 042-018-00910"],["Project","Two-storey rear addition"],["Documents","3 required files attached"]].map(([label,value]) => <div key={label} className="flex items-start justify-between gap-4 border-b pb-4"><div><p className="text-sm text-muted-foreground">{label}</p><p className="font-medium">{value}</p></div><Button size="sm" variant="ghost"><Pencil className="size-4" />Edit</Button></div>)}</CardContent></Card><Card><CardHeader><CardTitle>Estimated fees</CardTitle></CardHeader><CardContent className="space-y-3">{[["Base application fee","$1,250.00"],["Lot area surcharge","$185.50"],["GIS processing fee","$75.00"]].map(([label,value]) => <div key={label} className="flex justify-between gap-3 text-sm"><span className="text-muted-foreground">{label}</span><span>{value}</span></div>)}<Separator /><div className="flex justify-between text-lg font-bold"><span>Estimated total</span><span>$1,510.50 CAD</span></div><Alert><Info className="size-4" /><AlertDescription>Staff will verify the final fee and send a payment request after review.</AlertDescription></Alert></CardContent></Card></div><Card><CardContent className="grid gap-4 p-6"><Label className="flex items-start gap-3"><Checkbox checked={accurate} onCheckedChange={(v) => setAccurate(v === true)} />I confirm the information is accurate and complete.</Label><Label className="flex items-start gap-3"><Checkbox checked={fees} onCheckedChange={(v) => setFees(v === true)} />I understand submission occurs before payment and staff will verify fees.</Label></CardContent></Card><WizardNavigation backLabel="Back to details" backRoute="/apply/form-details" nextLabel="Submit application" nextRoute="/apply/confirmation" nextDisabled={!accurate || !fees} autosaveMessage="Review state saved" /><ContextHelpDrawer /></>
      </div>
    </div>
  );
}