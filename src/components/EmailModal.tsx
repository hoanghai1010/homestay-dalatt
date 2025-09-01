import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Yêu cầu đặt phòng tại Sương Mai Villa",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:booking@suongmaivilla.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Tên: ${formData.name}\nEmail: ${formData.email}\nSố điện thoại: ${formData.phone}\n\nTin nhắn:\n${formData.message}`
    )}`;
    
    window.open(mailtoLink);
    
    toast({
      title: "Đã mở ứng dụng email",
      description: "Vui lòng hoàn tất việc gửi email trong ứng dụng email của bạn.",
    });
    
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-primary">
            Gửi Email Cho Chúng Tôi
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="font-playfair">Họ và tên *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="font-playfair"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-playfair">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="font-playfair"
                placeholder="example@email.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="font-playfair">Số điện thoại</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="font-playfair"
                placeholder="+84 123 456 789"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="font-playfair">Tiêu đề *</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="font-playfair"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="font-playfair">Nội dung tin nhắn *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="font-playfair min-h-[120px]"
              placeholder="Vui lòng mô tả yêu cầu của bạn..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button type="button" variant="outline" onClick={onClose} className="font-playfair">
              Hủy
            </Button>
            <Button type="submit" className="font-playfair">
              Gửi Email
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;