import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import catCookie from "@/assets/cat-cookie.png";

const OFFER_URL =
  "https://track.revoffers.com/aff_c?offer_id=1195&aff_id=10776";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MeowBites | Cookies & Cat Treats" },
      {
        name: "description",
        content:
          "We use cookies (and biscuits). Accept to fetch the freshest cat-food deals for your feline friend.",
      },
      { property: "og:title", content: "MeowBites | Cookies & Cat Treats" },
      {
        property: "og:description",
        content:
          "We use cookies (and biscuits). Accept to fetch the freshest cat-food deals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [declined, setDeclined] = useState(false);

  const accept = () => {
    window.location.href = OFFER_URL;
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-10">
      {/* soft floating cookie blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-accent/50 blur-3xl" />

      <div className="relative w-full max-w-sm">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/10">
          <img
            src={catCookie}
            alt="A happy cat holding a cookie"
            className="mx-auto h-44 w-44 rounded-2xl object-cover"
          />

          {declined ? (
            <div className="mt-5 text-center">
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                No worries! 🐾
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Purrhaps another time. Your kitty is still welcome here.
              </p>
              <button
                onClick={() => setDeclined(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-border bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
              >
                Change my mind
              </button>
            </div>
          ) : (
            <div className="mt-5 text-center">
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                This site uses cookies 🍪
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                MeowBites uses cookies — and biscuits — to keep your cat
                purring and serve the freshest cat-food deals. Do you accept?
              </p>
              <div className="mt-5 grid gap-2.5">
                <button
                  onClick={accept}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Yes, I accept 🐱
                </button>
                <button
                  onClick={() => setDeclined(true)}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
                >
                  No thanks
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground/80">
          MeowBites · Crunchy treats for happy cats
        </p>
      </div>
    </div>
  );
}
