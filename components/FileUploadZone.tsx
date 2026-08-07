
import { useState } from "react";

import { FileCheck2, UploadCloud, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
        export default function FileUploadZone() {
  const [fileName, setFileName] = useState("");
        return (
            <Card><CardContent className="p-5"><div className="rounded-lg border-2 border-dashed border-input p-6 text-center"><UploadCloud className="mx-auto size-8 text-primary" /><p className="mt-3 font-medium">Drag documents here or browse</p><p className="mt-1 text-sm text-muted-foreground">PDF or DWG, up to 50 MB</p><input id="document-file-input" type="file" className="sr-only" accept=".pdf,.dwg" onChange={(event) => setFileName(event.target.files?.[0]?.name || "")} /><Button type="button" variant="outline" className="mt-4" onClick={() => window.document.getElementById("document-file-input")?.click()}>Choose file</Button></div>{fileName && <div className="mt-4 flex items-center gap-3 rounded-md border p-3"><FileCheck2 className="size-5 text-emerald-600" /><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{fileName}</p><Progress value={100} className="mt-2" /></div><Badge variant="outline">Complete</Badge><Button size="icon" variant="ghost" onClick={() => setFileName("")} aria-label="Remove file"><X className="size-4" /></Button></div>}</CardContent></Card>
        );
        }