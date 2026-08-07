import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

import { CheckCircle2, LockKeyhole, Webhook } from "lucide-react";
export default function MuniromWebhook() {
  return (
    <div className="w-full min-w-0 bg-muted/40 overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 min-w-0">
          <Card className="mx-auto max-w-2xl shadow-md"><CardHeader><div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-lg bg-primary text-primary-foreground"><Webhook className="size-6" /></span><Badge variant="outline"><LockKeyhole className="size-3" />Protected endpoint</Badge></div><CardTitle className="pt-4 text-2xl">Munirom webhook endpoint</CardTitle><CardDescription className="font-mono">POST /api/webhooks/munirom</CardDescription></CardHeader><CardContent className="space-y-6"><Alert><LockKeyhole className="size-4" /><AlertTitle>Not an interactive public page</AlertTitle><AlertDescription>This route receives signed status and comment updates from Munirom AppTrack.</AlertDescription></Alert><Separator /><div><h2 className="font-semibold">Security controls</h2><ul className="mt-4 space-y-3">{["Signature verification required","Replay protection enabled","Payloads are audit logged"].map((item) => <li key={item} className="flex items-center gap-2 text-sm"><CheckCircle2 className="size-4 text-emerald-600" />{item}</li>)}</ul></div></CardContent></Card>
      </div>
    </div>
  );
}