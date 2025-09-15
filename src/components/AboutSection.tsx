import { Heart, Mountain, Coffee, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const features = [
    {
      icon: Heart,
      title: "Tình yêu Đà Lạt",
      description: "Được sinh ra từ tình yêu sâu sắc với vẻ đẹp hoang sơ và thơ mộng của cao nguyên Langbiang"
    },
    {
      icon: Mountain,
      title: "View Đồi Thông", 
      description: "Tầm nhìn tuyệt đẹp ra những cánh đồi thông bát ngát và những đám mây bồng bềnh"
    },
    {
      icon: Coffee,
      title: "Không Gian Thư Giãn",
      description: "Thiết kế vintage ấm cúng kết hợp với tiện nghi hiện đại, tạo nên trải nghiệm hoàn hảo"
    }
  ];

  return (
    <section id="about" className="py-20 bg-vintage-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl text-primary mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-vintage-terracotta mx-auto mb-6"></div>
          <p className="font-playfair text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.description1')}
          </p>
          <p className="font-playfair text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            {t('about.description2')}
          </p>
        </div>

        <div className="relative mb-16">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center p-6">
                      <Card className="w-full max-w-md p-8 text-center bg-card shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div className="w-20 h-20 bg-vintage-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                          {feature.title}
                        </h3>
                        <p className="font-playfair text-muted-foreground leading-relaxed text-lg">
                          {feature.description}
                        </p>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/about')}
              className="group bg-white/10 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span className="font-playfair text-lg">{t('about.subtitle')}</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="font-dancing text-2xl text-primary mb-4">
            Năm 2024, chúng tôi may mắn đủ duyên để khởi nên ngôi nhà ước mơ...
          </p>
          <p className="font-playfair text-lg text-foreground italic">
            Mời bạn ghé thăm nhà nhé! ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;