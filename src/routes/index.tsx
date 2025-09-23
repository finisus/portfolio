import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="flex flex-col items-stretch justify-start pt-16 pb-16">
      <section className="mx-4 space-y-4 space-x-4 rounded-md border border-border p-2">
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>

        <Button
          onPress={() => toast.info("Normal button pressed.")}
          variant="default"
          size="sm"
        >
          Default
        </Button>

        <Button
          onPress={() => toast.error("Destructive button pressed.")}
          variant="destructive"
          size="sm"
        >
          Destructive
        </Button>

        <Button
          onPress={() => toast.success("Success button pressed.")}
          variant="secondary"
          size="sm"
        >
          Secondary
        </Button>

        <Button
          onPress={() => toast.success("Success button pressed.")}
          variant="outline"
          size="xs"
        >
          Outline
        </Button>

        <Button
          onPress={() => toast.success("Success button pressed.")}
          variant="outline"
          size="sm"
        >
          Outline
        </Button>

        <Button
          onPress={() => toast.success("Success button pressed.")}
          variant="outline"
          size="default"
        >
          Outline
        </Button>

        <Button
          onPress={() => toast.success("Success button pressed.")}
          variant="outline"
          size="lg"
        >
          Outline
        </Button>

        <Button variant="ghost" size="sm">
          Ghost
        </Button>

        <Button variant="link" size="sm">
          Link
        </Button>

        <div className="h-[4000px]"></div>
      </section>
    </div>
  );
}
