import { ReactNode } from "react"

export function Button({ children }: { children: ReactNode }) {
  return <button type="button">{children}</button>
}
