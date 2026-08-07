import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import ApplicationWizardStepper from "../components/ApplicationWizardStepper";

import { CheckCircle2, Download, Mail, ReceiptText } from "lucide-react";
import { Link } from "react-router-dom";

export default function ApplicationConfirmation() {
  return (
    <div className="w-full min-w-0 bg-muted/30 text-foreground overflow-x-hidden">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="pt-6"><ApplicationWizardStepper currentStep={5} /></section>
  <section className="py-8 pb-16"><Card className="mx-auto max-w-3xl border-primary/30 shadow-md"><CardHeader className="text-center"><CheckCircle2 className="mx-auto size-14 text-emerald-600" /><CardTitle className="pt-3 text-3xl">Application submitted</CardTitle><CardDescription>Your application package has been sent to Munirom AppTrack for municipal review.</CardDescription><div className="pt-2"><Badge>Submitted</Badge></div></CardHeader><CardContent className="space-y-6"><div className="rounded-lg bg-muted p-5 text-center"><p className="text-sm text-muted-foreground">Application reference</p><p className="mt-1 text-2xl font-bold tracking-wide">MS-2025-00418</p></div><Alert><Mail className="size-4" /><AlertTitle>Confirmation email sent</AlertTitle><AlertDescription>Keep your reference number for future correspondence.</AlertDescription></Alert><div><h3 className="font-semibold">What happens next</h3><ol className="mt-4 space-y-3">{["Staff completeness review","Fee verification","Payment request and review updates"].map((step,index) => <li key={step} className="flex gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">{index+1}</span><span>{step}</span></li>)}</ol></div><Separator /><div className="grid gap-3 text-sm sm:grid-cols-2"><span><b>Synchronization:</b> Complete</span><span><b>Documents:</b> 3 received</span><span><b>Submitted:</b> June 18, 2025, 10:42 AM</span><span><b>Audit reference:</b> AR-99184</span></div></CardContent><CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-center"><Button asChild><Link to="/dashboard"><ReceiptText className="mr-2 size-4" />View my applications</Link></Button><Button variant="outline" onClick={() => window.print()}><Download className="mr-2 size-4" />Download receipt</Button></CardFooter></Card></section>
      </div>
    </div>
  );
}