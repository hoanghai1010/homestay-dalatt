import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import villaInterior from "@/assets/images/phong-1.webp";
import villaBedroom from "@/assets/images/phong-2.jpg";
import villaDining from "@/assets/images/phong-3.jpg";

const RoomsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const rooms = [
    {
      name: "Standard Double",
      description: "Phòng đôi tinh tế với thiết kế tối giản, view ban công hướng đồi thông và vườn hoa hồng xanh mát.",
      image: villaInterior,
      slug: "standard-double"
    },
    {
      name: "Deluxe Twin", 
      description: "Phòng rộng rãi dành cho gia đình, thiết kế vintage ấm cúng với không gian nghỉ ngơi thoải mái.",
      image: villaBedroom,
      slug: "deluxe-twin"
    },
    {
      name: "Senior Deluxe Double",
      description: "Phòng cao cấp sang trọng với view tuyệt đẹp ra thung lũng, mang đến trải nghiệm đẳng cấp nhất.",
      image: villaDining,
      slug: "senior-deluxe"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % rooms.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [rooms.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl text-primary mb-4">
            Phòng Nghỉ
          </h2>
          <div className="w-24 h-1 bg-vintage-terracotta mx-auto mb-6"></div>
          <p className="font-playfair text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá những phòng nghỉ được thiết kế tinh tế, mang đậm phong cách vintage và hiện đại
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[600px] overflow-hidden rounded-2xl">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100 z-30' 
                    : index === (currentSlide + 1) % rooms.length
                    ? 'opacity-60 scale-95 translate-x-8 z-20'
                    : index === (currentSlide - 1 + rooms.length) % rooms.length
                    ? 'opacity-60 scale-95 -translate-x-8 z-20'
                    : 'opacity-30 scale-90 z-10'
                }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${room.image})`
                    }}
                  />
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
                    <h3 className="font-dancing text-4xl md:text-5xl text-white mb-6 drop-shadow-lg">
                      {room.name}
                    </h3>
                    <p className="font-playfair text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed drop-shadow-md">
                      {room.description}
                    </p>
                    <Button 
                      className="font-playfair font-medium px-8 py-3 text-lg bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all"
                      variant="ghost"
                      onClick={() => navigate(`/rooms/${room.slug}`)}
                    >
                      Xem Chi Tiết
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex space-x-3">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;