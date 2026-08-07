import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

import { DatabaseZap, MailCheck, MapPinned, RefreshCw, RotateCcw, Webhook } from "lucide-react";
import { useState } from "react";

export default function AdminIntegrations() {
    const [refreshing, setRefreshing] = useState(false);
    const [filter, setFilter] = useState("All");
    const logs = [{time:"10:42:18",service:"Munirom AppTrack",event:"submission.created",ref:"MS-2025-00418",status:"Successful"},{time:"10:38:02",service:"LandLogic",event:"parcel.lookup",ref:"MS-2025-00417",status:"Successful"},{time:"10:31:44",service:"Munirom AppTrack",event:"document.sync",ref:"MS-2025-00417",status:"Failed"},{time:"10:29:12",service:"Email",event:"notification.send",ref:"MS-2025-00416",status:"Pending"}];
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 min-w-0">
          <><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="flex items-center gap-3"><h1 className="text-3xl font-bold">Integration health</h1><Badge className="bg-emerald-700">Operational</Badge></div><p className="mt-2 text-muted-foreground">Monitor outbound submissions, property intelligence, webhooks, and notifications.</p></div><Button variant="outline" onClick={() => { setRefreshing(true); window.setTimeout(() => setRefreshing(false), 800); }}><RefreshCw className={`size-4 ${refreshing ? "animate-spin" : ""}`} />{refreshing ? "Refreshing…" : "Refresh status"}</Button></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[[DatabaseZap,"Munirom AppTrack",99.9],[MapPinned,"LandLogic",99.7],[Webhook,"Webhook receiver",100],[MailCheck,"Email notifications",99.9]].map(([Icon,name,uptime]) => <Card key={name as string}><CardHeader><Icon className="size-6 text-primary" /><CardTitle className="pt-3 text-base">{name as string}</CardTitle></CardHeader><CardContent><div className="mb-2 flex justify-between text-sm"><span className="text-muted-foreground">Availability</span><span>{uptime as number}%</span></div><Progress value={uptime as number} /><p className="mt-4 text-xs text-muted-foreground">Last successful sync: 2 min ago</p></CardContent></Card>)}</div></>
  <Card><CardHeader><CardTitle>Sync activity</CardTitle><Tabs value={filter} onValueChange={setFilter}><TabsList><TabsTrigger value="All">All</TabsTrigger><TabsTrigger value="Successful">Successful</TabsTrigger><TabsTrigger value="Pending">Pending</TabsTrigger><TabsTrigger value="Failed">Failed</TabsTrigger></TabsList></Tabs></CardHeader><CardContent className="space-y-3">{logs.filter((log) => filter === "All" || log.status === filter).map((log) => <div key={log.time + log.ref} className="grid gap-2 rounded-lg border p-4 md:grid-cols-[0.8fr_1fr_1fr_0.7fr_auto] md:items-center"><p className="text-sm">{log.time}</p><div><p className="font-medium">{log.service}</p><p className="text-xs text-muted-foreground">{log.event}</p></div><p className="text-sm">{log.ref}</p><Badge variant={log.status === "Failed" ? "destructive" : "outline"}>{log.status}</Badge>{log.status === "Failed" ? <Button size="sm" variant="outline"><RotateCcw className="size-4" />Retry</Button> : <Button size="sm" variant="ghost">Payload</Button>}</div>)}</CardContent></Card>
      </div>
    </div>
  );
}