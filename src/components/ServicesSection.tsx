import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import implantImage from "@/assets/service-implants.jpg";
import orthodonticsImage from "@/assets/service-orthodontics.jpg";
import aestheticImage from "@/assets/service-aesthetic.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "임플란트",
      description: "자연치아와 같은 기능과 심미성을 제공하는 최신 임플란트 시술",
      image: implantImage,
      features: ["3D 정밀 진단", "원데이 임플란트", "평생 보장제"],
      popular: true
    },
    {
      title: "교정치과",
      description: "투명교정, 설측교정 등 다양한 교정 방법으로 완벽한 치열 개선",
      image: orthodonticsImage,
      features: ["투명교정", "설측교정", "부분교정"],
      popular: false
    },
    {
      title: "심미치과",
      description: "라미네이트, 올세라믹 등으로 자연스럽고 아름다운 미소 완성",
      image: aestheticImage,
      features: ["라미네이트", "올세라믹", "미백치료"],
      popular: false
    },
    {
      title: "일반진료",
      description: "스케일링, 충치치료, 신경치료 등 기본적인 구강 관리",
      image: implantImage,
      features: ["정기검진", "충치치료", "잇몸치료"],
      popular: false
    },
    {
      title: "턱관절 치료",
      description: "턱관절 장애로 인한 통증과 불편함을 전문적으로 치료",
      image: orthodonticsImage,
      features: ["정밀진단", "비수술치료", "맞춤스플린트"],
      popular: false
    },
    {
      title: "구강외과",
      description: "사랑니 발치, 임플란트 식립 등 전문적인 구강외과 수술",
      image: aestheticImage,
      features: ["무통발치", "뼈이식", "상악동거상술"],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">OUR SERVICES</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            전문 진료 분야
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            다양한 구강 질환에 대한 체계적이고 전문적인 치료 서비스를 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 overflow-hidden">
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-secondary text-secondary-foreground">인기</Badge>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">주요 특징:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  자세히 보기
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            전체 진료과목 보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;