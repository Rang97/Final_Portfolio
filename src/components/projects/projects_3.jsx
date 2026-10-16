import CT_1 from "../../assets/Cocktail_detail_1.jpg";
import CT_2 from "../../assets/Cocktail_detail_2.jpg";
import CT_3 from "../../assets/Cocktail_detail_3.jpg";
import CT_4 from "../../assets/Cocktail_detail_4.jpg";
import CT_5 from "../../assets/Cocktail_detail_5.jpg";
import CT_6 from "../../assets/Cocktail_detail_6.jpg";
import CT_7 from "../../assets/Cocktail_detail_7.png";

export default function Project5({ onClose }) {
  const techStack = [
    "React",
    "Tailwind-css",
    "axios",
    "JavaScript",
    "LocalStorage",
  ];

  return (
    /* 1. 모달 전체 배경 (어두운 반투명 백드롭) */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-pure-ink/70 backdrop-blur-sm animate-fade-in">
      {/* 배경 클릭 시 닫기 */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-cream-paper text-pure-ink rounded-xs border-2 border-pure-ink shadow-2xl z-10 p-6 sm:p-10 md:p-12">
        <div className="flex justify-between items-center pb-6 border-b border-bone-gray/80 mb-8">
          <div className="font-sans text-sm font-bold tracking-widest text-charcoal-press uppercase">
            프로젝트 더보기 03
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
              JUNE 2026
            </span>
            <h2 className="font-sans font-bold text-5xl md:text-6xl uppercase leading-none">
              콕테일 Cock-tail <br />
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Rang97/Cock-tail_project"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm font-bold px-4 py-2.5 bg-[#E8E7E4] border border-pure-ink/20 text-pure-ink hover:bg-pure-ink hover:text-cream-paper transition-all uppercase tracking-wider"
            >
              GITHUB ↗
            </a>
            <a
              href="https://cocktail-rang2.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm font-bold px-4 py-2.5 bg-[#E8E7E4] border border-pure-ink/20 text-pure-ink hover:bg-pure-ink hover:text-cream-paper transition-all uppercase tracking-wider"
            >
              LIVE SITE ↗
            </a>
          </div>
        </div>

        {/* 본문 콘텐츠 (이미지 및 기획 의도/디자인 전략) */}
        <div className="space-y-6 w-full">
          <h5 className="font-sans font-bold text-lg uppercase tracking-wider mb-3 text-pure-ink">
            <span className="text-teal-500">✦ </span>
            개발 목표
          </h5>
          <p className="font-sans leading-relaxed">
            다양한 칵테일의 이미지와 이름을 보여주는 무한 스크롤 기능의
            웹사이트로 <br /> 칵테일에 관련된 정보 등을 다양하게 보여주고 원하는
            칵테일을 찜해서 저장해둘 수 있다.
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

          <div className="font-sans text-base  font-medium">
            <p className="mb-5">
              1. <span className="font-black"> HEADER</span> <br />
              메인 페이지 및 상단 네비게이션
            </p>{" "}
          </div>
          <img
            src={CT_1}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />

          <div className=" font-sans text-base font-medium">
            <p className="mb-5">
              2.<span className="font-black"> MAIN</span> <br />
              칵테일 종류를 A부터 차례대로 나열 <br />
              더보기 버튼 클릭 시, 재료 및 칵테일 제조 방법 등의 정보 노출
            </p>{" "}
          </div>
          <img
            src={CT_2}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />

          <div className="font-sans text-base font-medium">
            <p className="mb-5">
              3.<span className="font-black"> SEARCH</span> <br />
              원하는 검색어 입력, 키워드에 해당하는 칵테일을 차례대로 나열
            </p>{" "}
          </div>
          <img
            src={CT_3}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />

          <div className=" font-sans text-base font-medium">
            <p className="mb-5">
              4.<span className="font-black"> LIKE</span> <br />
              찜하기 버튼을 누른 칵테일은 MYBAR 페이지에 저장
            </p>{" "}
          </div>
          <img
            src={CT_4}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />

          <div className="font-sans text-base font-medium">
            <p className="mb-5">
              5.<span className="font-black"> BASE</span> <br />
              칵테일 만들기에 필요한 대표 재료 소개 페이지
            </p>{" "}
          </div>
          <img
            src={CT_5}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />

          <div className="font-sans text-base font-medium">
            <p className="mb-5">
              6.<span className="font-black"> MORE</span> <br />
              재료 클릭 시, 해당 재료로 만들 수 있는 칵테일들을 매치{" "}
            </p>{" "}
          </div>
          <img
            src={CT_6}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />

          <div className=" font-sans text-base font-medium">
            <p className="font-black">8. 라이트 및 다크 모드</p>
          </div>
          <img
            src={CT_7}
            alt=""
            className="w-full h-auto border border-pure-ink/20 mb-10"
          />
        </div>
      </div>
    </div>
  );
}
