import profile from "../assets/profile.jpg";

export default function AboutSection() {
  return (
    <section>
      <h3 className="font-accent font-black tracking-wide uppercase text-3xl mb-2">
        # About
      </h3>
      <h2 className="font-sans font-extrabold text-6xl mb-10">소개글</h2>
      {/* LEFT COLUMN: TITLE & PROFILE IMAGE */}
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-12 mb-28">
        <div className="flex flex-col gap-6">
          {/* 프로필 이미지 영역 */}
          <div className="w-full h-[390px] bg-bone-gray rounded-sm overflow-hidden relative">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover contrast-125"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: BIO & DETAILED INFO */}
        <div className="flex flex-col justify-between pt-2">
          {/* Main Bio Paragraph */}
          <div>
            <h4 className="mb-10 text-2xl md:text-4xl font-medium uppercase">
              UI Designer turned Developer
            </h4>
            <div className="font-sans text-lg leading-7 text-charcoal-press ">
              <p className="pb-5">
                UI/UX 디자이너로 일하며 웹과 앱이 동작하는 과정에 큰 매력을
                느꼈고, 이제는 이를 직접 서비스로 구현하는 개발자로 성장하고
                있습니다. 디자이너와 개발자 양쪽의 언어를 완벽히 이해하여
                커뮤니케이션 격차를 줄이고, 디자인 의도를 정확히 반영하면서도
                기술적 한계를 넘어서는 최적의 타협점을 찾아내는 매개체가
                되겠습니다.
              </p>
              <p className="pb-5">
                사용자가 마주하는 첫 화면의 디테일부터 서버의 안정성까지 '더
                나은 사용자 경험'을 만드는 데 집중합니다. UI/UX에 대한 깊은
                이해도를 바탕으로 프론트엔드의 디테일한 렌더링을 살리고,
                안전하고 효율적인 백엔드 환경을 함께 설계합니다.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 pt-5 pb-5 border-t border-bone-gray font-sans ">
            <div>
              <span className=" text-pure-ink block ">
                E-mail | rjl010305@gmail.com
              </span>
            </div>
            <div>
              <span className=" text-pure-ink block ">
                <a href="https://github.com/Rang97">
                  GitHub | https://github.com/Rang97
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
