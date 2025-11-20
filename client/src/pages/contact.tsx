import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import contactBannerImg from "@assets/contact_banner_1763544876573.jpg";

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

    // required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("contact.errors.required.title"),
        description: t("contact.errors.required.description"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          title: t("contact.toast.success.title"),
          description: t("contact.toast.success.description"),
        });
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
            title: t("contact.toast.gmail.title"),
            description: (
              <div>
                <p>{t("contact.toast.gmail.description")}</p>
                <a
                  href="/api/auth/gmail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {t("contact.toast.gmail.link")}
                </a>
              </div>
            ),
            variant: "destructive",
          });
        } else {
          throw new Error(result.error || t("contact.toast.unknown"));
        }
      }
    } catch (error: any) {
      console.error(t("contact.toast.send_error_console"), error);
      toast({
        title: t("contact.toast.fail.title"),
        description: error.message || t("contact.toast.fail.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.address.title"),
      content: t("contact.info.address.content"),
      color: "bg-primary",
    },
    {
      icon: Phone,
      title: t("contact.info.phone.title"),
      content: "070-8211-1761",
      color: "bg-secondary",
    },
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      content: "fdbackteams@gmail.com",
      color: "bg-accent",
    },
    {
      icon: Clock,
      title: t("contact.info.hours.title"),
      content: t("contact.info.hours.content"),
      color: "bg-gray-600",
    },
  ];

  const departments = [
    { dept: t("contact.dept.management"), email: "fdbackteams@gmail.com" },
  ];

  return (
    <>
      {/* Contact Banner */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactBannerImg}
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto break-keep">
              {t("contact.subtitle.line1")}
              <br className="hidden sm:block" />
              {t("contact.subtitle.line2")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="w-full">
          <div className="flex justify-center">
            {/* Contact Form */}
            <div className="p-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f5f5f5" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <Label htmlFor="inquiry-type">
                    {t("contact.form.inquiry_type")} *
                  </Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, inquiryType: value }))
                    }
                    required
                  >
                    <SelectTrigger aria-label={t("contact.form.inquiry_type")}>
                      <SelectValue
                        placeholder={t("contact.form.inquiry_type.placeholder")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">
                        {t("contact.form.inquiry_type.business")}
                      </SelectItem>
                      <SelectItem value="brand">
                        {t("contact.form.inquiry_type.brand")}
                      </SelectItem>
                      <SelectItem value="partner">
                        {t("contact.form.inquiry_type.partner")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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
                    {t("contact.form.privacy")}{" "}
                    <a href="#" className="text-primary hover:underline ml-1">
                      {t("contact.form.privacy.link")}
                    </a>
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-lg font-semibold"
                  style={{
                    backgroundColor: isSubmitting ? "#93C5FD" : "#3B82F6",
                    color: "white",
                    padding: "15px 60px",
                    borderRadius: "5px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "#2563EB";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "#3B82F6";
                    }
                  }}
                >
                  {isSubmitting
                    ? t("contact.form.sending")
                    : t("contact.form.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h2 className="text-fluid-sub break-keep text-balance text-pretty leading-tight-mobile tracking-tight-mobile font-bold text-gray-900 maxw-title mb-6 sm:mb-8">
              {t("contact.section.contact")}
            </h2>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 tap-target`}
                  >
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              {t("contact.map.title")}
            </h3>
            <div className="rounded-xl h-96 overflow-hidden">
              <GoogleMap center={CENTER} className="rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
