import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import ApplicationWizardProgress from "../components/ApplicationWizardProgress";
import ContextHelpDrawer from "../components/ContextHelpDrawer";
import FileUploadZone from "../components/FileUploadZone";
import WizardNavigation from "../components/WizardNavigation";

import { useState } from "react";

export default function ApplyFormDetails() {
    const [description, setDescription] = useState("Construct a two-storey rear addition while retaining the existing dwelling.");
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 min-w-0">
          <><ApplicationWizardProgress currentStep={3} /><div><h1 className="text-3xl font-bold">Project details and documents</h1><p className="mt-2 text-muted-foreground">Tell planning staff about your proposal and attach required files.</p></div><Card><CardHeader><CardTitle>Project details</CardTitle><CardDescription>Fields marked required must be complete before review.</CardDescription></CardHeader><CardContent className="grid gap-5"><div className="space-y-2"><Label htmlFor="description">Project description</Label><Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={5} placeholder="Describe the proposed work…" /></div><div className="grid gap-4 md:grid-cols-2"><div className="space-y-2"><Label htmlFor="section">Zoning By-law Section</Label><Input id="section" defaultValue="4.2.1" /></div><div className="space-y-2"><Label>Requested variance</Label><Select defaultValue="setback"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="setback">Front yard setback</SelectItem><SelectItem value="height">Building height</SelectItem><SelectItem value="coverage">Lot coverage</SelectItem></SelectContent></Select></div></div></CardContent></Card><div><h2 className="mb-4 text-2xl font-bold">Required documents</h2><div className="grid gap-4 lg:grid-cols-3"><FileUploadZone /><FileUploadZone /><FileUploadZone /></div></div><WizardNavigation backLabel="Back to property" backRoute="/apply/property-details" nextLabel="Review application" nextRoute="/apply/review" nextDisabled={description.length < 20} autosaveMessage="Details and uploads saved" /><ContextHelpDrawer /></>
      </div>
    </div>
  );
}