import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CourseSummary({
  price,
  duration,
  outcomes,
}: {
  price: string;
  duration: string;
  outcomes: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>At a Glance</span>
          <Badge className="bg-primary text-primary-foreground border-primary">{price}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="text-sm text-muted-foreground">Duration</div>
          <div className="font-medium">{duration}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Outcomes</div>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

