import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  isActive ? "nav-link nav-link-active" : "nav-link";

export default function Header() {
  return (
    <header className="w-full bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-7 flex items-center justify-between">
        <h1 className="text-[var(--color-secondary)]">G-FLex</h1>

        <nav className="flex gap-4 text-[var(--color-secondary)]">
          <NavLink to={"/"} className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to={"/grid"} className={navLinkClass}>
            Grid Generator
          </NavLink>
          <NavLink to={"/flex"} className={navLinkClass}>
            Flex Generator
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
