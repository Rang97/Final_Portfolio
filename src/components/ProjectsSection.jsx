import { useState } from "react";
import { projectComponents } from "./projects";
import sajuon from "../assets/Sajuon.png";
import cocktail from "../assets/Cocktail.png";
import timecapsule from "../assets/Timecapsule.png";
import blackheart from "../assets/BlackHeart.png";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "01",
      title: "SAJO-ON",
      date: "JAN 2, 2026",
      description:
        "사주 오행을 기반으로 개인의 게임 성향을 파악한 뒤, 게임 파티를 모집하고 참여하고 파티원 간의 오행 궁합을 확인할 수 있는 사이트",
      tags: ["Spring Boot", "MySQL", "React"],
      image: sajuon,
      folderBg: "bg-[#1C1C1C]",
      tabBg: "bg-[#1C1C1C]",
      textColor: "text-cream-paper",
      accentBorder: "border-bone-gray/20",
      hoverFolderBg: "group-hover:bg-[#1B2CC1]",
      hoverTabBg: "group-hover:bg-[#1B2CC1]",
      hoverTextColor: "group-hover:text-white",
    },
    {
      id: "02",
      title: "8Bit - TimeCapsule",
      date: "FEB 14, 2026",
      description:
        "미래로 날짜를 설정한 뒤, 글을 작성하고 보관하면 설정한 날 이후로 글을 열람할 수 있는 타입캡슐 웹사이트",
      tags: ["Spring Boot", "REST API"],
      image: timecapsule,
      folderBg: "bg-[#282B30]",
      tabBg: "bg-[#282B30]",
      textColor: "text-cream-paper",
      accentBorder: "border-bone-gray/20",
      hoverFolderBg: "group-hover:bg-[#67C090]",
      hoverTabBg: "group-hover:bg-[#67C090]",
      hoverTextColor: "group-hover:text-pure-ink",
    },
    {
      id: "03",
      title: "Cock-Tail",
      date: "MAR 20, 2026",
      description:
        "CocktailDB API를 활용한 칵테일을 탐색하고 찜할 수 있는 웹사이트",
      tags: ["React", "Tailwind CSS"],
      image: cocktail,
      folderBg: "bg-[#DCDAD7]",
      tabBg: "bg-[#DCDAD7]",
      textColor: "text-pure-ink",
      accentBorder: "border-pure-ink/10",
      hoverFolderBg: "group-hover:bg-[#D97706]",
      hoverTabBg: "group-hover:bg-[#D97706]",
      hoverTextColor: "group-hover:text-white",
    },
    {
      id: "04",
      title: "Echo Engine",
      date: "MAY 10, 2026",
      description:
        "High-performance distributed event streaming framework written in Go.",
      tags: ["GO", "KUBERNETES", "GRPC"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
      folderBg: "bg-[#121212]",
      tabBg: "bg-[#121212]",
      textColor: "text-cream-paper",
      accentBorder: "border-bone-gray/20",
      hoverFolderBg: "group-hover:bg-[#7D9C65]",
      hoverTabBg: "group-hover:bg-[#7D9C65]",
      hoverTextColor: "group-hover:text-white",
    },
    {
      id: "05",
      title: "BLACK HEART",
      date: "AUG 18, 2026",
      description:
        "오래된 빈티지 연필과 단종된 모델을 수집하고 소개하는 독특한 감성의 '연필가게 흑심'사이트 리뉴얼 프로젝트",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      image: blackheart,
      folderBg: "bg-[#57595B]",
      tabBg: "bg-[#57595B]",
      textColor: "text-cream-paper",
      accentBorder: "border-bone-gray/20",
      hoverFolderBg: "group-hover:bg-[#0B0909]",
      hoverTabBg: "group-hover:bg-[#0B0909]",
      hoverTextColor: "group-hover:text-white",
    },
  ];

  const SelectedModalComponent = selectedProject
    ? projectComponents[selectedProject.id]
    : null;

  return (
    <section className="mb-28">
      <h3 className="font-accent font-black tracking-wide uppercase text-3xl mb-2">
        # Projects
      </h3>
      <h2 className="font-sans font-extrabold text-6xl mb-10">프로젝트</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group w-full flex flex-col cursor-pointer"
          >
            <div className="flex items-end relative z-10 px-0.5">
              <div
                style={{
                  clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                }}
                className={`
                  ${project.tabBg} ${project.textColor} 
                  ${project.hoverTabBg} ${project.hoverTextColor}
                  rounded-t-sm ml-2 px-8 py-3 pt-3 pr-10 font-mono text-sm font-bold uppercase -mb-[1px]
                  transition-colors duration-300 ease-out
                `}
              >
                ✦ PROJECT {project.id}
              </div>
            </div>
            <div
              className={`
                w-full rounded-sm p-6 sm:p-7 
                ${project.folderBg} ${project.textColor} 
                ${project.hoverFolderBg} ${project.hoverTextColor}
                border ${project.accentBorder} shadow-xl flex flex-col justify-between flex-1 min-h-[390px]
                transition-colors duration-300 ease-out
              `}
            >
              {/* 폴더 내부 */}
              <div className="flex flex-col sm:flex-row gap-6 items-stretch h-full">
                {/*설명, 제목, 태그 */}
                <div className="w-full sm:w-1/2 flex flex-col justify-between space-y-4">
                  <div>
                    {/* 날짜 */}
                    <div className="flex items-center gap-2 font-mono text-sm mb-3 opacity-80">
                      <span className="w-2 h-2 rounded-full bg-current inline-block"></span>
                      <span>{project.date}</span>
                    </div>

                    {/* 제목 */}
                    <h3 className="font-display text-4xl sm:text-5xl leading-[0.95] tracking-tight uppercase mb-3">
                      {project.title}
                    </h3>

                    {/* 설명 */}
                    <p className="font-sans text-ms  leading-[1.45] opacity-90 mb-4">
                      {project.description}
                    </p>

                    {/* 링크 */}
                    <span className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase underline underline-offset-4 hover:opacity-75 transition-opacity">
                      VIEW DETAILS ↗
                    </span>
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] font-bold px-2 py-0.5 bg-pure-ink text-cream-paper border border-bone-gray/10 rounded-xs uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 이미지 */}
                <div className="w-full sm:w-1/2 relative flex items-center pt-2 sm:pt-0">
                  {/* 이미지 박스 */}
                  <div className="w-full h-full rounded-sm overflow-hidden shadow-inner relative bg-black/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 🌟 선택된 프로젝트 모달 렌더링 영역 (개별 컴포넌트에 project 정보와 onClose 전달) */}
      {SelectedModalComponent && (
        <SelectedModalComponent
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
