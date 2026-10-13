import { useState } from "react";

export default function DesignSection() {
  const [activeWindow, setActiveWindow] = useState("uiux");

  return (
    <section className="relative overflow-hidden mb-20">
      {/* 섹션 타이틀 */}
      <div className="mb-10">
        <h3 className="font-accent font-black tracking-wide uppercase text-3xl mb-2">
          # Design
        </h3>
        <h2 className="font-sans font-extrabold text-6xl mb-10">디자인</h2>
      </div>

      <div className="relative w-full min-h-[650px]  p-4 sm:p-10 ">
        <div
          onClick={() => setActiveWindow("uiux")}
          style={{ zIndex: activeWindow === "uiux" ? 30 : 10 }}
          className={`
            absolute top-6 left-4 w-[90%] sm:w-[45%] 
            bg-[#e2e2e2] border-pure-ink cursor-pointer shadow-md
            ${activeWindow === "uiux"}
          `}
        >
          {/* 윈도우 타이틀바 */}
          <div className="bg-pure-ink text-cream-paper px-3 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56] inline-block "></span>
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E] inline-block "></span>
              <span className="w-2 h-2 rounded-full bg-[#27C93F] inline-block "></span>
              <span className="font-mono text-xs font-bold tracking-widest ml-2 uppercase text-cream-paper/90">
                UI_UX_PROJECT.fig
              </span>
            </div>
            <span className="font-mono text-sm font-bold">×</span>
          </div>

          {/* 창 내부 콘텐츠 */}
          <div className="p-6 sm:p-8 space-y-2">
            <h4 className="font-sans font-bold text-3xl uppercase tracking-tight text-pure-ink">
              애기야가자 UI/UX
            </h4>
            <p className="font-sans text-base text-pure-ink/80 leading-relaxed">
              사용자 플로우를 분석하고 피그마를 통해 프로토타이핑 및
            </p>

            <div className="w-full h-64 bg-[#E8E7E4] border border-pure-ink/20 overflow-hidden relative">
              <img
                src="/assets/Sajuon.png"
                alt="UI/UX Design"
                className="w-full h-full object-cover grayscale contrast-110 "
              />
            </div>

            <div className="pt-2 flex justify-between items-center">
              <a
                href="https://figma.com"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs font-bold uppercase underline underline-offset-4 hover:text-teal-700"
              >
                VIEW IN FIGMA ↗
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- 2번 창: GRAPHIC & BRANDING ---------------- */}
        <div
          onClick={() => setActiveWindow("graphic")}
          style={{ zIndex: activeWindow === "graphic" ? 30 : 10 }}
          className={`
            absolute top-36 sm:top-28 right-4  w-[90%] sm:w-[45%] 
            bg-[#FFDE59] cursor-pointer shadow-md
            ${activeWindow === "graphic"}
          `}
        >
          {/* 윈도우 타이틀바 */}
          <div className="bg-pure-ink text-cream-paper px-3 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56] inline-block "></span>
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E] inline-block "></span>
              <span className="w-2 h-2 rounded-full bg-[#27C93F] inline-block "></span>
              <span className="font-mono text-xs font-bold tracking-widest ml-2 uppercase text-cream-paper/90">
                GRAPHIC_WORKS.psd
              </span>
            </div>
            <span className="font-mono text-sm font-bold">×</span>
          </div>

          {/* 창 내부 콘텐츠 */}
          <div className="p-6 sm:p-8 space-y-2">
            <h4 className="font-sans font-bold text-3xl uppercase tracking-tight text-pure-ink">
              Graphic & Goods Design
            </h4>
            <p className="font-sans text-sm text-pure-ink/90 leading-relaxed font-medium">
              슬로건, 포스터, 굿즈(키링, 스티커) 및 브랜드 아이덴티티를 살린
              그래픽 디자인 작업물 리스트입니다.
            </p>

            {/* 그래픽 이미지 */}
            <div className="w-full h- h-64 bg-pure-ink/10 border border-pure-ink/30 overflow-hidden relative">
              <img
                src="/assets/BlackHeart.png"
                alt="Graphic Design"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="pt-2 flex justify-between items-center">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-pure-ink text-cream-paper">
                Adobe Illustrator / Photoshop
              </span>
              <span className="font-mono text-xs font-bold uppercase underline underline-offset-4">
                CHECK ARCHIVE ↗
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
