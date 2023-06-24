import Link from "next/link";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto min-h-screen max-w-3xl">
      <nav className="flex space-x-6 py-10">
        <Link href={"/"}>Home</Link>
      </nav>
      <article className="prose max-w-none">{children}</article>
    </main>
  );
}
