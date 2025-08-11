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
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAgree) {
      toast({
        title: t("contact.form.privacy.error.title"),
        description: t("contact.form.privacy.error.description"),
        variant: "destructive",
      });
      return;
    }

    // Handle form submission
    toast({
      title: t("contact.form.success.title"),
      description: t("contact.form.success.description"),
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
      content: "fdbackco@gmail.com",
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
    { dept: t("contact.departments.medical"), email: "fdbackco@gmail.com" },
    { dept: t("contact.departments.brand"), email: "fdbackco@gmail.com" },
    { dept: t("contact.departments.marketing"), email: "fdbackco@gmail.com" },
    { dept: t("contact.departments.partnership"), email: "fdbackco@gmail.com" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.description").split('\n').map((line, index) => (
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
              {t("contact.info.title")}
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
                <CardTitle className="text-xl">{t("contact.departments.title")}</CardTitle>
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
                {t("contact.social.title")}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t("contact.form.title")}</h2>

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
                <Label htmlFor="inquiry-type">{t("contact.form.inquiry")} *</Label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, inquiryType: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("contact.form.inquiry.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medical-tourism">
                      {t("contact.form.inquiry.medical")}
                    </SelectItem>
                    <SelectItem value="brand-partnership">
                      {t("contact.form.inquiry.brand")}
                    </SelectItem>
                    <SelectItem value="distribution">
                      {t("contact.form.inquiry.distribution")}
                    </SelectItem>
                    <SelectItem value="marketing">{t("contact.form.inquiry.marketing")}</SelectItem>
                    <SelectItem value="investment">{t("contact.form.inquiry.investment")}</SelectItem>
                    <SelectItem value="other">{t("contact.form.inquiry.other")}</SelectItem>
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
                className="w-full py-4 text-lg font-semibold"
              >
                {t("contact.form.submit")}
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
