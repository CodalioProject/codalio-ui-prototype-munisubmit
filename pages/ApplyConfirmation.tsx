import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

import { CircleCheckBig, Download, Mail, ReceiptText } from "lucide-react";
import { Link } from "react-router-dom";

export default function ApplyConfirmation() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 min-w-0">
          <><Card className="mx-auto max-w-3xl border-t-4 border-t-emerald-600 shadow-md"><CardHeader className="text-center"><CircleCheckBig className="mx-auto size-14 text-emerald-600" /><Badge className="mx-auto mt-3 bg-emerald-700">Submitted</Badge><CardTitle className="pt-3 text-3xl">Your application has been submitted</CardTitle><CardDescription className="text-base">Reference MS-2025-00418</CardDescription></CardHeader><CardContent className="space-y-6"><p className="text-center text-muted-foreground">MuniSubmit has securely packaged your application for Munirom AppTrack. Payment is not due until municipal staff verify the fee and issue a request.</p><Alert><Mail className="size-4" /><AlertTitle>Confirmation sent</AlertTitle><AlertDescription>Watch your inbox and dashboard for the completeness review and payment request.</AlertDescription></Alert><div className="flex flex-col justify-center gap-3 sm:flex-row"><Button asChild><Link to="/dashboard">View my applications</Link></Button><Button variant="outline"><Download className="size-4" />Download receipt</Button></div></CardContent></Card><Card className="mx-auto max-w-3xl"><CardHeader><CardTitle className="flex items-center gap-2"><ReceiptText className="size-5 text-primary" />Submission sync status</CardTitle></CardHeader><CardContent><Progress value={100} /><ol className="mt-5 grid gap-3 sm:grid-cols-4">{["Submission validated","Files packaged","Sent to AppTrack","Receipt confirmed"].map((step) => <li key={step} className="flex items-center gap-2 text-sm"><CircleCheckBig className="size-4 shrink-0 text-emerald-600" />{step}</li>)}</ol></CardContent></Card></>
      </div>
    </div>
  );
}