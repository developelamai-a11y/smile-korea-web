import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Star } from "lucide-react";
import dentist1 from "@/assets/dentist-profile-1.jpg";
import dentist2 from "@/assets/dentist-profile-2.jpg";

const StaffSection = () => {
  const staff = [
    {
      name: "김진우 원장",
      title: "치과보철과 전문의",
      image: dentist1,
      specialties: ["임플란트", "심미보철", "턱관절치료"],
      education: "서울대학교 치과대학",
      experience: "15년",
      certifications: ["치과보철과 전문의", "구강악안면외과 수료"]
    },
    {
      name: "박민정 부원장",
      title: "치과교정과 전문의",
      image: dentist2,
      specialties: ["투명교정", "설측교정", "소아교정"],
      education: "연세대학교 치과대학",
      experience: "12년",
      certifications: ["치과교정과 전문의", "인비절라인 공인의"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">MEDICAL TEAM</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            전문 의료진 소개
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            풍부한 임상 경험과 전문성을 갖춘 의료진이 최상의 치료 서비스를 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {staff.map((doctor, index) => (
            <Card key={index} className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                <CardContent className="md:w-2/3 p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{doctor.name}</h3>
                    <p className="text-primary font-medium">{doctor.title}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium text-foreground">전문 분야</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((specialty, specIndex) => (
                          <Badge key={specIndex} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">학력</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{doctor.education}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium text-foreground">자격 및 경력</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">임상경력 {doctor.experience}</p>
                        {doctor.certifications.map((cert, certIndex) => (
                          <p key={certIndex} className="text-sm text-muted-foreground">• {cert}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-6 group">
                    <span className="group-hover:text-primary transition-colors">프로필 자세히 보기</span>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            전체 의료진 보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;