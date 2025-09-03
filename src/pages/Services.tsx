import { Camera, Heart, TreePine, Coffee, Utensils, Waves, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import service images
import yogaSession from "@/assets/images/yoga.jpg";
import romanticDinner from "@/assets/images/romantic-dinner.jpg";
import photography from "@/assets/images/photography.jpg";
import coffeeCeremony from "@/assets/images/coffee-ceremony.jpg";
import breakfastBuffet from "@/assets/images/breakfast-buffet.jpg";
import restaurant from "@/assets/images/restaurent.jpg";
import swimmingPool from "@/assets/images/swimming-pool.jpg";
import ecoGarden from "@/assets/images/garden.jpg";

interface Service {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  highlights?: string[];
}


const Services = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const mainServices = [
    {
      icon: Camera,
      title: "Lưu giữ khoảnh khắc",
      description: "Đừng quên ghi lại những khoảnh khắc đáng nhớ tại Đà Lạt...",
      longDescription: "Nếu bạn muốn gửi tặng người thương, bạn thân hoặc ba mẹ...",
      image: photography,
      highlights: [
        "Nhiếp ảnh gia chuyên nghiệp",
        "Địa điểm chụp đa dạng",
        "Trang phục áo dài miễn phí",
        "Album ảnh cao cấp"
      ]
    },
    {
      icon: TreePine,
      title: "Yoga & Thiền",
      description: "Trải nghiệm kỳ nghỉ trân dưỡng năng lượng...",
      longDescription: "Trong không gian thiên nhiên trong lành, bạn sẽ học cách...",
      image: yogaSession,
      highlights: [
        "Giáo viên yoga chứng chỉ quốc tế",
        "Lớp học buổi sáng với view núi đồi",
        "Thiết bị yoga cao cấp",
        "Trà thảo mộc sau buổi tập"
      ]
    },
    {
      icon: Heart,
      title: "Tiệc lãng mạn",
      description: "Tổ chức những buổi tiệc hẹn hò, kỷ niệm đặc biệt...",
      longDescription: "Từ bữa tối lãng mạn cho hai người đến tiệc sinh nhật...",
      image: romanticDinner,
      highlights: [
        "Trang trí theo yêu cầu",
        "Menu cá nhân hóa",
        "Dịch vụ phục vụ riêng",
        "Không gian riêng tư tuyệt đối"
      ]
    },
    {
      icon: Coffee,
      title: "Tiệm Cafe & Trà",
      description: "Thưởng thức hương vị cafe Đà Lạt đặc biệt...",
      longDescription: "Tiệm cafe mở cửa cả ngày với đa dạng thức uống...",
      image: coffeeCeremony,
      highlights: [
        "Cafe Đà Lạt nguyên chất",
        "Trà hoa & thảo mộc địa phương",
        "Bánh ngọt tự làm hàng ngày",
        "Không gian vintage ấm cúng"
      ]
    }
  ];

  const otherServices = [
    { icon: Coffee, title: "Ăn sáng miễn phí", description: "Buffet sáng phong phú...", image: breakfastBuffet },
    { icon: Utensils, title: "Nhà hàng cao cấp", description: "Thực đơn đa dạng món Việt và món Âu", image: restaurant },
    { icon: Waves, title: "Hồ bơi riêng", description: "Hồ bơi ngoài trời với view núi đồi", image: swimmingPool },
    { icon: TreePine, title: "Vườn sinh thái", description: "Không gian xanh mát với hoa Đà Lạt", image: ecoGarden }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section 
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${photography})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="relative z-10 text-center text-white">
          <h1 className="font-dancing text-6xl md:text-7xl mb-4">Dịch vụ</h1>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`mb-32 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""} lg:flex items-center gap-16`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img src={service.image} alt={service.title} className="w-full h-[500px] object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="max-w-xl mx-auto">
                  <h2 className="font-dancing text-5xl text-primary mb-6">{service.title}</h2>
                  <p className="font-playfair text-lg text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button
                    className="font-playfair px-8 py-6 text-lg"
                    onClick={() => setActiveService(service)}
                  >
                    Xem chi tiết
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dancing text-5xl text-primary mb-4">Tiện ích khác</h2>
            <p className="font-playfair text-lg text-muted-foreground max-w-2xl mx-auto">
              Ngoài ra, Sương Mai Villa còn cung cấp nhiều tiện ích cao cấp khác...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherServices.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setActiveService(service)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Service Detail */}
      {activeService && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full relative shadow-2xl overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setActiveService(null)}
            >
              <X size={28} />
            </button>
            <img src={activeService.image} alt={activeService.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-dancing text-primary mb-4">{activeService.title}</h3>
              {activeService.longDescription ? (
                <p className="font-playfair text-muted-foreground mb-4">{activeService.longDescription}</p>
              ) : (
                <p className="font-playfair text-muted-foreground mb-4">{activeService.description}</p>
              )}
              {activeService.highlights && (
                <ul className="list-disc list-inside space-y-2 mb-6">
                  {activeService.highlights.map((h: string, i: number) => (
                    <li key={i} className="text-muted-foreground">{h}</li>
                  ))}
                </ul>
              )}
              <Button
                size="lg"
                className="font-playfair"
                onClick={() => {
                  setActiveService(null);
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Đăng ký trải nghiệm
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Services;
