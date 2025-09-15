import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    { title: t('nav.home'), action: () => navigate('/') },
    { title: t('nav.about'), action: () => navigate('/about') },
    { title: t('nav.rooms'), href: "#rooms" },
    { title: t('nav.services'), action: () => navigate('/services') },
    { title: t('nav.contact'), href: "#contact" },
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      // If we're not on home page, navigate to home first then scroll
      if (window.location.pathname !== '/') {
        // Use state to remember which section to scroll to
        navigate('/', { state: { scrollTo: item.href } });
      } else {
        // If already on home page, just scroll
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-card/70 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className="font-dancing text-3xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors"
              onClick={() => navigate('/')}
            >
              Sương Mai Villa
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => handleMenuClick(item)}
                className="font-playfair text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.title}
              </button>
            ))}
          </nav>

          {/* Language Switcher and Book Now Button */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button 
              className="font-playfair font-medium px-6"
              variant="default"
              onClick={() => navigate('/')}
            >
              {t('nav.bookNow')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleMenuClick(item)}
                  className="font-playfair text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1 text-left"
                >
                  {item.title}
                </button>
              ))}
              <LanguageSwitcher />
              <Button 
                className="mt-4 font-playfair font-medium"
                variant="default"
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
              >
                {t('nav.bookNow')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;