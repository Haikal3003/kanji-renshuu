import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center h-full mb-10 px-4 text-center z-50">
      <img src={logo.src} alt="logo-kanji-renshuu" className="w-48 h-48 max-md:w-56 max-md:h-56 z-50" />
      <div className="flex  justify-center items-center z-50 mt-4 gap-2 sm:gap-4">
        <InteractiveHoverButton href="/">List Kanji</InteractiveHoverButton>
        <InteractiveHoverButton href="/renshu">Latihan</InteractiveHoverButton>
      </div>
    </header>
  );
}
