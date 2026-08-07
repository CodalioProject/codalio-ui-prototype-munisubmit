import { Alert, AlertDescription } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { Calculator, MoreHorizontal, Plus } from "lucide-react";
import { useState } from "react";

export default function FeeConfigurations() {
    const [editing, setEditing] = useState(false);
    const rules = [{type:"Minor Variance",fee:"$1,250",formula:"Area × $0.20",date:"Jan 1, 2025",status:"Active"},{type:"Zoning By-law Amendment",fee:"$4,800",formula:"Area × $0.35",date:"Jan 1, 2025",status:"Active"},{type:"Site Plan Control",fee:"$3,200",formula:"Area × $0.45",date:"Jul 1, 2025",status:"Scheduled"}];
    const [base, setBase] = useState("1250");
    const [rate, setRate] = useState("0.20");
  return (
   <div className="w-full min-w-0 bg-muted/30 text-foreground overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="py-6"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-3xl font-bold tracking-tight">Fee configurations</h1><p className="mt-2 text-muted-foreground">Manage versioned formulas used to estimate application fees.</p></div><Button onClick={() => setEditing(true)}><Plus className="mr-2 size-4" />Create fee rule</Button></div>{editing && <Alert className="mt-6"><AlertDescription>Fee rule editor is active. Update the formula below, then save or publish your changes.</AlertDescription></Alert>}<Card className="mt-6"><CardContent className="overflow-x-auto p-0"><Table><TableHeader><TableRow><TableHead>Application type</TableHead><TableHead>Base fee</TableHead><TableHead>Variable formula</TableHead><TableHead>Effective date</TableHead><TableHead>Status</TableHead><TableHead /></TableRow></TableHeader><TableBody>{rules.map(row => <TableRow key={row.type}><TableCell className="font-medium">{row.type}</TableCell><TableCell>{row.fee}</TableCell><TableCell>{row.formula}</TableCell><TableCell>{row.date}</TableCell><TableCell><Badge variant="secondary">{row.status}</Badge></TableCell><TableCell><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem onClick={() => setEditing(true)}>Edit rule</DropdownMenuItem><DropdownMenuItem>Duplicate</DropdownMenuItem><DropdownMenuItem>Archive</DropdownMenuItem></DropdownMenuContent></DropdownMenu></TableCell></TableRow>)}</TableBody></Table></CardContent></Card></section>
  <section className="grid gap-6 pb-8 lg:grid-cols-2"><Card><CardHeader><CardTitle>Configure fee formula</CardTitle><CardDescription>Base fee + parcel area × variable rate</CardDescription></CardHeader><CardContent><div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2 sm:col-span-2"><Label>Application type</Label><Input value="Minor Variance" readOnly /></div><div className="space-y-2"><Label htmlFor="base">Base fee (CAD)</Label><Input id="base" type="number" value={base} onChange={e => setBase(e.target.value)} /></div><div className="space-y-2"><Label htmlFor="rate">Rate per m²</Label><Input id="rate" type="number" value={rate} onChange={e => setRate(e.target.value)} /></div><div className="space-y-2"><Label>Minimum fee</Label><Input type="number" defaultValue="1250" /></div><div className="space-y-2"><Label>Maximum fee</Label><Input type="number" defaultValue="5000" /></div></div><Alert className="mt-5"><Calculator className="size-4" /><AlertDescription>Preview: ${base} + parcel area × ${rate}</AlertDescription></Alert><div className="mt-5 flex gap-3"><Button variant="outline">Save draft</Button><Button>Publish rule</Button></div></CardContent></Card><Card><CardHeader><CardTitle>Calculation preview</CardTitle><CardDescription>Example parcel scenarios</CardDescription></CardHeader><CardContent><Table><TableBody>{[["Small residential parcel","$1,348.00"],["Large residential parcel","$1,720.00"],["Commercial parcel","$2,490.00"]].map(row => <TableRow key={row[0]}><TableCell>{row[0]}</TableCell><TableCell className="text-right font-semibold">{row[1]}</TableCell></TableRow>)}</TableBody></Table></CardContent></Card></section>
      </div>
    </div>
  );
}