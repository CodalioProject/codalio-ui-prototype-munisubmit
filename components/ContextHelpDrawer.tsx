
        

import { CircleHelp, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
        export default function ContextHelpDrawer() {
        return (
            <Sheet><SheetTrigger asChild><Button className="fixed bottom-5 right-4 z-40 shadow-lg"><CircleHelp className="size-4" />Help & Resources</Button></SheetTrigger><SheetContent className="w-full overflow-y-auto sm:max-w-md"><SheetHeader><SheetTitle>Help & Resources</SheetTitle><SheetDescription>Guidance for completing your municipal planning application.</SheetDescription></SheetHeader><Accordion type="single" collapsible className="mt-6"><AccordionItem value="type"><AccordionTrigger>Choosing an application type</AccordionTrigger><AccordionContent>Review your municipality’s planning guidance or contact staff before submitting if you are unsure.</AccordionContent></AccordionItem><AccordionItem value="standards"><AccordionTrigger>Document standards</AccordionTrigger><AccordionContent>Upload legible PDF or DWG files. Individual files may be up to 50 MB.</AccordionContent></AccordionItem><AccordionItem value="contact"><AccordionTrigger>Contact planning staff</AccordionTrigger><AccordionContent><a className="inline-flex items-center gap-1 text-primary underline" href="mailto:planning@example.ca">planning@example.ca <ExternalLink className="size-3" /></a></AccordionContent></AccordionItem></Accordion></SheetContent></Sheet>
        );
        }