import B2B2C_Hub from "@/components/B2B2C_Hub";

export default function B2B2C_Demo() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            B2B2C Hub 컴포넌트 데모
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            양쪽 분할 레이아웃과 중앙 애니메이션으로 B2B/B2C 메시지를 보여주는 반응형 웹 섹션입니다.
            React + Tailwind + Framer Motion + lucide-react로 구현되었습니다.
          </p>
        </div>
      </div>
      <B2B2C_Hub />
    </div>
  );
}