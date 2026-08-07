
        
import { BadgeCheck, CircleCheck, CircleX, CreditCard, PencilLine, ScanSearch, Send, TriangleAlert } from "lucide-react";
import { Badge } from "./ui/badge";
        export default function StatusBadge({ status }: { status: string }) {
  const icons = { Draft: PencilLine, Submitted: Send, "Under Review": ScanSearch, "Action Required": TriangleAlert, Approved: CircleCheck, "Payment Required": CreditCard, Paid: BadgeCheck, "Sync Failed": CircleX };
  const Icon = icons[status as keyof typeof icons] || ScanSearch;
        return (
            <Badge variant={status === "Sync Failed" ? "destructive" : status === "Action Required" ? "secondary" : "outline"} className="inline-flex gap-1.5"><Icon className="size-3.5" aria-hidden="true" />{status}</Badge>
        );
        }