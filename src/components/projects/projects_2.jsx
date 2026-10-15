import TC_1 from "../../assets/Timecapsule_detail_1.jpg";
import TC_2 from "../../assets/Timecapsule_detail_2.jpg";
import TC_3 from "../../assets/Timecapsule_detail_3.jpg";
import TC_4 from "../../assets/Timecapsule_detail_4.jpg";
import TC_5 from "../../assets/Timecapsule_detail_5.jpg";
import TC_6 from "../../assets/Timecapsule_detail_6.jpg";

export default function Project5({ onClose }) {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "Thymeleaf",
    "Spring MVC",
    "REST API",
  ];

  return (
    /* 1. 모달 전체 배경 (어두운 반투명 백드롭) */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-pure-ink/70 backdrop-blur-sm animate-fade-in">
      {/* 배경 클릭 시 닫기 */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-cream-paper text-pure-ink rounded-xs border-2 border-pure-ink shadow-2xl z-10 p-6 sm:p-10 md:p-12">
        <div className="flex justify-between items-center pb-6 border-b border-bone-gray/80 mb-8">
          <div className="font-sans text-sm font-bold tracking-widest text-charcoal-press uppercase">
            ✦ 프로젝트 더보기 02
          </div>
          <button
            onClick={onClose}
            className="font-sans text-sm font-bold px-3 py-1.5 bg-pure-ink text-cream-paper hover:bg-teal-300 hover:text-pure-ink transition-colors cursor-pointer uppercase tracking-wider"
          >
            X
          </button>
        </div>

        {/* 헤더 (타이틀 & 깃허브 버튼) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-10 border-b border-bone-gray/80 mb-10">
          <div>
            <span className="font-mono text-base uppercase mb-3 block">
              AUG 18, 2026
            </span>
            <h2 className="font-sans font-bold text-5xl md:text-6xl uppercase leading-none">
              레트로 타임캡슐 <br /> 8Bit - TIMECAPSULE <br />
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Rang97/Timecapsule_project"
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
            개발 목표
          </h5>
          <p className="font-sans leading-relaxed">
            칵테일에 관련된 사용자가 미래의 특정 날짜에 열어볼 수 간단한
            타입캡슐을 작성하고 보관할 수 있는 레트로 스타일의 웹
            애플리케이션으로 사이트로 사용자는 제목, 내용, 개봉일을 입력해
            타임캡슐을 저장할 수 있으며 개봉일이 지난 타임캡슐만 열람이
            가능하다.
          </p>

          <h5 className="font-sans font-bold text-lg uppercase tracking-wider mb-3 text-pure-ink">
            주요 기능
          </h5>
          <p className="font-sans leading-relaxed">
            회원 가입 및 로그인 글 · 작성 및 보관 · 조건부 열람 기능
          </p>

          <h5 className="font-sans font-bold text-lg uppercase tracking-wider mb-3 text-pure-ink">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 font-sans text-base font-medium">
            <p>
              1. 아이디, 비밀번호 작성 필수 <br /> 2. 로그인 시, 메인 페이지로
              이동 <br /> 3.회원이 아닐 경우, 로그인 불가, 회원 가입 후, 사이트
              이용 가능 <br />
            </p>
          </div>
          <img
            src={TC_1}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 font-sans text-base font-semibold">
            <p>
              4. 아이디, 비밀번호, 이름 작성하면 회원 가입 완료 <br /> 5. 회원
              가입 완료 후, 로그인 페이지로 이동
            </p>
          </div>
          <img
            src={TC_2}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 font-sans text-base font-semibold">
            <p>
              6. 제목, 내용, 개봉일 작성 후, 보관 가능 <br /> 7. 개봉일은 오늘
              이후의 날짜로만 설정 가능
            </p>
          </div>
          <img
            src={TC_3}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 font-sans text-base font-semibold">
            <p>
              8. 개봉일 전의 글은 열람 불가 <br /> 9.개봉날 당일 혹은 이후의
              글만 열람 가능
            </p>
          </div>
          <img
            src={TC_4}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 font-sans text-base font-semibold">
            <p>
              10. 개봉 가능한 글 클릭 시, 팝업으로 작성한 글 확인 및 삭제 가능
            </p>
          </div>

          <img
            src={TC_5}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />
          <img
            src={TC_6}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />
        </div>
      </div>
    </div>
  );
}
