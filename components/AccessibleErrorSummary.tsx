
import { CircleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
        export default function AccessibleErrorSummary({ errors }: { errors: string[] }) {
        return (
            <Alert variant="destructive" role="alert" aria-live="assertive"><CircleAlert className="size-4" /><AlertTitle>Please correct the following items</AlertTitle><AlertDescription><ul className="mt-2 list-disc space-y-1 pl-5">{errors.map(error => <li key={error}>{error}</li>)}</ul></AlertDescription></Alert>
        );
        }