import ForfeedmallLayout, { PrivacyPolicyContent } from "./layout";

const DESCRIPTION =
  "forfeedmall은 Gmail에서 카페24 신규 회원가입 알림을 확인하고, 필요한 회원정보를 추출·마스킹한 후 지정된 Slack 채널로 전달하는 주식회사 피드백의 업무 자동화 애플리케이션입니다.";

export default function ForfeedmallPrivacy() {
  return (
    <ForfeedmallLayout
      title="forfeedmall 개인정보처리방침"
      description={DESCRIPTION}
      path="/forfeedmall/privacy/"
    >
      <PrivacyPolicyContent />
    </ForfeedmallLayout>
  );
}
