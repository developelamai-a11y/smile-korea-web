import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-clinic-interior.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg">
            믿을 수 있는 전문 치과 진료
          </h1>
          <p className="text-xl md:text-3xl mb-12 opacity-95 drop-shadow-md font-medium">
            최신 장비와 숙련된 의료진으로 환자분의 건강한 미소를 지켜드립니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-10 py-4 h-auto font-bold shadow-strong">
              온라인 예약하기
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-xl px-10 py-4 h-auto font-semibold bg-white/10 backdrop-blur-sm">
              진료 안내 보기
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Shield className="h-8 w-8 mx-auto mb-2 text-white" />
              <div className="text-sm font-medium">안전한 진료</div>
            </Card>
            <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Award className="h-8 w-8 mx-auto mb-2 text-white" />
              <div className="text-sm font-medium">전문 의료진</div>
            </Card>
            <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Users className="h-8 w-8 mx-auto mb-2 text-white" />
              <div className="text-sm font-medium">환자 중심</div>
            </Card>
            <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Clock className="h-8 w-8 mx-auto mb-2 text-white" />
              <div className="text-sm font-medium">편리한 예약</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;