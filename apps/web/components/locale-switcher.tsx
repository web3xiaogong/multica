"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { cn } from "@multica/ui/lib/utils";
import { locales } from "@/i18n/routing";

const localeLabels: Record<(typeof locales)[number], string> = {
  "zh-CN": "简体中文",
  en: "English",
};

export function LocaleSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();
  const currentPath = pathname || "/";

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Locale switcher">
      {locales.map((locale) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("locale", locale);
        const href = params.size > 0 ? `${currentPath}?${params.toString()}` : currentPath;

        return (
          <Link
            key={locale}
            href={href}
            className={cn(
              "rounded-md px-2 py-1 transition-colors hover:text-foreground",
              currentLocale === locale && "bg-muted text-foreground",
            )}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </nav>
  );
}
