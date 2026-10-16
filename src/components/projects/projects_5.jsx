import BL_main from "../../assets/BlackHeart_main.jpg";

export default function Project5({ onClose }) {
  // 기술 스택 목록
  const techStack = ["HTML", "CSS", "JAVASCRIPT", "UI/UX DESIGN", "FIGMA"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-pure-ink/70 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-cream-paper text-pure-ink rounded-xs border-2 border-pure-ink shadow-2xl z-10 p-6 sm:p-10 md:p-12">
        <div className="flex justify-between items-center pb-6 border-b border-bone-gray/80 mb-8">
          <div className="font-sans text-sm font-bold tracking-widest text-charcoal-press uppercase">
            프로젝트 더보기 05
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
              FEBRUARY 2023
            </span>
            <h2 className="font-sans font-bold text-5xl md:text-6xl uppercase leading-none">
              흑심 BLACKHART <br />
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Rang97/BlackHeart"
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
            작은 연필 가게 흑심은 가게를 찾아오는 손님에게 연필과 함께 옛날의
            추억에 대한 향수를 일으킨다. 나는 이 사이트에 접속한 사용자가 연필을
            자주 사용하던 옛날의 한 순간으로 돌아가는 경험을 하면 좋겠다고
            생각하기에 빈티지한 느낌을 강조하려고 한다.
          </p>

          <h5 className="font-sans font-bold text-lg uppercase tracking-wider mb-3 text-pure-ink">
            <span className="text-teal-500">✦ </span>
            디자인 전략
          </h5>
          <p className="font-sans leading-relaxed">
            기존 사이트에서 이미지가 크게 배치되어있는 것은 좋으나, 사이트의
            메뉴 부분이 잘 보이지 않기에 정보를 찾는 것이 불편한 부분이 있다.
            리뉴얼된 사이트에서는 이를 보완하고, 단순하게 이미지만을
            배치하기보다는 흑심이 가지고 있는 다양한 매력을 전시한다는 느낌으로
            디자인하였다.
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
            src={BL_main}
            alt=""
            className="w-full h-auto border border-pure-ink/20"
          />
        </div>
      </div>
    </div>
  );
}
