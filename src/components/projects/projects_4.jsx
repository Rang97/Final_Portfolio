import SS_main from "../../assets/SolarSystem_main.jpg";

export default function Project5({ onClose }) {
  // 기술 스택 목록
  const techStack = [
    "HTML",
    "Tailwind CSS",
    "JAVASCRIPT",
    "UI/UX DESIGN",
    "FIGMA",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-pure-ink/70 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-cream-paper text-pure-ink rounded-xs border-2 border-pure-ink shadow-2xl z-10 p-6 sm:p-10 md:p-12">
        <div className="flex justify-between items-center pb-6 border-b border-bone-gray/80 mb-8">
          <div className="font-sans text-sm font-bold tracking-widest text-charcoal-press uppercase">
            프로젝트 더보기 04
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
              OCTOBER 2023
            </span>
            <h2 className="font-sans font-bold text-5xl md:text-6xl uppercase leading-none">
              태양계 탐구
              <br />
              Solar Exploration
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Rang97/Solar_System_Exploration"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm font-bold px-4 py-2.5 bg-[#E8E7E4] border border-pure-ink/20 text-pure-ink hover:bg-pure-ink hover:text-cream-paper transition-all uppercase tracking-wider"
            >
              GITHUB ↗
            </a>
          </div>
        </div>

        {/* 본문 콘텐츠 (이미지 및 기획 의도/디자인 전략) */}
        <div className="space-y-6 w-full">
          <h5 className="font-sans font-bold text-lg uppercase tracking-wider mb-3 text-pure-ink">
            <span className="text-teal-500">✦ </span>
            기획 의도
          </h5>
          <p className="font-sans leading-relaxed">
            태양계를 탐사할 수 있는 사이트로 우리 태양계에 중점을 맞춘 정보를
            제공하는 사이트이다. 태양계의 기본적인 설명을 바탕으로 나사에서
            업데이트되는 새로운 정보와 우주와 관련된 다양한 팁들을 얻을 수 있다.
            이로인해 미지의 공간으로 생각하여 멀게만 느꼈던 우주라는 공간에
            가까워질 수 있는 기회를 가질 수 있다.
          </p>

          <h5 className="font-sans font-bold text-lg uppercase tracking-wider mb-3 text-pure-ink">
            <span className="text-teal-500">✦ </span>
            디자인 전략
          </h5>
          <p className="font-sans leading-relaxed">
            넓은 우주 사이의 공간과 구석 구석을 탐험하듯이 여행하는 느낌을
            컨셉으로 네온 컬러의 HUD 스타일을 이용하였으며 우주에 존재하는 별을
            강조하기 위해 어두운 컬러와 그에 대비되는 화려한 우주 이미지를
            사용하였다.
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
          <img
            src={SS_main}
            alt=""
            className="w-full h-auto border border-pure-ink/20"
          />
        </div>
      </div>
    </div>
  );
}
