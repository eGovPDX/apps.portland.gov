import type { Metadata } from "next";

import "../../../../packages/portland-component-library/src/styles/themes/pgov.css";
import "../../../../packages/portland-component-library/dist/component-library.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portland City Calendar",
  description: "View citywide events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pgov-theme-applied">
        <main>{children}</main>
      </body>
    </html>
  );
}
