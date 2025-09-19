import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-nude shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="font-fancy text-2xl text-wood">Vanishree</h1>
        <ul className="flex space-x-6 font-heading text-coffee">
          <li><Link to="/" className="hover:text-honey transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-honey transition">About</Link></li>
          <li><Link to="/projects" className="hover:text-honey transition">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-honey transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
