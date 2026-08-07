import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

import { Server, ShieldCheck } from "lucide-react";
export default function MuniromWebhookStatus() {
  return (
    <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="py-12"><Card className="mx-auto max-w-3xl shadow-sm"><CardHeader><div className="flex items-start justify-between gap-4"><span className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground"><Server className="size-5" /></span><Badge className="bg-emerald-600">Operational</Badge></div><CardTitle className="pt-3">Munirom webhook endpoint</CardTitle><CardDescription>This endpoint receives authenticated status and comment updates from Munirom AppTrack.</CardDescription></CardHeader><CardContent className="space-y-6"><div className="grid gap-4 sm:grid-cols-2"><div><p className="text-sm text-muted-foreground">Method</p><p className="font-mono font-semibold">POST</p></div><div><p className="text-sm text-muted-foreground">Endpoint</p><p className="break-all font-mono font-semibold">/api/webhooks/munirom</p></div></div><Separator /><Alert><ShieldCheck className="size-4" /><AlertTitle>Security protected</AlertTitle><AlertDescription>Request payloads and credentials are never displayed. Contact municipal system administration for support.</AlertDescription></Alert></CardContent></Card></section>
      </div>
    </div>
  );
}