import BookingForm from "./BookingForm";
import heroImage from "@/assets/images/bg-1.webp";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${heroImage})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-20">
        <div className="text-center mb-12">
          <h1 className="font-dancing text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            Sương Mai Villa
          </h1>
          <p className="font-playfair text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Chào mừng bạn đến với thiên đường nghỉ dưỡng giữa lòng Đà Lạt. 
            Nơi sương mai hôn gió, thông xanh và những giấc mơ bình yên.
          </p>
        </div>
        
        {/* Booking Form */}
        <BookingForm />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;