import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">스마일코리아 치과</h3>
            <p className="text-primary-foreground/80 text-sm">
              환자의 건강한 미소를 위한 전문 치과 병원
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@smilekorea.co.kr</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">빠른 메뉴</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block hover:text-secondary transition-colors">병원소개</a>
              <a href="#services" className="block hover:text-secondary transition-colors">진료안내</a>
              <a href="#staff" className="block hover:text-secondary transition-colors">의료진</a>
              <a href="#contact" className="block hover:text-secondary transition-colors">오시는길</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">주요 진료</h4>
            <div className="space-y-2 text-sm">
              <div className="hover:text-secondary transition-colors cursor-pointer">임플란트</div>
              <div className="hover:text-secondary transition-colors cursor-pointer">교정치과</div>
              <div className="hover:text-secondary transition-colors cursor-pointer">심미치과</div>
              <div className="hover:text-secondary transition-colors cursor-pointer">일반진료</div>
            </div>
          </div>

          {/* Hours & Location */}
          <div>
            <h4 className="font-semibold mb-4">진료시간</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <div>
                  <div>평일 09:00-18:00</div>
                  <div>토요일 09:00-15:00</div>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-3">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <div>서울시 강남구 테헤란로 123</div>
                  <div>ABC빌딩 5층</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <div>
            © 2024 스마일코리아 치과. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-secondary transition-colors">이용약관</a>
            <a href="#" className="hover:text-secondary transition-colors">의료광고심의</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;