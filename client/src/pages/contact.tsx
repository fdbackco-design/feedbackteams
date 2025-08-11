import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import GoogleMap from "@/components/GoogleMap";
import { useLanguage } from "@/contexts/LanguageContext";

const CENTER = { lat: 37.380236, lng: 126.665423 };

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    privacyAgree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyAgree) {
      toast({
        title: t("contact.form.privacy.error.title"),
        description: t("contact.form.privacy.error.description"),
        variant: "destructive",
      });
      return;
    }

    // 필수 필드 검증
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "입력 오류",
        description: "이름, 이메일, 문의내용은 필수 항목입니다.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          inquiryType: formData.inquiryType,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.ok) {
        toast({
          title: t("contact.form.success.title"),
          description:
            "문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.",
        });

        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
          privacyAgree: false,
        });
      } else {
        if (result.needAuth) {
          toast({
            title: "Gmail 인증 필요",
            description: (
              <div>
                <p>Gmail API 인증이 필요합니다.</p>
                <a
                  href="/api/auth/gmail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  여기를 클릭하여 Gmail 인증 진행
                </a>
              </div>
            ),
            variant: "destructive",
          });
        } else {
          throw new Error(result.error || "알 수 없는 오류가 발생했습니다.");
        }
      }
    } catch (error: any) {
      console.error("이메일 발송 오류:", error);
      toast({
        title: "발송 실패",
        description:
          error.message ||
          "이메일 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("본사 주소"),
      content: t("인천 연수구 송도과학로 80, 송도 AIT센터 1302호"),
      color: "bg-primary",
    },
    {
      icon: Phone,
      title: t("대표전화"),
      content: "070-8211-1761",
      color: "bg-secondary",
    },
    {
      icon: Mail,
      title: t("이메일"),
      content: "fdbackco@gmail.com",
      color: "bg-accent",
    },
    {
      icon: Clock,
      title: t("운영시간"),
      content: t("평일 10:00 - 19:00, 주말 및 공휴일 휴무"),
      color: "bg-gray-600",
    },
  ];

  const departments = [
    { dept: t("마케팅부"), email: "fdbackco@gmail.com" },
    { dept: t("영업부"), email: "fdbackco@gmail.com" },
    { dept: t("개발부"), email: "fdbackco@gmail.com" },
    { dept: t("경영지원부"), email: "fdbackco@gmail.com" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("FeedBack과 함께 새로운 비즈니스 기회를 만들어보세요.")
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("연락처")}
            </h2>

            {/* Company Info Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Department Contacts */}
            <Card className="bg-gray-50 mb-8">
              <CardHeader>
                <CardTitle className="text-xl">{t("관련부서")}</CardTitle>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("소셜미디어")}
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("contact.form.title")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name">{t("contact.form.name")} *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={t("contact.form.name.placeholder")}
                />
              </div>

              {/* Company */}
              <div>
                <Label htmlFor="company">{t("contact.form.company")}</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder={t("contact.form.company.placeholder")}
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">{t("contact.form.email")} *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={t("contact.form.email.placeholder")}
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder={t("contact.form.phone.placeholder")}
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <Label htmlFor="inquiry-type">문의 유형 *</Label>
                <Select
                  // 선택된 라벨 그대로 상태에 저장: "사업 문의" | "브랜드 문의" | "파트너 제안"
                  value={formData.inquiryType}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, inquiryType: value }))
                  }
                  required
                >
                  <SelectTrigger aria-label="문의 유형">
                    <SelectValue placeholder="문의 유형" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* value를 라벨과 동일하게 두면 그대로 전송/표시됩니다 */}
                    <SelectItem value="사업 문의">사업 문의</SelectItem>
                    <SelectItem value="브랜드 문의">브랜드 문의</SelectItem>
                    <SelectItem value="파트너 제안">파트너 제안</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message">{t("contact.form.message")} *</Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t("contact.form.message.placeholder")}
                />
              </div>

              {/* Privacy Agreement */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacy-agree"
                  checked={formData.privacyAgree}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      privacyAgree: checked as boolean,
                    })
                  }
                />
                <Label
                  htmlFor="privacy-agree"
                  className="text-sm text-gray-600"
                >
                  {t("contact.form.privacy")}
                  <a href="#" className="text-primary hover:underline ml-1">
                    {t("contact.form.privacy.link")}
                  </a>
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-semibold"
              >
                {isSubmitting ? "발송 중..." : t("contact.form.submit")}
              </Button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {t("contact.map.title")}
          </h3>
          <div className="rounded-xl h-96 overflow-hidden shadow-lg">
            <GoogleMap center={CENTER} className="rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
