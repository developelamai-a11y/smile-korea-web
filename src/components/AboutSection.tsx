import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Trophy, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">ABOUT US</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              환자의 건강한 미소를 위한 약속
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              스마일코리아 치과는 2010년 개원 이래 최신 의료 기술과 따뜻한 마음으로 
              환자분들의 구강 건강을 책임져왔습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center shadow-soft">
                  <CardContent className="p-0">
                    <Heart className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">15,000+</div>
                    <div className="text-sm text-muted-foreground">치료 완료</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center shadow-soft">
                  <CardContent className="p-0">
                    <Star className="h-10 w-10 text-secondary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
                    <div className="text-sm text-muted-foreground">환자 만족도</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center shadow-soft">
                  <CardContent className="p-0">
                    <Trophy className="h-10 w-10 text-secondary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">의료진 경력</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center shadow-soft">
                  <CardContent className="p-0">
                    <Calendar className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">14년</div>
                    <div className="text-sm text-muted-foreground">병원 운영</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                왜 스마일코리아 치과를 선택해야 할까요?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">최신 의료 장비</h4>
                    <p className="text-muted-foreground">3D CT, 디지털 스캐너 등 첨단 장비로 정확한 진단과 치료</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">숙련된 전문의</h4>
                    <p className="text-muted-foreground">풍부한 임상 경험과 지속적인 연구로 검증된 실력</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">개인 맞춤 치료</h4>
                    <p className="text-muted-foreground">환자 개인의 상태와 요구에 맞는 최적의 치료 계획 수립</p>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient-primary hover:opacity-90" size="lg">
                병원 소개 더보기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;