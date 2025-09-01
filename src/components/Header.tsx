import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Trang Chủ", href: "#home" },
    { title: "Về Chúng Tôi", href: "#about" },
    { title: "Phòng Nghỉ", href: "#rooms" },
    { title: "Dịch Vụ", href: "#services" },
    { title: "Liên Hệ", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-card/70 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-dancing text-3xl font-bold text-primary">
              Sương Mai Villa
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="font-playfair text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Book Now Button */}
          <Button 
            className="hidden md:flex font-playfair font-medium px-6"
            variant="default"
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
                <a
                  key={item.title}
                  href={item.href}
                  className="font-playfair text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <Button 
                className="mt-4 font-playfair font-medium"
                variant="default"
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