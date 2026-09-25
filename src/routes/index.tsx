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
      <div className="w-full max-w-[615px]">
        <div className="rounded-[2.5rem] border border-border bg-card p-10 shadow-xl shadow-primary/10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
              🐾 HappyPaws
            </span>
          </div>

          <h1 className="mt-5 text-center text-3xl font-bold tracking-tight text-foreground">
            This site uses cookies 🍪
          </h1>
          <p className="mt-3 text-center text-lg leading-relaxed text-muted-foreground">
            HappyPaws uses cookies to keep things running smoothly and to
            serve you the freshest cat-food deals. Do you accept?
          </p>

          <div className="mt-7 grid gap-3">
            <button
              onClick={redirect}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Yes, I accept
            </button>
            <button
              onClick={redirect}
              className="inline-flex items-center justify-center rounded-full border border-border bg-secondary px-6 py-3.5 text-base font-medium text-secondary-foreground transition-colors hover:bg-accent"
            >
              No thanks
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground/80">
          HappyPaws · Crunchy treats for happy cats
        </p>
      </div>
    </div>
  );
}
