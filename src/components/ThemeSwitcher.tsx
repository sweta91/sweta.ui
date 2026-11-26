
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="theme-switcher" role="group" aria-label="Theme selection">
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          className={`theme-option ${
            mounted && theme === value ? "active" : ""
          }`}
          onClick={() => setTheme(value)}
          aria-label={`Switch to ${label} theme`}
          title={label}
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  );
}
