import { Badge } from "./ui/badge";


import { CircleAlert, CircleCheck, CreditCard, FileEdit, Search, Send } from "lucide-react";

        export default function ApplicationStatusBadge({ status }: { status: string }) {
  const icons = { Draft: FileEdit, Submitted: Send, UnderReview: Search, ActionRequired: CircleAlert, Approved: CircleCheck, PaymentRequired: CreditCard };
  const labels = { Draft: "Draft", Submitted: "Submitted", UnderReview: "Under review", ActionRequired: "Action required", Approved: "Approved", PaymentRequired: "Payment required" };
  const Icon = icons[status as keyof typeof icons];
        return (
            <Badge variant="outline" className="inline-flex items-center gap-1.5 font-medium">{Icon && <Icon className="size-3.5" />}{labels[status as keyof typeof labels] ?? status}</Badge>
        );
        }