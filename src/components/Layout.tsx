import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>
        <nav>
          <ul style={{display:"flex", gap:"1rem", listStyle:"none", padding:0, margin:0}}>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
