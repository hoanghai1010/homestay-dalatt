import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MapModal = ({ isOpen, onClose }: MapModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-primary">
            Vị trí Sương Mai Villa
          </DialogTitle>
        </DialogHeader>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.548627586514!2d108.43811557511746!3d11.936468588291829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171133aee0ad9eb%3A0x598a70ea616608f6!2zMSBUcuG6p24gSMawbmcgxJDhuqFvLCBQaMaw4budbmcgMywgxJDDoCBM4bqhdCwgTMOibSDEkOG7k25nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1756738816751!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sương Mai Villa Location"
          />
        </div>
        <div className="text-center mt-4">
          <p className="font-playfair text-sm text-muted-foreground">
            1 Trần Hưng Đạo, Phường 3, Thành phố Đà Lạt, Lâm Đồng
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapModal;