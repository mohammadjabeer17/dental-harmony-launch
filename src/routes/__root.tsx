import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "dental-harmony" },
      { name: "description", content: "A modern, luxury dental website for \"Dental Harmony\" specializing in airway, bruxism, and TMJ disorders." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "dental-harmony" },
      { property: "og:description", content: "A modern, luxury dental website for \"Dental Harmony\" specializing in airway, bruxism, and TMJ disorders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "dental-harmony" },
      { name: "twitter:description", content: "A modern, luxury dental website for \"Dental Harmony\" specializing in airway, bruxism, and TMJ disorders." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/26f5475a-5e2e-49e9-a660-6055ce45c57d/id-preview-b717603a--ec540ce9-a3e4-4889-a248-29f0c786e6c9.lovable.app-1777698927001.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/26f5475a-5e2e-49e9-a660-6055ce45c57d/id-preview-b717603a--ec540ce9-a3e4-4889-a248-29f0c786e6c9.lovable.app-1777698927001.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
