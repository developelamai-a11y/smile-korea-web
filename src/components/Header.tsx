import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border shadow-soft">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>평일 09:00-18:00 | 토요일 09:00-15:00</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>서울시 강남구 테헤란로 123</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            스마일코리아 치과
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">홈</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">병원소개</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">진료안내</a>
            <a href="#staff" className="text-foreground hover:text-primary transition-colors">의료진</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">오시는길</a>
          </nav>

          <Button variant="default" className="bg-gradient-primary hover:opacity-90">
            온라인 예약
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;