import { useState } from "react";
import { Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        {/* Check-in */}
        <div className="space-y-2">
          <Label className="font-playfair text-sm font-medium text-white drop-shadow-md">
            Ngày nhận phòng
          </Label>
          <div className="relative">
            <Input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="pl-10 font-playfair bg-white/95 border-white/50 shadow-lg backdrop-blur-sm"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          </div>
        </div>

        {/* Check-out */}
        <div className="space-y-2">
          <Label className="font-playfair text-sm font-medium text-white drop-shadow-md">
            Ngày trả phòng
          </Label>
          <div className="relative">
            <Input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="pl-10 font-playfair bg-white/95 border-white/50 shadow-lg backdrop-blur-sm"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          </div>
        </div>

        {/* Adults */}
        <div className="space-y-2">
          <Label className="font-playfair text-sm font-medium text-white drop-shadow-md">
            Người lớn
          </Label>
          <div className="relative">
            <Input
              type="number"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              min="1"
              max="10"
              className="pl-10 font-playfair bg-white/95 border-white/50 shadow-lg backdrop-blur-sm"
            />
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          </div>
        </div>

        {/* Children */}
        <div className="space-y-2">
          <Label className="font-playfair text-sm font-medium text-white drop-shadow-md">
            Trẻ em
          </Label>
          <div className="relative">
            <Input
              type="number"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              min="0"
              max="8"
              className="pl-10 font-playfair bg-white/95 border-white/50 shadow-lg backdrop-blur-sm"
            />
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          </div>
        </div>

        {/* Search Button */}
        <div>
          <Button 
            className="w-full font-playfair font-medium h-10 px-6 shadow-lg"
            variant="default"
          >
            <Search size={16} className="mr-2" />
            Tìm Phòng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;