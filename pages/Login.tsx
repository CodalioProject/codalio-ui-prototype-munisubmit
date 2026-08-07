import React from "react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import { LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("applicant@example.ca");
    const [password, setPassword] = useState("demo1234");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent) => { event.preventDefault(); if (!email || !password) { setError("Enter your email and password."); return; } navigate("/dashboard"); };
  return (
   <div className="w-full min-w-0 bg-muted/40 text-foreground overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
          <section className="py-12"><Card className="mx-auto w-full max-w-md shadow-md"><CardHeader><div className="mb-3 grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground"><LockKeyhole className="size-5" /></div><CardTitle className="text-2xl">Sign in to MuniSubmit</CardTitle><CardDescription>Access your applications and saved drafts.</CardDescription></CardHeader><CardContent><form id="login-form" className="space-y-5" onSubmit={handleSubmit}><div className="space-y-2"><Label htmlFor="email">Email address</Label><Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required /></div><div className="space-y-2"><div className="flex justify-between"><Label htmlFor="password">Password</Label><button type="button" className="text-sm text-primary hover:underline">Forgot password?</button></div><Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required /></div><div className="flex items-center gap-2"><Checkbox id="remember" /><Label htmlFor="remember" className="font-normal">Remember me</Label></div>{error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}<Button className="w-full" type="submit">Sign in</Button></form></CardContent><CardFooter className="justify-center text-sm text-muted-foreground">New to MuniSubmit? <Link className="ml-1 font-medium text-primary hover:underline" to="/apply/select-type">Start an application</Link></CardFooter></Card></section>
      </div>
    </div>
  );
}