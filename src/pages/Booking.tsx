import { useParams, useNavigate } from "react-router-dom";
import HeaderWithNavigation from "@/components/HeaderWithNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Users, Bed, Maximize, Eye, ArrowLeft, Calendar, MapPin, Shield, Wifi, Coffee, Car, Bath, Star, Check } from "lucide-react";
import villaInterior from "@/assets/images/interior.jpg";
import villaBedroom from "@/assets/images/bedroom.jpg";
import villaDining from "@/assets/images/dining.jpg";
import villaExterior from "@/assets/images/exterior.jpg";
import villaGarden from "@/assets/images/garden.jpg";
import villaView from "@/assets/images/view-homestay.jpg";

const Booking = () => {
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
      price: "2.100.000",
      originalPrice: "2.500.000",
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
      price: "2.700.000",
      originalPrice: "3.200.000",
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
      price: "3.500.000",
      originalPrice: "4.000.000",
      images: [villaDining, villaView, villaExterior]
    }
  };

  const currentRoom = roomsData[roomType as keyof typeof roomsData] || roomsData["standard-double"];

  const amenities = [
    { icon: Wifi, label: "WiFi miễn phí" },
    { icon: Coffee, label: "Minibar" },
    { icon: Bath, label: "Phòng tắm riêng" },
    { icon: Car, label: "Bãi đỗ xe miễn phí" }
  ];

  const otherRooms = Object.entries(roomsData).filter(([key]) => key !== roomType).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <HeaderWithNavigation />
      
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Back Navigation */}
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-0 h-auto font-playfair mb-8"
            onClick={() => navigate(`/rooms/${roomType}`)}
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại thông tin phòng
          </Button>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="space-y-6">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={currentRoom.images[0]} 
                    alt={currentRoom.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {currentRoom.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={image} 
                        alt={`${currentRoom.name} ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Description */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h1 className="font-dancing text-4xl text-primary">{currentRoom.name}</h1>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-vintage-terracotta text-vintage-terracotta" />
                      ))}
                    </div>
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-vintage-terracotta mb-6"></div>
                  <p className="font-playfair text-lg text-muted-foreground leading-relaxed mb-8">
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

                {/* Amenities */}
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">Tiện Nghi Phòng</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <amenity.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-playfair text-sm">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Policies */}
                <div className="bg-muted/30 rounded-2xl p-6">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Chính Sách Phòng
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="font-playfair text-sm">Check-in: 14:00 - 22:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="font-playfair text-sm">Check-out: 08:00 - 12:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="font-playfair text-sm">Hủy miễn phí trước 24 giờ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="font-playfair text-sm">Bao gồm bữa sáng cho 2 người</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-card via-card to-muted/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between">
                    <span className="font-dancing text-2xl text-primary">Đặt Phòng</span>
                    <div className="text-right">
                      <div className="font-dancing text-3xl text-vintage-terracotta font-bold">
                        {currentRoom.price}đ
                      </div>
                      <div className="text-sm text-muted-foreground line-through">
                        {currentRoom.originalPrice}đ
                      </div>
                      <div className="text-xs text-muted-foreground font-playfair">/ đêm</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Date Inputs */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-playfair text-sm font-medium">Check-in</Label>
                      <div className="relative">
                        <Input 
                          type="date" 
                          className="font-playfair pl-10" 
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <Label className="font-playfair text-sm font-medium">Check-out</Label>
                      <div className="relative">
                        <Input 
                          type="date" 
                          className="font-playfair pl-10" 
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Guest Selection */}
                  <div>
                    <Label className="font-playfair text-sm font-medium">Số khách</Label>
                    <Select defaultValue="2">
                      <SelectTrigger className="font-playfair">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 khách</SelectItem>
                        <SelectItem value="2">2 khách</SelectItem>
                        <SelectItem value="3">3 khách</SelectItem>
                        <SelectItem value="4">4 khách</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between font-playfair">
                      <span>Giá phòng × 1 đêm</span>
                      <span>{currentRoom.originalPrice}đ</span>
                    </div>
                    <div className="flex justify-between font-playfair text-green-600">
                      <span>Giảm giá</span>
                      <span>-{(parseInt(currentRoom.originalPrice.replace(/\./g, '')) - parseInt(currentRoom.price.replace(/\./g, ''))).toLocaleString()}đ</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-playfair font-bold text-lg">
                      <span>Tổng cộng</span>
                      <span className="text-vintage-terracotta">{currentRoom.price}đ</span>
                    </div>
                  </div>

                  <Button className="w-full font-playfair font-medium text-lg py-6 bg-gradient-to-r from-primary to-vintage-terracotta hover:from-primary/90 hover:to-vintage-terracotta/90 shadow-lg">
                    Xác Nhận Đặt Phòng
                  </Button>

                  <div className="text-center text-xs text-muted-foreground font-playfair">
                    <Shield className="w-4 h-4 inline mr-1" />
                    Thanh toán an toàn và bảo mật
                  </div>
                </CardContent>
              </Card>

              {/* Other Rooms */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="font-dancing text-xl text-primary">Phòng Khác</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {otherRooms.map(([key, room]) => (
                    <div 
                      key={key} 
                      className="flex gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer"
                      onClick={() => navigate(`/booking/${key}`)}
                    >
                      <div className="w-20 h-16 rounded-lg overflow-hidden">
                        <img 
                          src={room.images[0]} 
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-playfair font-medium text-sm mb-1">{room.name}</h4>
                        <div className="text-vintage-terracotta font-bold text-sm">
                          {room.price}đ/đêm
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="font-dancing text-xl text-primary flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Vị Trí
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-playfair text-sm text-muted-foreground">
                    Sương Mai Villa nằm tại vị trí đắc địa với view tuyệt đẹp ra thung lũng và núi đồi xanh mướt.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
