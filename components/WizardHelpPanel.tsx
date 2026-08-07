import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";


import { CircleHelp, ExternalLink } from "lucide-react";

        export default function WizardHelpPanel({ resources = ["Ontario Planning Act guidance", "Municipal zoning maps", "Contact the planning department"] }: { resources?: string[] }) {
        return (
            <Sheet><SheetTrigger asChild><Button className="fixed bottom-4 right-4 z-40 shadow-lg"><CircleHelp className="mr-2 size-4" /> Help & Resources</Button></SheetTrigger><SheetContent className="w-full overflow-y-auto sm:max-w-md"><SheetHeader><SheetTitle>Help & Resources</SheetTitle><SheetDescription>Guidance for completing your application.</SheetDescription></SheetHeader><Accordion type="single" collapsible className="mt-6">{resources.map((resource, index) => <AccordionItem value={`item-${index}`} key={resource}><AccordionTrigger>{resource}</AccordionTrigger><AccordionContent><p className="mb-3 text-muted-foreground">Read plain-language guidance and contact municipal planning staff if you need assistance.</p><Button variant="outline" size="sm">View resource <ExternalLink className="ml-2 size-4" /></Button></AccordionContent></AccordionItem>)}</Accordion></SheetContent></Sheet>
        );
        }