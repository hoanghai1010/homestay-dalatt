import { Camera, Heart, TreePine, Coffee, Utensils, Waves } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

// Import service images
import yogaSession from "@/assets/images/yoga.jpg";
import romanticDinner from "@/assets/images/romantic-dinner1.jpg";
import photography from "@/assets/images/photography.jpg";
import coffeeCeremony from "@/assets/images/coffee-ceremony.jpg";
import breakfastBuffet from "@/assets/images/breakfast-buffet.jpg";
import restaurant from "@/assets/images/restaurent.jpg";
import swimmingPool from "@/assets/images/swimming-pool.jpg";
import ecoGarden from "@/assets/images/garden.jpg";

const Services = () => {
  const { t } = useTranslation();

  const mainServices = [
    {
      icon: Camera,
      title: "Lưu giữ khoảnh khắc",
      description:
        "Đừng quên ghi lại những khoảnh khắc đáng nhớ và ý nghĩa tại Đà Lạt qua ống kính nhiếp ảnh chuyên nghiệp của Sương Mai Villa. Chúng tôi sẽ cùng bạn dạo chơi bên hồ sương, trong rừng thông reo, trên những dốc phố hoàng hôn và ngay chính tại ngôi nhà rực rỡ sắc hoa nằm bên sườn đồi này.",
      longDescription:
        "Nếu bạn muốn gửi tặng người thương, bạn thân hoặc ba mẹ những tấm hình đẹp nhất để ghi dấu kỷ niệm tại thành phố mộng mơ, hãy đăng ký cùng trải nghiệm chụp ảnh với các nhiếp ảnh gia chuyên nghiệp của chúng tôi. Chúng tôi cung cấp dịch vụ chụp ảnh cá nhân, cặp đôi, gia đình với nhiều concept khác nhau từ vintage, hiện đại đến truyền thống.",
      image: photography,
      highlights: [
        "Nhiếp ảnh gia chuyên nghiệp",
        "Địa điểm chụp đa dạng",
        "Trang phục áo dài miễn phí",
        "Album ảnh cao cấp",
      ],
    },
    {
      icon: TreePine,
      title: "Yoga & Thiền",
      description:
        "Trải nghiệm kỳ nghỉ trân dưỡng nâng lượng với lớp học yoga Sivananda có điểm tại Sương Mai Villa được tổ chức hàng tuần. Các bài tập luyện thư giãn giúp bạn tìm lại khí động tâm trí, cơ thể và hiểu sâu hơn về triết lý yoga cổ xưa.",
      longDescription:
        "Trong không gian thiên nhiên trong lành, bạn sẽ học cách buớc chậm, thở sâu, thả lỏng các giác quan, thiền định, tâm rưng, tìm hiểu về các thức chạy thuần địa phương để tìm về cội rễ một cách trọn vẹn nhất. Lớp học phù hợp cho mọi trình độ từ người mới bắt đầu đến nâng cao.",
      image: yogaSession,
      highlights: [
        "Giáo viên yoga chứng chỉ quốc tế",
        "Lớp học buổi sáng với view núi đồi",
        "Thiết bị yoga cao cấp",
        "Trà thảo mộc sau buổi tập",
      ],
    },
    {
      icon: Heart,
      title: "Tiệc lãng mạn",
      description:
        "Tổ chức những buổi tiệc hẹn hò, kỷ niệm đặc biệt trong không gian lãng mạn với ánh nến lung linh và view thung lũng Đà Lạt thơ mộng. Chúng tôi sẽ giúp bạn tạo nên những khoảnh khắc khó quên cho người thương yêu.",
      longDescription:
        "Từ bữa tối lãng mạn cho hai người đến tiệc sinh nhật, tiệc cầu hôn hay kỷ niệm ngày cưới, đội ngũ của chúng tôi sẽ chuẩn bị mọi thứ chu đáo nhất. Menu được thiết kế riêng theo yêu cầu với những món ăn tinh tế từ ẩm thực Việt Nam và quốc tế.",
      image: romanticDinner,
      highlights: [
        "Trang trí theo yêu cầu",
        "Menu cá nhân hóa",
        "Dịch vụ phục vụ riêng",
        "Không gian riêng tư tuyệt đối",
      ],
    },
    {
      icon: Coffee,
      title: "Tiệm Cafe & Trà",
      description:
        "Thưởng thức hương vị cafe Đà Lạt đặc biệt trong không gian ấm cúng với view nhìn ra vườn hoa. Chúng tôi phục vụ cafe rang xay nguyên chất và các loại trà thảo mộc địa phương.",
      longDescription:
        "Tiệm cafe của chúng tôi mở cửa cả ngày với đa dạng thức uống từ cafe truyền thống Việt Nam đến các loại trà hoa, trà thảo mộc Đà Lạt. Không gian được thiết kế theo phong cách vintage kết hợp hiện đại, là nơi lý tưởng để thư giãn và làm việc.",
      image: coffeeCeremony,
      highlights: [
        "Cafe Đà Lạt nguyên chất",
        "Trà hoa & thảo mộc địa phương",
        "Bánh ngọt tự làm hàng ngày",
        "Không gian vintage ấm cúng",
      ],
    },
  ];

  const otherServices = [
    {
      icon: Coffee,
      title: "Ăn sáng miễn phí",
      description: "Buffet sáng phong phú với đặc sản địa phương",
      image: breakfastBuffet,
    },
    {
      icon: Utensils,
      title: "Nhà hàng cao cấp",
      description: "Thực đơn đa dạng món Việt và món Âu",
      image: restaurant,
    },
    {
      icon: Waves,
      title: "Hồ bơi riêng",
      description: "Hồ bơi ngoài trời với view núi đồi",
      image: swimmingPool,
    },
    {
      icon: TreePine,
      title: "Vườn sinh thái",
      description: "Không gian xanh mát với hoa Đà Lạt",
      image: ecoGarden,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Background Image */}
      <section
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${photography})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 text-center text-white">
          <h1 className="font-dancing text-6xl md:text-7xl mb-4">
            {t("nav.services")}
          </h1>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`mb-32 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } lg:flex items-center gap-16`}
            >
              {/* Image */}
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="max-w-xl mx-auto">
                  <h2 className="font-dancing text-5xl text-primary mb-6">
                    {service.title}
                  </h2>
                  <p className="font-playfair text-lg text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed mb-8 italic">
                    {service.longDescription}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-muted-foreground">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="font-playfair px-8 py-6 text-lg"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Đăng ký trải nghiệm
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dancing text-5xl text-primary mb-4">
              Tiện ích khác
            </h2>
            <p className="font-playfair text-lg text-muted-foreground max-w-2xl mx-auto">
              Ngoài ra, Sương Mai Villa còn cung cấp nhiều tiện ích cao cấp khác
              để kỳ nghỉ của bạn thêm hoàn hảo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherServices.map((service, index) => (
              <div key={index} className="group cursor-pointer">
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
                    <p className="text-white/80 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-dancing text-4xl text-primary mb-6">
            Đăng ký trải nghiệm ngay hôm nay
          </h2>
          <p className="font-playfair text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn và đặt lịch cho các dịch vụ đặc
            biệt tại Sương Mai Villa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-playfair">
              Gọi ngay: 0263 123 456
            </Button>
            <Button size="lg" variant="outline" className="font-playfair">
              Gửi yêu cầu tư vấn
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
