export default function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      skills: ["Next.js", "React", "React Native", "Tailwind CSS", "Zustand"],
    },
    {
      category: "Backend",
      skills: ["JavaScript", "JAVA", "Spring Boot"],
    },
    {
      category: "Database & ORM",
      skills: ["MySQL", "Oracle SQL"],
    },
    ,
    {
      category: "Tooling & Collaboration",
      skills: ["Git", "GitHub", "Figma", "Notion"],
    },
  ];

  return (
    <section className="mb-28">
      {/* 섹션 타이틀 */}

      <h3 className="font-accent font-black tracking-wide uppercase text-3xl mb-3">
        # SKILL STACK
      </h3>
      <h2 className="font-sans font-extrabold text-6xl mb-10">기술 스택</h2>

      <div className="border-t border-bone-gray/80 divide-y divide-bone-gray/80">
        {techCategories.map((item, idx) => (
          <div
            key={idx}
            className="py-4 sm:py-6 grid grid-cols-1 md:grid-cols-4 gap-3 items-start"
          >
            {/* 왼쪽: 분류명 */}
            <div className="font-mono text-base font-bold tracking-widest text-charcoal-press uppercase md:pt-2">
              {item.category}
            </div>

            {/* 오른쪽: 기술 태그 뱃지들 */}
            <div className="md:col-span-3 flex flex-wrap gap-2">
              {item.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="font-mono text-sm  px-3 py-1.5 bg-[#E8E7E4] text-pure-ink border border-pure-ink/15 rounded-xs tracking-wide uppercase "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
