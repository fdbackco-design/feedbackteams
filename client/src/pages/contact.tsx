import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    privacyAgree: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAgree) {
      toast({
        title: "개인정보 동의 필요",
        description: "개인정보 수집 및 이용에 동의해주세요.",
        variant: "destructive"
      });
      return;
    }
    
    // Handle form submission
    toast({
      title: "문의가 전송되었습니다",
      description: "빠른 시일 내에 답변드리겠습니다."
    });
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
      privacyAgree: false
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "본사 주소",
      content: "서울특별시 강남구 테헤란로 123, 피드백빌딩 5층",
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "대표 전화",
      content: "+82-2-1234-5678",
      color: "bg-secondary"
    },
    {
      icon: Mail,
      title: "이메일",
      content: "info@feedback-corp.com",
      color: "bg-accent"
    },
    {
      icon: Clock,
      title: "운영시간",
      content: "평일 09:00 - 18:00\n토요일 09:00 - 13:00\n일요일 및 공휴일 휴무",
      color: "bg-gray-600"
    }
  ];

  const departments = [
    { dept: "의료관광 사업부", email: "medical@feedback-corp.com" },
    { dept: "브랜드 사업부", email: "brand@feedback-corp.com" },
    { dept: "마케팅/PR", email: "marketing@feedback-corp.com" },
    { dept: "파트너십", email: "partnership@feedback-corp.com" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">연락처 & 문의</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FeedBack과 함께 새로운 비즈니스 기회를 만들어보세요.<br />
            언제든지 문의해 주시면 신속하고 정확한 답변을 드리겠습니다.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">연락처 정보</h2>
            
            {/* Company Info Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Department Contacts */}
            <Card className="bg-gray-50 mb-8">
              <CardHeader>
                <CardTitle className="text-xl">부서별 연락처</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{dept.dept}</span>
                      <span className="font-medium">{dept.email}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">소셜 미디어</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">문의하기</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name">이름 *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="이름을 입력해주세요"
                />
              </div>
              
              {/* Company */}
              <div>
                <Label htmlFor="company">회사명</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="회사명을 입력해주세요"
                />
              </div>
              
              {/* Email */}
              <div>
                <Label htmlFor="email">이메일 *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="이메일을 입력해주세요"
                />
              </div>
              
              {/* Phone */}
              <div>
                <Label htmlFor="phone">전화번호</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="전화번호를 입력해주세요"
                />
              </div>
              
              {/* Inquiry Type */}
              <div>
                <Label htmlFor="inquiry-type">문의 유형 *</Label>
                <Select 
                  value={formData.inquiryType} 
                  onValueChange={(value) => setFormData({...formData, inquiryType: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="문의 유형을 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medical-tourism">의료관광 문의</SelectItem>
                    <SelectItem value="brand-partnership">브랜드 파트너십</SelectItem>
                    <SelectItem value="distribution">유통/수출입 문의</SelectItem>
                    <SelectItem value="marketing">마케팅 컨설팅</SelectItem>
                    <SelectItem value="investment">투자 문의</SelectItem>
                    <SelectItem value="other">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Message */}
              <div>
                <Label htmlFor="message">문의 내용 *</Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="문의하실 내용을 자세히 작성해주세요"
                />
              </div>
              
              {/* Privacy Agreement */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacy-agree"
                  checked={formData.privacyAgree}
                  onCheckedChange={(checked) => setFormData({...formData, privacyAgree: checked as boolean})}
                />
                <Label htmlFor="privacy-agree" className="text-sm text-gray-600">
                  개인정보 수집 및 이용에 동의합니다. 
                  <a href="#" className="text-primary hover:underline ml-1">개인정보처리방침 보기</a>
                </Label>
              </div>
              
              {/* Submit Button */}
              <Button type="submit" className="w-full py-4 text-lg font-semibold">
                문의 보내기
              </Button>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">오시는 길</h3>
          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">지도가 여기에 표시됩니다</p>
              <p className="text-sm">Google Maps API 연동 필요</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
