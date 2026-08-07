
        import { CircleHelp, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
        export default function HelpResourcesDrawer({}) {
        return (
            return <Sheet><SheetTrigger asChild><Button className="fixed bottom-4 right-4 z-30 shadow-lg"><CircleHelp className="size-4" /> Help & resources</Button></SheetTrigger><SheetContent className="w-full sm:max-w-md"><SheetHeader><SheetTitle>Help & Resources</SheetTitle><SheetDescription>Planning guidance in plain language.</SheetDescription></SheetHeader><Accordion type="single" collapsible className="mt-6"><AccordionItem value="guidance"><AccordionTrigger>Ontario Planning Act guidance</AccordionTrigger><AccordionContent>Learn the basic steps and responsibilities for a planning application.</AccordionContent></AccordionItem><AccordionItem value="maps"><AccordionTrigger>Municipal zoning maps</AccordionTrigger><AccordionContent>Review current zoning and parcel information before applying.</AccordionContent></AccordionItem><AccordionItem value="contact"><AccordionTrigger>Planning department contact</AccordionTrigger><AccordionContent>Call 311 or email planning@example.ca for support.</AccordionContent></AccordionItem></Accordion><Button variant="outline" className="mt-6 w-full"><ExternalLink className="size-4" /> Open planning guide</Button></SheetContent></Sheet>;
        );
        }
