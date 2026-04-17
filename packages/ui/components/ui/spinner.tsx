import { cn } from "@multica/ui/lib/utils"
import { Loader2Icon } from "lucide-react"
import { useUiTranslations } from "@multica/ui/lib/use-ui-translations"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  const t = useUiTranslations("ui.common")
  return (
    <Loader2Icon role="status" aria-label={t("loading")} className={cn("size-4 animate-spin", className)} {...props} />
  )
}

export { Spinner }
