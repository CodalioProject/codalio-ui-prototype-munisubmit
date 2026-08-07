import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { Activity, ArrowRight, Download, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
    const [range, setRange] = useState("30");
  return (
   <div className="w-full min-w-0 bg-muted/30 text-foreground overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="py-6"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-3"><h1 className="text-3xl font-bold tracking-tight">Dashboard overview</h1><Badge>Production</Badge></div><p className="mt-2 text-muted-foreground">Municipal submission and integration performance.</p></div><div className="flex gap-2"><Select value={range} onValueChange={setRange}><SelectTrigger className="w-40"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="7">Last 7 days</SelectItem><SelectItem value="30">Last 30 days</SelectItem><SelectItem value="quarter">This quarter</SelectItem></SelectContent></Select><Button variant="outline"><Download className="mr-2 size-4" />Export</Button></div></div><div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{[["New submissions","184","+12%"],["Under review","96","52%"],["Action required","18","9.8%"],["Payment required","27","14.7%"],["Approval rate","82%","+4.1%"],["Avg. processing","14.2 days","-1.8 days"]].map(item => <Card key={item[0]}><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">{item[0]}</CardTitle></CardHeader><CardContent><div className="flex items-end justify-between"><span className="text-3xl font-bold">{item[1]}</span><Badge variant="secondary"><TrendingUp className="mr-1 size-3" />{item[2]}</Badge></div><Progress value={Math.floor(Math.random()*45)+45} className="mt-4" /></CardContent></Card>)}</div></section>
  <section className="grid gap-6 pb-8 xl:grid-cols-3"><Card className="xl:col-span-2"><CardHeader><CardTitle>Submissions over time</CardTitle><CardDescription>Daily applications received</CardDescription></CardHeader><CardContent><div className="flex h-64 items-end gap-2 rounded-lg bg-muted/50 p-5">{[42,58,51,76,64,82,72,90,68,86,95,78].map((height,index) => <div key={index} className="flex-1 rounded-t bg-primary" style={{height:`${height}%`}} title={`${height} submissions`} />)}</div></CardContent></Card><Card><CardHeader><CardTitle>Integration health</CardTitle></CardHeader><CardContent className="space-y-4">{[["Munirom AppTrack","Operational"],["LandLogic","Operational"],["Moneris / Bambora","Degraded"]].map(row => <div key={row[0]} className="flex items-center justify-between gap-2"><span className="text-sm">{row[0]}</span><Badge variant={row[1] === "Operational" ? "secondary" : "destructive"}>{row[1]}</Badge></div>)}<Button variant="outline" className="w-full" asChild><Link to="/admin/integrations">View details <ArrowRight className="ml-2 size-4" /></Link></Button></CardContent></Card><Card className="xl:col-span-3"><CardHeader><CardTitle>Recent admin activity</CardTitle></CardHeader><CardContent className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Time</TableHead><TableHead>Event</TableHead><TableHead>Reference</TableHead><TableHead>Status</TableHead></TableRow></TableHeader><TableBody>{[["10:42","Application synchronized","MS-2025-00418","Complete"],["10:31","Fee rule published","FR-028","Complete"],["10:18","Payment callback","MS-2025-00399","Processing"]].map(row => <TableRow key={row[2]}>{row.map((cell,index) => <TableCell key={cell}>{index===3 ? <Badge variant="outline">{cell}</Badge> : cell}</TableCell>)}</TableRow>)}</TableBody></Table></CardContent></Card></section>
      </div>
    </div>
  );
}