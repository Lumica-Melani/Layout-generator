import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

function Home() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Layout Generator</h1>

      <p className="text-lg opacity-80 max-w-xl mx-auto mb-16 text-center">
        Build CSS Grid and Flexbox layouts visually and get clean,
        copy-paste-ready code instantly.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Grid Generator</h3>
          <p className="opacity-75">Design 2D layouts with rows and columns.</p>
          <NavLink to="/grid" className="cta-link mt-7 xl:mt-2">
            Grid Generator
          </NavLink>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Flex Generator</h3>
          <p className="opacity-75">
            Build flexible 1D layouts with alignment control.
          </p>
          <NavLink to="/flex" className="cta-link mt-2">
            Flex Generator
          </NavLink>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-6">Tech Stack</h2>

        <ul className="flex flex-wrap gap-4 opacity-80">
          <li className="px-3 py-1 rounded-md bg-white/5">React</li>
          <li className="px-3 py-1 rounded-md bg-white/5">Tailwind CSS</li>
          <li className="px-3 py-1 rounded-md bg-white/5">JavaScript (ES6+)</li>
          <li className="px-3 py-1 rounded-md bg-white/5">Vite</li>
        </ul>
      </section>
    </section>
  );
}

export default Home;
