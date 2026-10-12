export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center text-[13px] pt-10 border-t border-bone-gray gap-4">
      <div>DUTIES ENGINE [v.6.0]</div>
      <div className="flex gap-2">
        <a href="https://github.com" className="hover:underline">
          GITHUB
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-charcoal-press inline-block"></span>
        ON-DUTY / BUSAN
      </div>
    </footer>
  );
}
