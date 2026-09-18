import { Link } from "wouter";
import SEO from "@/components/SEO";

interface ForfeedmallLayoutProps {
  title: string;
  description: string;
  path: string;
  children: React.ReactNode;
}

export default function ForfeedmallLayout({
  title,
  description,
  path,
  children,
}: ForfeedmallLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO title={title} description={description} path={path} />
      <header className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <Link
            href="/forfeedmall"
            className="text-lg font-semibold text-gray-900 hover:text-gray-700"
          >
            forfeedmall
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {children}
        </div>
      </main>
      <footer className="border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 text-sm text-gray-600">
          <nav className="flex items-center gap-3">
            <Link
              href="/forfeedmall/privacy/"
              className="hover:text-gray-900 transition-colors"
            >
              개인정보처리방침
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/forfeedmall/terms/"
              className="hover:text-gray-900 transition-colors"
            >
              서비스 이용약관
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export function PrivacyPolicyContent() {
  return (
    <article className="space-y-8 text-gray-700 leading-relaxed">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        forfeedmall 개인정보처리방침
      </h1>
      <p>
        forfeedmall은 Gmail에서 카페24 신규 회원가입 알림을 확인하고,
        필요한 회원정보를 추출·마스킹한 후 지정된 Slack 채널로 전달하는
        주식회사 피드백의 업무 자동화 애플리케이션입니다.
      </p>
      <dl className="space-y-3">
        <div>
          <dt className="font-semibold text-gray-900">운영자</dt>
          <dd>주식회사 피드백</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">문의</dt>
          <dd>
            <a
              href="mailto:fdbackco@gmail.com"
              className="text-gray-900 underline underline-offset-2 hover:no-underline"
            >
              fdbackco@gmail.com
            </a>
          </dd>
        </div>
      </dl>
    </article>
  );
}
