import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center h-full mb-20 z-50">
      <img src={logo.src} alt="logo-kanji-renshuu" className="w-[300px] h-[300px] z-50" />
      <div className="flex items-center z-50 mt-4 space-x-2">
        <InteractiveHoverButton href="/">List Kanji</InteractiveHoverButton>

        <InteractiveHoverButton href="/renshu">Latihan</InteractiveHoverButton>
      </div>
    </header>
  );
}
