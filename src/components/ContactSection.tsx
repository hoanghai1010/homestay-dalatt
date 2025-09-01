import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MapModal from "./MapModal";
import EmailModal from "./EmailModal";

const ContactSection = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa Chỉ",
      content: "1 Trần Hưng Đạo, Phường 3, Thành phố Đà Lạt, Lâm Đồng",
      action: "Xem bản đồ",
      onClick: () => setIsMapOpen(true)
    },
    {
      icon: Phone, 
      title: "Điện Thoại",
      content: "+84 263 123 4567",
      action: "Gọi ngay",
      onClick: undefined
    },
    {
      icon: Mail,
      title: "Email",
      content: "booking@suongmaivilla.com",
      action: "Gửi email",
      onClick: () => setIsEmailOpen(true)
    },
    {
      icon: Clock,
      title: "Giờ Làm Việc", 
      content: "24/7 - Luôn sẵn sàng phục vụ",
      action: "Liên hệ ngay",
      onClick: undefined
    }
  ];

  return (
    <section id="contact" className="py-20 bg-vintage-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl text-primary mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-vintage-terracotta mx-auto mb-6"></div>
          <p className="font-playfair text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn tạo nên những kỷ niệm đẹp tại Sương Mai Villa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="p-6 text-center bg-card shadow-lg border-0 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="font-playfair text-sm text-muted-foreground mb-4 leading-relaxed">
                  {info.content}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="font-playfair font-medium"
                  onClick={info.onClick || (() => {})}
                >
                  {info.action}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-vintage-sage/20 to-vintage-cream rounded-2xl p-12">
          <h3 className="font-dancing text-4xl text-primary mb-4">
            Sẵn Sàng Cho Chuyến Nghỉ Dưỡng?
          </h3>
          <p className="font-playfair text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi tạo nên những kỷ niệm tuyệt vời cho bạn tại thiên đường Đà Lạt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-playfair font-medium px-8">
              Đặt Phòng Ngay
            </Button>
            <Button size="lg" variant="outline" className="font-playfair font-medium px-8">
              Gọi Tư Vấn
            </Button>
          </div>
        </div>
      </div>
      
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <EmailModal isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />
    </section>
  );
};

export default ContactSection;