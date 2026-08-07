import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import ApplicationWizardStepper from "../components/ApplicationWizardStepper";
import WizardHelpPanel from "../components/WizardHelpPanel";

import { ArrowLeft, ArrowRight, MapPin, Search, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PropertyDetails() {
    const [query, setQuery] = useState("");
    const [found, setFound] = useState(false);
    const [selected, setSelected] = useState(false);
    const navigate = useNavigate();
  return (
   <div className="w-full min-w-0 bg-muted/30 text-foreground overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="pt-6"><ApplicationWizardStepper currentStep={2} /></section>
  <section className="py-8"><div className="grid gap-6 lg:grid-cols-[minmax(0,_2fr)_minmax(20rem,_1fr)]"><Card><CardHeader><CardTitle>Select the property parcel</CardTitle><CardDescription>Search by street address, then select a parcel on the accessible demo map.</CardDescription></CardHeader><CardContent><div className="flex gap-2"><Input value={query} onChange={e => setQuery(e.target.value)} placeholder="123 Main Street" /><Button onClick={() => setFound(true)}><Search className="mr-2 size-4" />Search</Button></div><div className="relative mt-5 min-h-96 overflow-hidden rounded-lg border bg-accent"><div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(30deg, transparent 24%, currentColor 25%, currentColor 26%, transparent 27%, transparent 74%, currentColor 75%, currentColor 76%, transparent 77%)", backgroundSize: "48px 48px" }} /><div className="absolute left-3 top-3 flex gap-2"><Button size="icon" variant="secondary" aria-label="Zoom in"><ZoomIn /></Button><Button size="icon" variant="secondary" aria-label="Zoom out"><ZoomOut /></Button></div>{found && <button onClick={() => setSelected(true)} className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-lg border-2 border-primary bg-card p-4 shadow-md"><MapPin className="text-primary" />123 Main Street</button>}</div></CardContent></Card><Card><CardHeader><CardTitle>Parcel intelligence</CardTitle><CardDescription>Source: LandLogic</CardDescription></CardHeader><CardContent>{selected ? <div className="space-y-4">{[["Municipal address","123 Main Street"],["Parcel ID","PIN 10418-0231"],["Lot area","742 m²"],["Current zoning","R2 Residential"],["Constraints","None identified"]].map(row => <div key={row[0]}><p className="text-xs uppercase text-muted-foreground">{row[0]}</p><p className="mt-1 font-medium">{row[1]}</p><Separator className="mt-4" /></div>)}<Badge className="bg-emerald-600">Parcel selected</Badge></div> : <div className="rounded-lg bg-muted p-6 text-center text-sm text-muted-foreground">Search and select a parcel to view property details.</div>}</CardContent></Card></div><div className="mt-6 flex justify-between"><Button variant="outline" onClick={() => navigate("/apply/select-type")}><ArrowLeft className="mr-2 size-4" />Back</Button><Button disabled={!selected} onClick={() => navigate("/apply/form-details")}>Next: Details <ArrowRight className="ml-2 size-4" /></Button></div><WizardHelpPanel resources={["How to find your parcel","Using accessible map controls","Understanding zoning information"]} /></section>
      </div>
    </div>
  );
}