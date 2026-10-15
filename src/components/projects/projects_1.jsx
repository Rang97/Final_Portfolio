export default function Project1({ onClose }) {
  return (
    /* 1. 모달 전체 배경 (어두운 반투명 백드롭) */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-pure-ink/70 backdrop-blur-sm animate-fade-in">
      {/* 배경 클릭 시 닫기 */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-cream-paper text-pure-ink rounded-xs border-2 border-pure-ink shadow-2xl z-10 p-6 sm:p-10 md:p-12">
        <div className="flex justify-between items-center pb-6 border-b border-bone-gray/80 mb-8">
          <div className="font-sans text-sm font-bold tracking-widest text-charcoal-press uppercase">
            ✦ 프로젝트 더보기 01
          </div>
          <button
            onClick={onClose}
            className="font-sans text-sm font-bold px-3 py-1.5 bg-pure-ink text-cream-paper hover:bg-teal-300 hover:text-pure-ink transition-colors cursor-pointer uppercase tracking-wider"
          >
            X
          </button>
        </div>

        {/* 헤더 (타이틀 & 깃허브/라이브 버튼) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-10 border-b border-bone-gray/80 mb-10">
          <div>
            <span className="font-mono text-sm  uppercase mb-2 block text-teal-800">
              JAN 2, 2026
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              Saju-on
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

            <a
              href="https://forge-demo.com"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm  font-bold px-4 py-2.5 bg-[#E8E7E4] border border-pure-ink/20 text-pure-ink hover:bg-pure-ink hover:text-cream-paper transition-all uppercase tracking-wider"
            >
              LIVE SITE ↗
            </a>
          </div>
        </div>

        {/* 3. 피그마에서 작업한 이미지들을 자유롭게 배치하는 영역 */}
        <div className="space-y-6 w-full">
          <img
            src="/images/projects/p1_01.png"
            alt="Project 1 Overview"
            className="w-full h-auto border border-pure-ink/20"
          />
          <p className="font-sans">설명 어쩌구저쩌구</p>
          <img
            src="/images/projects/p1_02.png"
            alt="Project 1 Details"
            className="w-full h-auto border border-pure-ink/20"
          />
        </div>
      </div>
    </div>
  );
}
