"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export type Language = "en" | "es" | "fr" | "de" | "zh";

const languages: { value: Language; label: string; name: string }[] = [
  { value: "en", label: "EN", name: "English" },
  { value: "es", label: "ES", name: "Español" },
  { value: "fr", label: "FR", name: "Français" },
  { value: "de", label: "DE", name: "Deutsch" },
  { value: "zh", label: "ZH", name: "中文" },
];

export default function LanguageSwitcher({
  language,
  onChange,
}: {
  language: Language;
  onChange: (language: Language) => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <label className="language-switcher" aria-label="Select language">
      <span className="language-code">{mounted ? language.toUpperCase() : "EN"}</span>
      <select
        value={mounted ? language : "en"}
        onChange={(event) => onChange(event.target.value as Language)}
        aria-label="Language"
      >
        {languages.map((item) => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <ChevronDown className="language-chevron" size={14} />
    </label>
  );
}
