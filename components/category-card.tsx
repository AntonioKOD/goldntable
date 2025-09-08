import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CategoryCard({
  title,
  slug,
  price,
  description,
}: {
  title: string;
  slug: string;
  price: string;
  description: string;
}) {
  return (
    <Link href={`/courses/${slug}`}>
      <Card className="h-full transition-transform hover:-translate-y-0.5">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{title}</span>
            <Badge className="bg-primary/10 text-primary border-primary/20">{price}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

