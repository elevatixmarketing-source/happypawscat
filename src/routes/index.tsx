import { createFileRoute } from "@tanstack/react-router";

const OFFER_URL =
  "https://track.revoffers.com/aff_c?offer_id=1195&aff_id=10776";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HappyPaws | Cookies & Cat Treats" },
      {
        name: "description",
        content:
          "HappyPaws uses cookies to serve the freshest cat-food deals for your feline friend.",
      },
      { property: "og:title", content: "HappyPaws | Cookies & Cat Treats" },
      {
        property: "og:description",
        content:
          "HappyPaws uses cookies to serve the freshest cat-food deals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const redirect = () => {
    window.location.href = OFFER_URL;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              🐾 HappyPaws
            </span>
          </div>

          <h1 className="mt-4 text-center text-xl font-bold tracking-tight text-foreground">
            This site uses cookies 🍪
          </h1>
          <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
            HappyPaws uses cookies to keep things running smoothly and to
            serve you the freshest cat-food deals. Do you accept?
          </p>

          <div className="mt-5 grid gap-2.5">
            <button
              onClick={redirect}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Yes, I accept
            </button>
            <button
              onClick={redirect}
              className="inline-flex items-center justify-center rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
            >
              No thanks
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground/80">
          HappyPaws · Crunchy treats for happy cats
        </p>
      </div>
    </div>
  );
}
