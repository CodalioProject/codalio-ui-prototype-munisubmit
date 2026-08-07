import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { Textarea } from "../components/ui/textarea";
import ApplicationWizardStepper from "../components/ApplicationWizardStepper";
import AutoSaveIndicator from "../components/AutoSaveIndicator";
import WizardHelpPanel from "../components/WizardHelpPanel";

import { ArrowLeft, ArrowRight, FileUp, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApplicationFormDetails() {
    const [description, setDescription] = useState("");
    const [uploaded, setUploaded] = useState(false);
    const navigate = useNavigate();
  return (
   <div className="w-full min-w-0 bg-muted/30 text-foreground overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="pt-6"><ApplicationWizardStepper currentStep={3} /></section>
  <section className="py-8"><div className="grid gap-6 lg:grid-cols-[minmax(0,_3fr)_minmax(18rem,_1fr)]"><Card><CardHeader><div className="flex items-center justify-between gap-4"><div><CardTitle>Application details</CardTitle><CardDescription>Minor Variance · 123 Main Street</CardDescription></div><AutoSaveIndicator status="Saved" /></div></CardHeader><CardContent><div className="grid gap-5 md:grid-cols-2"><div className="space-y-2 md:col-span-2"><Label htmlFor="description">Project description</Label><Textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={5} placeholder="Describe the proposed work..." /></div><div className="space-y-2"><Label htmlFor="use">Proposed use</Label><Input id="use" placeholder="Residential addition" /></div><div className="space-y-2"><Label htmlFor="bylaw">Zoning by-law section</Label><Input id="bylaw" placeholder="e.g. 4.2.1" /></div><div className="space-y-2"><Label htmlFor="front">Front setback (m)</Label><Input id="front" type="number" /></div><div className="space-y-2"><Label htmlFor="rear">Rear setback (m)</Label><Input id="rear" type="number" /></div></div></CardContent></Card><Card><CardHeader><CardTitle>Required documents</CardTitle><CardDescription>PDF or DWG, up to 50 MB</CardDescription></CardHeader><CardContent><label className="flex cursor-pointer flex-col items-center rounded-lg border-2 border-dashed border-input p-6 text-center hover:bg-muted"><FileUp className="size-8 text-primary" /><span className="mt-2 font-medium">Choose files</span><Input type="file" className="sr-only" onChange={() => setUploaded(true)} /></label><div className="mt-5 space-y-3">{["Site plan","Building elevations","Planning rationale"].map((file,index) => <div key={file} className="rounded-lg border p-3"><div className="flex items-center justify-between"><span className="text-sm font-medium">{file}</span>{uploaded && index === 0 ? <Badge className="bg-emerald-600">Uploaded</Badge> : <Badge variant="secondary">Required</Badge>}</div>{uploaded && index === 0 && <Progress value={100} className="mt-3" />}</div>)}</div></CardContent></Card></div><div className="mt-6 flex justify-between"><Button variant="outline" onClick={() => navigate("/apply/property-details")}><ArrowLeft className="mr-2 size-4" />Back</Button><Button onClick={() => navigate("/apply/review")}>Review application <ArrowRight className="ml-2 size-4" /></Button></div><WizardHelpPanel resources={["Document preparation guide","Accepted file formats","Planning terminology"]} /></section>
      </div>
    </div>
  );
}