
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
              <span className="bg-nyuro-500 text-white rounded-md w-8 h-8 flex items-center justify-center">N</span>
              <span>Nyuro Strategies</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Revolutionizing financial trading with advanced AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nyuro-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nyuro-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nyuro-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nyuro-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-nyuro-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-nyuro-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-nyuro-500 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-nyuro-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-nyuro-500 transition-colors text-sm">
                  AI Trading Models
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-nyuro-500 transition-colors text-sm">
                  Predictive Analytics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-nyuro-500 transition-colors text-sm">
                  Customized Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">
                123 Finance Street, Suite 100
              </li>
              <li className="text-muted-foreground text-sm">
                New York, NY 10001
              </li>
              <li className="text-muted-foreground text-sm">
                contact@nyurostrategies.com
              </li>
              <li className="text-muted-foreground text-sm">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Nyuro Strategies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
