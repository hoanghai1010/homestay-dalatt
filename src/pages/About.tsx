import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import HeaderWithNavigation from "@/components/HeaderWithNavigation";
import Footer from "@/components/Footer";

// Import gallery images
import villaInterior1 from "@/assets/images/view-1.jpg";
import villaView1 from "@/assets/images/view-2.jpg";
import villaBedroom1 from "@/assets/images/view-3.jpg";
import villaGarden1 from "@/assets/images/view-4.jpg";
import villaDining1 from "@/assets/images/view-5.jpg";
import villaExterior1 from "@/assets/images/view-6.webp";

const About = () => {
  const navigate = useNavigate();

  const galleryImages = [
    {
      src: villaInterior1,
      alt: "Không gian phòng khách ấm cúng với view đồi thông",
      className: "col-span-2 row-span-1"
    },
    {
      src: villaView1,
      alt: "Tầm nhìn tuyệt đẹp ra rừng thông Đà Lạt",
      className: "col-span-1 row-span-2"
    },
    {
      src: villaBedroom1,
      alt: "Phòng ngủ vintage với thiết kế ấm áp",
      className: "col-span-1 row-span-1"
    },
    {
      src: villaGarden1,
      alt: "Khu vườn đầy hoa của villa",
      className: "col-span-2 row-span-1"
    },
    {
      src: villaDining1,
      alt: "Khu vực ăn uống với cà phê Đà Lạt",
      className: "col-span-1 row-span-1"
    },
    {
      src: villaExterior1,
      alt: "Mặt tiền villa giữa thiên nhiên Đà Lạt",
      className: "col-span-1 row-span-2"
    }
  ];

  return (
    <div className="min-h-screen bg-vintage-cream/30">
      <HeaderWithNavigation />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-dancing text-6xl md:text-7xl text-primary mb-6">
            Vẻ Đẹp Sương Mai Villa
          </h1>
          <div className="w-32 h-1 bg-vintage-terracotta mx-auto mb-8"></div>
          <p className="font-playfair text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nằm giữa lòng cao nguyên Langbiang thơ mộng, Sương Mai Villa là nơi giao thoa 
            hoàn hảo giữa vẻ đẹp cổ kính và sự tiện nghi hiện đại. Từng góc nhỏ của villa 
            đều mang trong mình câu chuyện về tình yêu Đà Lạt - thành phố ngàn hoa.
          </p>
        </div>

        {/* Description Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 bg-card shadow-lg border-0 hover:shadow-xl transition-all duration-300">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
              Kiến Trúc Độc Đáo
            </h3>
            <p className="font-playfair text-lg text-muted-foreground leading-relaxed">
              Villa được thiết kế theo phong cách vintage Pháp kết hợp với nét đẹp truyền thống 
              Việt Nam. Từng chi tiết đều được chăm chút tỉ mỉ, từ những ô cửa sổ gỗ cổ điển 
              đến ban công sắt rèn tinh xảo, tất cả đều hướng về tầm nhìn tuyệt đẹp ra những 
              cánh đồng thông bạt ngàn.
            </p>
          </Card>

          <Card className="p-8 bg-card shadow-lg border-0 hover:shadow-xl transition-all duration-300">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
              Không Gian Thư Giãn
            </h3>
            <p className="font-playfair text-lg text-muted-foreground leading-relaxed">
              Mỗi phòng trong villa đều được bố trí với đồ nội thất vintage ấm cúng, 
              tạo nên một không gian sống đầy cảm hứng. Ánh sáng tự nhiên tràn ngập qua 
              những ô cửa lớn, mang đến cảm giác gần gũi với thiên nhiên Đà Lạt trong lành.
            </p>
          </Card>

          <Card className="p-8 bg-card shadow-lg border-0 hover:shadow-xl transition-all duration-300">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
              Vườn Hoa Thơ Mộng
            </h3>
            <p className="font-playfair text-lg text-muted-foreground leading-relaxed">
              Khu vườn của villa như một bức tranh thiên nhiên với đủ loại hoa đặc trưng 
              của Đà Lạt. Từ hoa dã quỳ vàng rực đến hoa lavender tím biếc, tạo nên một 
              khung cảnh lãng mạn và thơ mộng quanh năm.
            </p>
          </Card>

          <Card className="p-8 bg-card shadow-lg border-0 hover:shadow-xl transition-all duration-300">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
              Trải Nghiệm Đáng Nhớ
            </h3>
            <p className="font-playfair text-lg text-muted-foreground leading-relaxed">
              Thức dậy với tiếng chim hót, ngắm sương mai lấp ló qua những tán thông, 
              thưởng thức tách cà phê Đà Lạt thơm ngon trong không khí trong lành... 
              Đó chính là những trải nghiệm khó quên mà Sương Mai Villa mang đến.
            </p>
          </Card>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="font-dancing text-5xl text-center text-primary mb-12">
            Thư Viện Ảnh
          </h2>
          
          {/* Scattered Grid Gallery */}
          <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`${image.className} group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500`}
                style={{
                  transform: `rotate(${Math.random() * 6 - 3}deg)`,
                  transformOrigin: 'center center'
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-0"
                  style={{
                    filter: 'sepia(20%) saturate(120%) brightness(105%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-forest/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-playfair text-sm leading-tight">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-vintage-sage/20 to-vintage-terracotta/20 rounded-2xl p-12">
            <h3 className="font-dancing text-4xl text-primary mb-6">
              Hãy Đến Và Cảm Nhận
            </h3>
            <p className="font-playfair text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Mỗi khoảnh khắc tại Sương Mai Villa đều là một bài thơ về Đà Lạt. 
              Chúng tôi mong được chào đón bạn đến với ngôi nhà mơ ước này.
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-playfair text-lg px-8 py-3"
            >
              Đặt Phòng Ngay
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;