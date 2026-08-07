import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import { ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [email, setEmail] = useState("admin@municipality.ca");
    const [password, setPassword] = useState("demo1234");
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent) => { event.preventDefault(); navigate("/admin/dashboard"); };
  return (
   <div className="w-full min-w-0 bg-muted/40 text-foreground overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="py-12"><Card className="mx-auto w-full max-w-md shadow-md"><CardHeader><div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground"><ShieldCheck className="size-5" /></span><Badge>Production</Badge></div><CardTitle className="pt-3 text-2xl">Municipal administrator sign in</CardTitle><CardDescription>Authorized municipal staff only.</CardDescription></CardHeader><CardContent><Alert className="mb-5"><AlertTitle>Secure administration</AlertTitle><AlertDescription>Activity is logged for municipal audit purposes.</AlertDescription></Alert><form className="space-y-5" onSubmit={handleSubmit}><div className="space-y-2"><Label htmlFor="work-email">Work email</Label><Input id="work-email" type="email" value={email} onChange={e => setEmail(e.target.value)} /></div><div className="space-y-2"><Label htmlFor="admin-password">Password</Label><Input id="admin-password" type="password" value={password} onChange={e => setPassword(e.target.value)} /></div><Button className="w-full">Sign in securely</Button></form></CardContent></Card></section>
      </div>
    </div>
  );
}