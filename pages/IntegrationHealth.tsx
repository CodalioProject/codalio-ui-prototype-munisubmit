import React from "react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { RefreshCw, Search, Webhook } from "lucide-react";
import { useState } from "react";

export default function IntegrationHealth() {
    const [range, setRange] = useState("24h");
    const [refreshing, setRefreshing] = useState(false);
    const systems = [{name:"Munirom AppTrack",status:"Operational",sync:"2 min ago",availability:99.99,queued:2,failures:0},{name:"LandLogic",status:"Operational",sync:"4 min ago",availability:99.8,queued:0,failures:1},{name:"Moneris / Bambora",status:"Degraded",sync:"12 min ago",availability:97.2,queued:8,failures:3},{name:"Munirom Webhooks",status:"Operational",sync:"Just now",availability:100,queued:0,failures:0}];
    const refresh = () => { setRefreshing(true); window.setTimeout(() => setRefreshing(false), 800); };
    const [search, setSearch] = useState("");
    const logs = [["10:42:18","Munirom","Application sync","MS-2025-00418","Complete"],["10:40:02","Webhooks","Status update","MS-2025-00411","Complete"],["10:34:51","Moneris","Payment callback","MS-2025-00398","Failed"],["10:29:27","LandLogic","Parcel lookup","MS-2025-00416","Complete"]];
  return (
   <div className="w-full min-w-0 bg-muted/30 text-foreground overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="py-6"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-3"><h1 className="text-3xl font-bold tracking-tight">Integration health</h1><Badge>Production</Badge></div><p className="mt-2 text-muted-foreground">Live connectivity and synchronization performance.</p></div><div className="flex gap-2"><Select value={range} onValueChange={setRange}><SelectTrigger className="w-36"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="1h">1 hour</SelectItem><SelectItem value="24h">24 hours</SelectItem><SelectItem value="7d">7 days</SelectItem></SelectContent></Select><Button onClick={refresh} disabled={refreshing}><RefreshCw className={`mr-2 size-4 ${refreshing ? "animate-spin" : ""}`} />Refresh</Button></div></div><div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{systems.map(system => <Card key={system.name}><CardHeader><div className="flex items-start justify-between gap-2"><CardTitle className="text-base">{system.name}</CardTitle><Badge variant={system.status === "Operational" ? "secondary" : "destructive"}>{system.status}</Badge></div><CardDescription>Last sync {system.sync}</CardDescription></CardHeader><CardContent><div className="flex justify-between text-sm"><span>Availability</span><b>{system.availability}%</b></div><Progress value={system.availability} className="mt-2" /><div className="mt-4 grid grid-cols-2 gap-3 text-sm"><div><p className="text-muted-foreground">Queued</p><p className="font-bold">{system.queued}</p></div><div><p className="text-muted-foreground">Failures</p><p className="font-bold">{system.failures}</p></div></div></CardContent></Card>)}</div></section>
  <section className="grid gap-6 pb-8 xl:grid-cols-[minmax(0,_2fr)_minmax(18rem,_1fr)]"><Card><CardHeader><CardTitle>Sync activity</CardTitle><CardDescription>Recent requests and events across connected services.</CardDescription></CardHeader><CardContent><div className="relative mb-4"><Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" /><Input className="pl-9" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search application or event" /></div><div className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Timestamp</TableHead><TableHead>Integration</TableHead><TableHead>Event</TableHead><TableHead>Application</TableHead><TableHead>Status</TableHead><TableHead /></TableRow></TableHeader><TableBody>{logs.filter(log => log.join(" ").toLowerCase().includes(search.toLowerCase())).map(log => <TableRow key={log[0]+log[3]}>{log.map((cell,index) => <TableCell key={cell}>{index===4 ? <Badge variant={cell === "Failed" ? "destructive" : "secondary"}>{cell}</Badge> : cell}</TableCell>)}<TableCell><Button variant="ghost" size="sm">Details</Button></TableCell></TableRow>)}</TableBody></Table></div></CardContent></Card><Card><CardHeader><Webhook className="size-7 text-primary" /><CardTitle className="pt-2">Webhook monitor</CardTitle><CardDescription>/api/webhooks/munirom</CardDescription></CardHeader><CardContent className="space-y-4"><div className="grid grid-cols-2 gap-4">{[["Events received","18,492"],["Validated","99.8%"],["Rejected","31"],["Avg. response","142 ms"]].map(item => <div key={item[0]}><p className="text-xs text-muted-foreground">{item[0]}</p><p className="text-lg font-bold">{item[1]}</p></div>)}</div><Alert><AlertDescription>No request secrets or payload details are displayed.</AlertDescription></Alert></CardContent></Card></section>
      </div>
    </div>
  );
}