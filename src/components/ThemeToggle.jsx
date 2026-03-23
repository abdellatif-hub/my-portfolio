import { MoonIcon, SunIcon } from './Icons';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      className="btn btn-outline-light rounded-circle d-inline-flex align-items-center justify-content-center theme-toggle"
      aria-label="Changer de theme"
    >
      {isDark ? <SunIcon className="icon-sm" /> : <MoonIcon className="icon-sm" />}
    </button>
  );
}
