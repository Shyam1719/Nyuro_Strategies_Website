
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-foreground flex items-center gap-2"
            aria-label="Nyuro Strategies"
          >
            <span className="bg-nyuro-500 text-white rounded-md w-8 h-8 flex items-center justify-center">N</span>
            <span className="hidden sm:inline">Nyuro Strategies Ltd</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors relative group',
                  location.pathname === item.href 
                    ? 'text-nyuro-600' 
                    : 'text-foreground/80 hover:text-foreground'
                )}
              >
                {item.label}
                <span className={cn(
                  'absolute left-0 right-0 bottom-[-4px] h-[2px] bg-nyuro-500 transform origin-left transition-transform duration-300',
                  location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                )} />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link 
            to="/services" 
            className="hidden md:inline-flex bg-nyuro-500 hover:bg-nyuro-600 text-white rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 shadow-sm hover:shadow"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground focus:outline-none"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[400px] border-b' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'py-2 px-4 text-base font-medium rounded-md transition-colors',
                  location.pathname === item.href
                    ? 'bg-nyuro-50 text-nyuro-600'
                    : 'text-foreground hover:bg-gray-50'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/services"
              className="bg-nyuro-500 hover:bg-nyuro-600 text-white rounded-md px-4 py-2 text-base font-medium transition-colors mt-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
