import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="logo">
            <Link href="/">Video Agency</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Video Agency</footer>
      <style jsx>{`
        header {
          padding: 1rem 2rem;
          border-bottom: 1px solid #333;
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .logo a {
          font-weight: bold;
          font-size: 1.25rem;
        }
        .nav-links {
          list-style: none;
          display: flex;
          padding: 0;
          margin: 0;
        }
        .nav-links li + li {
          margin-left: 1rem;
        }
        @media (max-width: 600px) {
          .nav {
            flex-direction: column;
            align-items: flex-start;
          }
          .nav-links {
            flex-direction: column;
            width: 100%;
          }
          .nav-links li + li {
            margin-left: 0;
            margin-top: 0.5rem;
          }
        }
        main {
          min-height: calc(100vh - 160px);
        }
        footer {
          text-align: center;
          padding: 1rem 0;
          border-top: 1px solid #333;
        }
      `}</style>
    </>
  );
}

