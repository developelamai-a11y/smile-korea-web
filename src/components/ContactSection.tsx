import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Mail, Car, Train, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">CONTACT & LOCATION</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            오시는 길 & 예약 안내
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            편리한 교통과 주차시설을 갖춘 강남 중심가에 위치하고 있습니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Map Section */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-medium">
              <div className="h-64 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Google Maps Integration</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    실제 구현 시 Google Maps API를 연동합니다
                  </p>
                </div>
              </div>
            </Card>

            {/* Transportation Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 shadow-soft">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <Train className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">지하철</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• 2호선 강남역 3번 출구 도보 5분</p>
                    <p>• 신분당선 강남역 직결</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 shadow-soft">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="h-5 w-5 text-secondary" />
                    <h4 className="font-semibold text-foreground">주차안내</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• 건물 지하 1-3층 주차가능</p>
                    <p>• 2시간 무료 주차 지원</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">병원 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">주소</h4>
                    <p className="text-muted-foreground">서울시 강남구 테헤란로 123 (역삼동)</p>
                    <p className="text-muted-foreground">ABC빌딩 5층</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">전화번호</h4>
                    <p className="text-muted-foreground">02-1234-5678</p>
                    <p className="text-sm text-muted-foreground">응급상황: 010-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">이메일</h4>
                    <p className="text-muted-foreground">info@smilekorea.co.kr</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">진료시간</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>평일: 09:00 - 18:00</p>
                      <p>토요일: 09:00 - 15:00</p>
                      <p className="text-destructive">일요일/공휴일: 휴진</p>
                      <p className="text-xs mt-2">점심시간: 12:30 - 13:30</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-14">
                <Phone className="h-5 w-5 mr-2" />
                전화 상담
              </Button>
              <Button size="lg" variant="outline" className="h-14">
                <Calendar className="h-5 w-5 mr-2" />
                온라인 예약
              </Button>
            </div>

            {/* Emergency Notice */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-destructive mb-1">응급진료 안내</h4>
                    <p className="text-sm text-muted-foreground">
                      응급상황 시 010-1234-5678로 연락주시면 신속히 대응해드립니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;