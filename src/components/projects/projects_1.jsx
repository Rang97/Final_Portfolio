import SO_1 from "../../assets/Sajuon_detail_1.jpg";
import SO_2 from "../../assets/Sajuon_detail_2.jpg";
import SO_3 from "../../assets/Sajuon_detail_3.jpg";
import SO_4 from "../../assets/Sajuon_detail_4.jpg";
import SO_5 from "../../assets/Sajuon_detail_5.jpg";
import SO_6 from "../../assets/Sajuon_detail_6.jpg";
import SO_7 from "../../assets/Sajuon_detail_7.jpg";
import SO_8 from "../../assets/Sajuon_detail_8.jpg";
import SO_9 from "../../assets/Sajuon_detail_9.jpg";
import SO_10 from "../../assets/Sajuon_detail_10.jpg";
import SO_11 from "../../assets/Sajuon_detail_11.jpg";
import SO_12 from "../../assets/Sajuon_detail_12.jpg";
import SO_13 from "../../assets/Sajuon_detail_13.jpg";
import SO_14 from "../../assets/Sajuon_detail_14.jpg";
import SO_15 from "../../assets/Sajuon_detail_15.jpg";

export default function Project5({ onClose }) {
  const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "Tailwind CSS",
    "MyBatis",
    "MySQL",
  ];

  return (
    /* 1. 모달 전체 배경 (어두운 반투명 백드롭) */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-pure-ink/70 backdrop-blur-sm animate-fade-in">
      {/* 배경 클릭 시 닫기 */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-cream-paper text-pure-ink rounded-xs border-2 border-pure-ink shadow-2xl z-10 p-6 sm:p-10 md:p-12">
        <div className="flex justify-between items-center pb-6 border-b border-bone-gray/80 mb-8">
          <div className="font-sans text-sm font-bold tracking-widest text-charcoal-press uppercase">
            프로젝트 더보기 01
          </div>
          <button
            onClick={onClose}
            className="font-sans text-sm font-bold px-3 py-1.5 bg-pure-ink text-cream-paper hover:bg-teal-500 hover:text-pure-ink transition-colors cursor-pointer uppercase tracking-wider"
          >
            X
          </button>
        </div>

        {/* 헤더 (타이틀 & 깃허브 버튼) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-10 border-b border-bone-gray/80 mb-10">
          <div>
            <span className="font-mono text-base uppercase mb-3 block">
              September 2026
            </span>
            <h2 className="font-sans font-bold text-5xl md:text-6xl uppercase leading-none">
              사주온 <br /> Saju - ON <br />
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Rang97/Saju-On"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm font-bold px-4 py-2.5 bg-[#E8E7E4] border border-pure-ink/20 text-pure-ink hover:bg-pure-ink hover:text-cream-paper transition-all uppercase tracking-wider"
            >
              GITHUB ↗
            </a>
          </div>
        </div>

        {/* 본문 */}
        <div className="space-y-6 w-full">
          <h5 className="font-sans font-bold text-lg uppercase tracking-wider mb-3 text-pure-ink">
            <span className="text-teal-500">✦ </span>
            개발 배경
          </h5>
          <p className="font-sans leading-relaxed">
            게이머들이 함께 플레이할 사람을 찾을 때 대부분 "게임명 + 티어"
            수준의 단순 텍스트 매칭에 의존하고 있어 실제로 플레이 스타일이
            맞는지는 함께 플레이해 보기 전까지 알 수 없으며 기존 게임
            커뮤니티에는 사용자가 매일 다시 찾아올 만한 재미 요소가 부족하다.
          </p>
          <h5 className="font-sans font-bold text-lg uppercase tracking-wider mb-3 text-pure-ink inline-block">
            <span className="text-teal-500">✦ </span>
            개발 목표
          </h5>
          <p className="font-sans leading-relaxed">
            오행별 게임 큐레이션과 선호 게임 기반 "오늘의 게임 운세" 제공하여
            사용자의 흥미를 유발한다. 사주 오행 궁합을 파티 구성 시 참고 지표로
            활용하여, 단순 스펙 매칭을 넘어선 재미 요소를 더한다.
          </p>
          <p className="font-sans leading-relaxed">
            오행의 성질을 게임 장르에 대응시켜 "성장·탐색", "전투·경쟁",
            "협동·조화", "전략·판단", "생존·도전" 기준의 새로운 분류 체계를
            제시하고, 사용자가 기존과 다른 방식으로 게임을 탐색할 수 있도록
            한다.
          </p>
          <h5 className="font-sans font-bold text-lg uppercase tracking-wider mb-3 text-pure-ink">
            <span className="text-teal-500">✦ </span>
            시스템 아키텍처
          </h5>
          <p className="font-sans leading-relaxed">
            프런트엔드와 백엔드를 REST API로 연결, 채팅만 WebSocket 경로로 분리
          </p>
          <h5 className="font-sans font-bold text-lg uppercase tracking-wider mb-3 text-pure-ink">
            <span className="text-teal-500">✦ </span>
            사용기술
          </h5>
          <div className="flex flex-wrap gap-5 border-b border-pure-ink/20">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-sans text-sm font-bold uppercase tracking-wider mb-5"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="font-sans text-base font-medium">
            <p className="font-black">1. 회원가입 및 로그인</p>
          </div>
          <img
            src={SO_1}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-1"
          />{" "}
          <img
            src={SO_2}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />
          <div className="font-sans text-base font-medium">
            <p className="mb-5">
              2. <span className="font-black">인터렉션</span> <br />
              등록된 게임을 무작위로 불러와 카드 형태로 배치, 드래그
              인터랙션으로 카드를 넘겨서 다양한 게임 확인 가능
            </p>
            <p className="mb-5">
              3. <span className="font-black">오행별 게임 추천</span> <br />
              오행에 따라 어울리는 게임 탐색 가능
            </p>
          </div>
          <img
            src={SO_3}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-1"
          />
          <img
            src={SO_4}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />{" "}
          <div className="font-sans text-base font-medium">
            <p className="mb-5">
              4. <span className="font-black">파티 페이지</span> <br />
              게임 이름, 장르, 인원수와 오행 합계 사용자 궁합을 기준을 목록 정렬
            </p>{" "}
            <p className="mb-3">
              5. <span className="font-black">파티 생성</span> <br />
              파티 생성 시, 궁합 유형 선택 가능
            </p>
            <div className="bg-bone-gray rounded-sm mb-10 p-3">
              <p className="font-bold">
                파티 생명주기 : 파티 상태와 권한을 서비스 계층에서 일관되게 관리
              </p>
              <p>01.생성 → 02.참여 → 03.정원 도달 → 04.이탈·강퇴 → 05.삭제</p>
            </div>
          </div>
          <img
            src={SO_5}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-1"
          />
          <img
            src={SO_6}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />{" "}
          <div className="font-sans text-base font-medium">
            <p className="mb-3">
              6. <span className="font-black">파티의 오행 분포</span> <br />
              같은 화면에서 현재 게임과 참여자 정보 확인 가능 참여한 파티원의
              오행을 합산하여 분포 차트와 오행 수치로 파티의 성향 계산
            </p>
            <div className="bg-bone-gray rounded-sm mb-10 p-3">
              {" "}
              <p className="font-bold">오행 궁합 계산</p>
              <p>
                01. 승인된 파티원의 오행 프로필 조회 <br />
                02. 목·화·토·금·수 수치 합산 <br />
                03. 부족한 오행과 조합 특성 반환
              </p>
            </div>

            <p className="mb-5">
              7. <span className="font-black">실시간 채팅</span> <br />
              WebSocket과 STOMP로 파티 단위의 메시지를 구독 시스템 메시지 수신
              시 인원과 파티원 목록을 실시간으로 갱신
            </p>
          </div>
          <img
            src={SO_7}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />
          <div className="font-sans text-base font-medium">
            <p className="mb-5">
              8. <span className="font-black">게시판 페이지</span> <br />
              원하는 주제로 간편하게 글 작성 후, 소통 가능
            </p>
            <p className="mb-5">
              9. <span className="font-black">게시글 상세</span> <br />
              제목과 본문, 작성자 정보를 한 화면에서 표시 게시글 아래에서 댓글을
              입력하고 작성된 댓글 확인
            </p>
          </div>
          <img
            src={SO_8}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-1"
          />{" "}
          <img
            src={SO_9}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />
          <div className="font-sans text-base font-medium">
            <p className="mb-5">
              10. <span className="font-black">유저 차단</span> <br />
              댓글 및 게시글의 사용자를 선택하고 확인 절차 후, 차단 차단한
              사용자의 게시글 및 댓글 숨김 처리
            </p>
            <p className="mb-5">
              11. <span className="font-black">차단 관리</span> <br />
              마이페이지의 차단 목록에서 상태 확인 및 관리 가능
            </p>
          </div>
          <img
            src={SO_10}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-1"
          />{" "}
          <img
            src={SO_11}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />
          <div className="font-sans text-base font-medium">
            <p className="mb-5">
              12. <span className="font-black">선호 게임 목록</span> <br />
              가입 시, 지정한 선호 게임을 확인 및 수정 가능
            </p>
            <p className="mb-5">
              13. <span className="font-black">게임 등록</span> <br />
              DB에 저장된 게임을 검색하고 선택해서 나만의 게임으로 지정
            </p>
          </div>
          <img
            src={SO_12}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-1"
          />{" "}
          <img
            src={SO_13}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />
          <div className="font-sans text-base font-medium">
            <p className="mb-5">
              14. <span className="font-black">사주 및 오행 정보</span> <br />
              생년월일과 성별, 시간 입력 후, 사주 재계산 목·화·토·금·수의 비율과
              사주 정보를 한 화면에서 확인
            </p>
            <p className="mb-5">
              15. <span className="font-black">오늘의 운세</span> <br />
              사주에 따른 오늘의 운세 점수와 게임별 권장 플레이 스타일 및 전략
              서술
            </p>
          </div>
          <img
            src={SO_14}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-1"
          />{" "}
          <img
            src={SO_15}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />
        </div>
      </div>
    </div>
  );
}
