import { useParams, useNavigate } from "react-router-dom";
import HeaderWithNavigation from "@/components/HeaderWithNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Bed, Maximize, Eye, ArrowLeft } from "lucide-react";
import villaInterior from "@/assets/images/interior.jpg";
import villaBedroom from "@/assets/images/bedroom.jpg";
import villaDining from "@/assets/images/dining.jpg";
import villaExterior from "@/assets/images/exterior.jpg";
import villaGarden from "@/assets/images/garden.jpg";
import villaView from "@/assets/images/view-homestay.jpg";

const Rooms = () => {
  const { roomType } = useParams();
  const navigate = useNavigate();
  
  const roomsData = {
    "standard-double": {
      name: "Standard Double",
      subtitle: "Phòng Đôi Tiêu Chuẩn",
      description: "Phòng đôi tinh tế với thiết kế tối giản, view ban công hướng đồi thông và vườn hoa hồng xanh mát. Không gian ấm cúng, thoải mái với đầy đủ tiện nghi hiện đại.",
      capacity: "2 người lớn",
      area: "25m²",
      bed: "1 giường đôi 1.8m",
      view: "View vườn và đồi thông",
      images: [villaInterior, villaBedroom, villaDining]
    },
    "deluxe-twin": {
      name: "Deluxe Twin",
      subtitle: "Phòng Đôi Cao Cấp",
      description: "Phòng rộng rãi dành cho gia đình, thiết kế vintage ấm cúng với không gian nghỉ ngơi thoải mái. Phòng được trang bị đầy đủ tiện nghi và có tầm nhìn tuyệt đẹp.",
      capacity: "4 người lớn",
      area: "35m²", 
      bed: "2 giường đôi 1.6m",
      view: "View thung lũng và núi đồi",
      images: [villaBedroom, villaExterior, villaGarden]
    },
    "senior-deluxe": {
      name: "Senior Deluxe Double",
      subtitle: "Phòng Cao Cấp Đặc Biệt",
      description: "Phòng cao cấp sang trọng với view tuyệt đẹp ra thung lũng, mang đến trải nghiệm đẳng cấp nhất. Thiết kế tinh tế, không gian rộng rãi với ban công riêng.",
      capacity: "2 người lớn + 1 trẻ em",
      area: "45m²",
      bed: "1 giường king size 2.0m",
      view: "View toàn cảnh thung lũng",
      images: [villaDining, villaView, villaExterior]
    }
  };

  const currentRoom = roomsData[roomType as keyof typeof roomsData] || roomsData["standard-double"];

  return (
    <div className="min-h-screen bg-background">
      <HeaderWithNavigation />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${currentRoom.images[0]})`
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="font-dancing text-5xl md:text-6xl mb-2">{currentRoom.name}</h1>
          <p className="font-playfair text-xl md:text-2xl text-white/90">{currentRoom.subtitle}</p>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={currentRoom.images[0]} 
                  alt={currentRoom.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {currentRoom.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${currentRoom.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Room Info */}
            <div className="space-y-8">
              {/* Back Navigation */}
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-0 h-auto font-playfair"
                onClick={() => navigate('/#rooms')}
              >
                <ArrowLeft className="w-4 h-4" />
                Quay lại xem các phòng khác
              </Button>
              
              <div>
                <h2 className="font-dancing text-4xl text-primary mb-4">{currentRoom.name}</h2>
                <div className="w-16 h-1 bg-vintage-terracotta mb-6"></div>
                <p className="font-playfair text-lg text-muted-foreground leading-relaxed">
                  {currentRoom.description}
                </p>
              </div>

              {/* Room Features */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-vintage-terracotta" />
                  <span className="font-playfair">{currentRoom.capacity}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Maximize className="w-5 h-5 text-vintage-terracotta" />
                  <span className="font-playfair">{currentRoom.area}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bed className="w-5 h-5 text-vintage-terracotta" />
                  <span className="font-playfair">{currentRoom.bed}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-vintage-terracotta" />
                  <span className="font-playfair">{currentRoom.view}</span>
                </div>
              </div>

              {/* Booking Button */}
              <div className="pt-6">
                <Button 
                  className="w-full font-playfair font-medium text-lg py-3"
                  onClick={() => navigate(`/booking/${roomType}`)}
                >
                  Đặt Phòng Ngay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;