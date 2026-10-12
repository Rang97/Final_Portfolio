import { useState, useRef } from "react";

export default function HeroSection() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ가나다라마바사아자차카타파하";

  const line1Original = "THE ARCHIVE OF # JOO RANG";

  const line2Part1 = "디자이너에서";
  const line2Part2 = "개발자까지";
  const line2Original = line2Part1 + line2Part2;

  const [line1, setLine1] = useState(line1Original);
  const [line2, setLine2] = useState(line2Original);
  const intervalRef = useRef(null);

  //스크램블 효과
  const triggerScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    const maxIteration = 30;

    intervalRef.current = setInterval(() => {
      // 첫 번째 줄 스크램블
      setLine1(
        line1Original
          .split("")
          .map((char, index) =>
            char === " " || index < iteration / 2
              ? char
              : chars[Math.floor(Math.random() * chars.length)],
          )
          .join(""),
      );

      // 두 번째 줄 스크램블
      setLine2(
        line2Original
          .split("")
          .map((char, index) =>
            char === " " || index < iteration
              ? char
              : chars[Math.floor(Math.random() * chars.length)],
          )
          .join(""),
      );

      iteration += 1;

      if (iteration > maxIteration) {
        clearInterval(intervalRef.current);
        setLine1(line1Original);
        setLine2(line2Original);
      }
    }, 50);
  };

  return (
    <>
      <section
        onMouseEnter={triggerScramble}
        className="py-15 group cursor-pointer select-none"
      >
        <div className="flex flex-wrap gap-3 tracking-wide text-4xl sm:text-6xl md:text-7xl font-accent font-extrabold">
          {line1}
        </div>

        <div className="flex flex-col gap-5 tracking-wide text-6xl sm:text-8xl md:text-9xl font-sans font-extrabold mt-4">
          <span>{line2.slice(0, 6)}</span>
          <span>{line2.slice(6)}</span>
        </div>
      </section>

      <section className="flex flex-wrap justify-between items-center gap-4 py-4 border-y border-bone-gray text-sm font-medium mb-16">
        <div>ROLE: PROGRAMMER</div>
        <div className="flex items-center gap-2">
          LOCATION: BUSAN, KOREA [UTC+9]
          <span className="w-2 h-2 rounded-full bg-teal-500 inline-block animate-pulse"></span>
          ON / OFF
        </div>
      </section>
    </>
  );
}
