import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:booking@suongmaivilla.com", label: "Email" }
  ];

  const quickLinks = [
    { title: "Trang Chủ", href: "#home" },
    { title: "Về Chúng Tôi", href: "#about" },
    { title: "Phòng Nghỉ", href: "#rooms" },
    { title: "Liên Hệ", href: "#contact" }
  ];

  return (
    <footer className="bg-vintage-forest text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h1 className="font-dancing text-3xl font-bold text-white">
                Sương Mai Villa
              </h1>
            </div>
            <p className="font-playfair text-white/80 leading-relaxed mb-6 max-w-md">
              Thiên đường nghỉ dưỡng giữa lòng Đà Lạt. Nơi sương mai hôn gió, 
              thông xanh và những giấc mơ bình yên cùng bạn.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Liên Kết</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-playfair text-white/80 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Thông Tin</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-white/60" />
                <p className="font-playfair text-sm text-white/80">
                  123 Đường Hoa Hồng, Phường 1<br />
                  Thành phố Đà Lạt, Lâm Đồng
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <p className="font-playfair text-sm text-white/80">
                  +84 263 123 4567
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/60" />
                <p className="font-playfair text-sm text-white/80">
                  booking@suongmaivilla.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="font-playfair text-white/60">
            © 2024 Sương Mai Villa. Tất cả quyền được bảo lưu. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;