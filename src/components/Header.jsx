export default function Header() {
  return (
    <header className="w-full bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 py-7 flex items-center justify-between">
        <h1 className="text-[var(--color-secondary)]">Layout Generator</h1>

        <nav className="flex gap-4 text-[var(--color-secondary)]">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">Grid Generator</button>
          <button className="nav-btn">Flex Generator</button>
        </nav>
      </div>
    </header>
  );
}
