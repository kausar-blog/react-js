// Navbar Component
export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <ul className="container mx-auto flex justify-between items-center p-4 text-lg font-medium">
        <li>
          <a
            href="#home"
            className="text-red-500 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#services"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

// Hero Component
export function Hero() {
  return (
    <section className="container mx-auto text-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Kausar's Website</h1>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit
        quam eius adipisci repudiandae consequuntur, repellendus voluptatibus
        magnam modi recusandae!
      </p>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-10">
      <p className="text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Kausar Programmer. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
