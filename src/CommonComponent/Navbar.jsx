import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaBook } from "react-icons/fa6";


const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Author", href: "#author" },
  { label: "Chapters", href: "#toc" },
  { label: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToBuyNow = () => {
    document.getElementById('buynow').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm py-4 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" onClick={(e) => handleSmoothScroll(e, '#home')}>
          <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg"><FaBook /></span>
          </div>
          <span className="font-serif text-xl font-semibold text-gray-900">
            1 Crore
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium relative hover:after:w-full after:w-0 after:h-0.5 after:bg-purple-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              onClick={(e) => handleSmoothScroll(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Buy Now Button */}
        <div className="hidden md:block">
          <button onClick={scrollToBuyNow} className="bg-yellow-500 text-white px-6 py-2 rounded-2xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/50">
            Buy Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-600 hover:text-gray-900 py-2 font-medium"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-all duration-300 hover:opacity-60 hover:shadow-lg hover:shadow-yellow-400/50">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
