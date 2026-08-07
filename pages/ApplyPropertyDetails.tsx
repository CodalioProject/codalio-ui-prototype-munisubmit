import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import ApplicationWizardProgress from "../components/ApplicationWizardProgress";
import ContextHelpDrawer from "../components/ContextHelpDrawer";
import WizardNavigation from "../components/WizardNavigation";

import { LocateFixed, MapPin, Search } from "lucide-react";
import { useState } from "react";

export default function ApplyPropertyDetails() {
    const [query, setQuery] = useState("18 Maple Avenue");
    const [selectedParcel, setSelectedParcel] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 min-w-0">
          <><ApplicationWizardProgress currentStep={2} /><div><h1 className="text-3xl font-bold">Select the property</h1><p className="mt-2 text-muted-foreground">Search by street address or choose a parcel on the accessible map.</p></div><div className="grid gap-6 xl:grid-cols-3"><Card className="xl:col-span-2"><CardHeader><CardTitle>Property search</CardTitle><CardDescription>Powered by LandLogic parcel intelligence</CardDescription></CardHeader><CardContent><div className="flex gap-2"><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter a municipal address" /><Button onClick={() => setSelectedParcel(true)}><Search className="size-4" />Search</Button></div><div className="relative mt-4 grid min-h-96 place-items-center overflow-hidden rounded-lg border bg-[linear-gradient(45deg,var(--muted)_25%,transparent_25%),linear-gradient(-45deg,var(--muted)_25%,transparent_25%)] bg-[length:36px_36px]"><div className="absolute inset-x-0 top-1/2 h-8 -rotate-6 bg-background/80" /><div className="absolute inset-y-0 left-1/3 w-10 rotate-12 bg-background/80" /><Button variant="secondary" className="relative shadow-md" onClick={() => setSelectedParcel(true)}><MapPin className="size-4" />Select 18 Maple Avenue</Button><Button size="icon" variant="outline" className="absolute bottom-3 right-3" aria-label="Use my location"><LocateFixed className="size-4" /></Button></div></CardContent></Card><Card><CardHeader><CardTitle>Parcel summary</CardTitle></CardHeader><CardContent>{selectedParcel ? <div className="space-y-4"><Badge>Selected parcel</Badge>{[["Address","18 Maple Avenue"],["Parcel ID","042-018-00910"],["Lot area","742 m²"],["Current zoning","R2"],["Ward","Ward 3"]].map(([label,value]) => <div key={label}><p className="text-xs text-muted-foreground">{label}</p><p className="font-medium">{value}</p></div>)}<Label className="flex items-start gap-2"><Checkbox checked={confirmed} onCheckedChange={(v) => setConfirmed(v === true)} />I confirm this is the correct property</Label></div> : <p className="text-sm text-muted-foreground">Search for and select a parcel to see property details.</p>}</CardContent></Card></div><WizardNavigation backLabel="Back to type" backRoute="/apply/select-type" nextLabel="Continue to details" nextRoute="/apply/form-details" nextDisabled={!confirmed} autosaveMessage="Property selection saved" /><ContextHelpDrawer /></>
      </div>
    </div>
  );
}