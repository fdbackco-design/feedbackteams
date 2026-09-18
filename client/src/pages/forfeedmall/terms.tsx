import ForfeedmallLayout from "./layout";

const DESCRIPTION =
  "forfeedmall 서비스 이용약관입니다. 앱의 이용 조건, 계정 연결, 이용 제한 및 책임 범위를 안내합니다.";

export default function ForfeedmallTerms() {
  return (
    <ForfeedmallLayout
      title="forfeedmall 서비스 이용약관"
      description={DESCRIPTION}
      path="/forfeedmall/terms/"
    >
      <article className="prose prose-lg max-w-none text-gray-700">
        <h1>forfeedmall 서비스 이용약관</h1>
        <p className="text-gray-500">시행일: 2026년 9월 18일</p>
        <p>본 이용약관은 forfeedmall(이하 “앱”)의 이용 조건을 규정합니다.</p>

        <h2>1. 서비스 목적</h2>
        <p>
          앱은 사용자가 승인한 Gmail 계정에서 카페24 신규 회원가입 이메일을
          감지하고, 필요한 정보를 추출·마스킹하여 지정된 Slack 채널로 전달하는
          업무 자동화 서비스입니다.
        </p>

        <h2>2. 이용 대상</h2>
        <p>
          앱은 운영자 또는 운영자가 허용한 사용자만 이용할 수 있으며, 불특정
          다수를 대상으로 하지 않습니다.
        </p>

        <h2>3. 계정 연결 및 권한</h2>
        <p>
          사용자는 본인이 소유하거나 정당한 접근 권한을 가진 Google 계정만
          연결해야 합니다. Google 계정 설정에서 언제든지 앱의 접근 권한을 철회할
          수 있습니다.
        </p>

        <h2>4. 이용 제한</h2>
        <p>다음 행위는 허용되지 않습니다.</p>
        <ul>
          <li>타인의 계정이나 이메일에 무단으로 접근하는 행위</li>
          <li>개인정보를 불법적으로 수집하거나 이용하는 행위</li>
          <li>앱을 스팸, 사기 또는 불법적인 목적으로 이용하는 행위</li>
          <li>앱이나 연결된 서비스의 보안을 침해하는 행위</li>
        </ul>

        <h2>5. 서비스 변경 및 중단</h2>
        <p>
          Google, Gmail, n8n, Slack의 정책 변경이나 서버·네트워크 장애, 보안상의
          필요에 따라 앱의 기능이 변경되거나 일시 중단될 수 있습니다.
        </p>

        <h2>6. 책임 제한</h2>
        <p>
          운영자는 안정적인 서비스 제공을 위해 노력하지만, 모든 이메일이 오류나
          누락 없이 처리되는 것을 보장하지 않습니다. 외부 서비스 장애, 계정 권한
          만료 또는 사용자 설정 오류로 발생한 손해에 대해서는 관련 법령이
          허용하는 범위에서 책임을 제한합니다.
        </p>

        <h2>7. 이용 종료</h2>
        <p>
          사용자는 Google 계정에서 앱의 접근 권한을 철회하여 이용을 종료할 수
          있습니다. 보안 문제가 확인되거나 본 약관을 위반한 경우 운영자는 앱
          이용을 제한할 수 있습니다.
        </p>

        <h2>8. 약관 변경</h2>
        <p>
          앱의 기능이나 운영 방식이 변경되는 경우 본 약관을 수정할 수 있습니다.
          변경된 약관은 이 페이지에 게시된 시점부터 적용됩니다.
        </p>

        <h2>9. 준거법</h2>
        <p>본 약관은 대한민국 법률을 따릅니다.</p>

        <h2>10. 문의</h2>
        <ul>
          <li>앱 이름: forfeedmall</li>
          <li>운영자: Feedholdings</li>
          <li>
            이메일:{" "}
            <a href="mailto:fdbackco@gmail.com">fdbackco@gmail.com</a>
          </li>
        </ul>
      </article>
    </ForfeedmallLayout>
  );
}
