import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { title: "Trang Chủ", action: () => navigate('/') },
    { title: "Về Chúng Tôi", action: () => navigate('/about') },
    { title: "Phòng Nghỉ", action: () => {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('rooms');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }},
    { title: "Dịch Vụ", action: () => navigate('/services') },
    { title: "Liên Hệ", action: () => {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }},
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.action) {
      item.action();
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

          {/* Book Now Button */}
          <Button 
            className="hidden md:flex font-playfair font-medium px-6"
            variant="default"
            onClick={() => navigate('/')}
          >
            Đặt Phòng Ngay
          </Button>

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
              <Button 
                className="mt-4 font-playfair font-medium"
                variant="default"
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
              >
                Đặt Phòng Ngay
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;