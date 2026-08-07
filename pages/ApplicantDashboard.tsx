import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import ApplicationStatusBadge from "../components/ApplicationStatusBadge";

import { Bell, CheckCheck, Filter, Plus } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ApplicantDashboard() {
    const [filter, setFilter] = useState("all");
    const navigate = useNavigate();
    const applications = [{ref:"MS-2025-00418",property:"123 Main Street",type:"Minor Variance",updated:"Today",status:"UnderReview"},{ref:"MS-2025-00399",property:"88 King Avenue",type:"Site Plan Control",updated:"Yesterday",status:"PaymentRequired"},{ref:"DRAFT-0182",property:"14 Cedar Court",type:"Consent / Severance",updated:"Jun 15",status:"Draft"},{ref:"MS-2025-00354",property:"601 Lake Road",type:"Zoning Amendment",updated:"Jun 12",status:"ActionRequired"}];
    const notifications = [{id:1,title:"Application moved to review",text:"MS-2025-00418 is now being reviewed by planning staff.",time:"2h"},{id:2,title:"Payment request available",text:"A verified fee is ready for MS-2025-00399.",time:"1d"},{id:3,title:"Additional information requested",text:"Please review the planner comment on MS-2025-00354.",time:"3d"}];
    const [unread, setUnread] = useState([1,2]);
  return (
   <div className="w-full min-w-0 bg-muted/30 text-foreground overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="py-8"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-3xl font-bold tracking-tight">My applications</h1><p className="mt-2 text-muted-foreground">Track drafts, municipal review, comments, and payment requests.</p></div><Button asChild><Link to="/apply/select-type"><Plus className="mr-2 size-4" />New application</Link></Button></div><div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[["Active applications","4"],["Drafts","1"],["Action required","1"],["Payment required","1"]].map(item => <Card key={item[0]}><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">{item[0]}</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">{item[1]}</p></CardContent></Card>)}</div></section>
  <section className="pb-8"><Card><CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><CardTitle>Applications</CardTitle><CardDescription>Your current municipal planning files.</CardDescription></div><Select value={filter} onValueChange={setFilter}><SelectTrigger className="w-44"><Filter className="mr-2 size-4" /><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">All statuses</SelectItem><SelectItem value="Draft">Draft</SelectItem><SelectItem value="UnderReview">Under review</SelectItem><SelectItem value="ActionRequired">Action required</SelectItem></SelectContent></Select></CardHeader><CardContent className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Reference</TableHead><TableHead>Property</TableHead><TableHead>Type</TableHead><TableHead>Updated</TableHead><TableHead>Status</TableHead><TableHead /></TableRow></TableHeader><TableBody>{applications.filter(app => filter === "all" || app.status === filter).map(app => <TableRow key={app.ref}><TableCell className="font-mono font-medium">{app.ref}</TableCell><TableCell>{app.property}</TableCell><TableCell>{app.type}</TableCell><TableCell>{app.updated}</TableCell><TableCell><ApplicationStatusBadge status={app.status} /></TableCell><TableCell><Button variant="outline" size="sm" onClick={() => app.status === "Draft" ? navigate("/apply/form-details") : undefined}>{app.status === "Draft" ? "Resume" : "View"}</Button></TableCell></TableRow>)}</TableBody></Table></CardContent></Card></section>
  <section className="pb-12"><div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-semibold">Recent notifications</h2><Button variant="ghost" size="sm" onClick={() => setUnread([])}><CheckCheck className="mr-2 size-4" />Mark all read</Button></div><Card><CardContent className="divide-y p-0" aria-live="polite">{notifications.map(note => <div key={note.id} className="flex gap-4 p-5"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Bell className="size-4" /></span><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="font-medium">{note.title}</p>{unread.includes(note.id) && <Badge>New</Badge>}</div><p className="mt-1 text-sm text-muted-foreground">{note.text}</p><button className="mt-2 text-sm font-medium text-primary hover:underline" onClick={() => setUnread(items => items.filter(id => id !== note.id))}>View update</button></div><span className="text-xs text-muted-foreground">{note.time}</span></div>)}</CardContent></Card></section>
      </div>
    </div>
  );
}