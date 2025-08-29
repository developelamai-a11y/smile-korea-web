import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "김○○님",
      age: "40대",
      treatment: "임플란트",
      rating: 5,
      content: "임플란트 수술이 처음이라 걱정이 많았는데, 원장님께서 자세히 설명해주시고 통증도 거의 없어서 만족스러웠습니다. 자연치아와 같은 느낌이에요!",
      date: "2024.02"
    },
    {
      name: "박○○님",
      age: "30대",
      treatment: "투명교정",
      rating: 5,
      content: "직장생활 때문에 투명교정을 선택했는데, 정말 눈에 띄지 않아서 좋았어요. 1년 반 만에 예쁜 치아를 갖게 되어 너무 행복합니다.",
      date: "2024.01"
    },
    {
      name: "이○○님",
      age: "20대",
      treatment: "라미네이트",
      rating: 5,
      content: "앞니 벌어진 것이 콤플렉스였는데 라미네이트로 깔끔하게 해결됐어요. 자연스럽게 나온 결과에 정말 만족하고 주변에도 추천하고 있습니다.",
      date: "2023.12"
    },
    {
      name: "정○○님",
      age: "50대",
      treatment: "잇몸치료",
      rating: 5,
      content: "잇몸 상태가 심각했는데 꼼꼼한 치료로 많이 좋아졌습니다. 의료진분들이 친절하시고 사후관리도 체계적이어서 믿고 다니고 있어요.",
      date: "2023.11"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">TESTIMONIALS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            환자 후기
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            실제 환자분들이 남겨주신 소중한 후기를 통해 저희의 진료 철학을 확인하세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{testimonial.age}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.treatment}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                  </div>
                </div>

                <blockquote className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-success font-medium">
                    ✓ 치료 완료
                  </div>
                  <div className="text-xs text-muted-foreground">
                    검증된 후기
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-muted p-6 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">평균 평점</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1,200+</div>
              <div className="text-sm text-muted-foreground">리뷰 수</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">재방문율</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;