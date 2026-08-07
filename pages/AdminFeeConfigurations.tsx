import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import { Info, Pencil, Plus } from "lucide-react";
import { useState } from "react";

export default function AdminFeeConfigurations() {
    const [open, setOpen] = useState(false);
    const fees = [{type:"Minor Variance",base:"$1,250",formula:"Base + $0.25 per m²",date:"Jan 1, 2025"},{type:"Zoning Amendment",base:"$4,800",formula:"Base + building surcharge",date:"Jan 1, 2025"},{type:"Site Plan Control",base:"$3,200",formula:"Base + $0.40 per m²",date:"Mar 1, 2025"}];
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 min-w-0">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h1 className="text-3xl font-bold">Fee configurations</h1><p className="mt-2 text-muted-foreground">Manage effective-dated formulas used to estimate applicant fees.</p></div><Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><Button><Plus className="size-4" />Add fee structure</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Add fee structure</DialogTitle><DialogDescription>Create an effective-dated estimate formula.</DialogDescription></DialogHeader><div className="grid gap-4"><Label>Application type<Input className="mt-2" defaultValue="Minor Variance" /></Label><Label>Base fee<Input className="mt-2" type="number" defaultValue="1250" /></Label><Label>Rate per m²<Input className="mt-2" type="number" defaultValue="0.25" /></Label><Alert><Info className="size-4" /><AlertDescription>Example estimate for 742 m²: $1,435.50</AlertDescription></Alert></div><DialogFooter><Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button><Button onClick={() => setOpen(false)}>Save structure</Button></DialogFooter></DialogContent></Dialog></div><Alert><Info className="size-4" /><AlertTitle>Audited configuration</AlertTitle><AlertDescription>Changes affect new estimates only and are recorded in the audit log.</AlertDescription></Alert><Card><CardContent className="space-y-3 p-5">{fees.map((item) => <div key={item.type} className="grid gap-3 rounded-lg border p-4 md:grid-cols-[1.2fr_0.7fr_1fr_0.7fr_auto] md:items-center"><div><p className="font-semibold">{item.type}</p><p className="text-xs text-muted-foreground">Effective {item.date}</p></div><p>{item.base}</p><p className="text-sm text-muted-foreground">{item.formula}</p><Badge variant="outline">Active</Badge><Button size="sm" variant="ghost"><Pencil className="size-4" />Edit</Button></div>)}</CardContent></Card>
      </div>
    </div>
  );
}