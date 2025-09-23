import AsciiArt from "@/components/ascii-art";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="flex flex-col items-stretch justify-start pt-10 pb-10">
      <section
        aria-label="Hero"
        className="relative h-[calc(100svh-40px)] overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <AsciiArt />
        </div>
        <h1 className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 font-serif text-8xl italic max-md:text-7xl">
          Finisus
        </h1>
      </section>

      <section className="mx-4 space-y-4 space-x-4 rounded border border-border p-2">
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

        <div className="h-[1000px]"></div>
      </section>
    </div>
  );
}
