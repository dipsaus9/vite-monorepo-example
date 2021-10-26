import { ReactElement } from "react"

export function Button({ children }: { children: ReactElement | string }) {
  return <button type="button">{children}</button>
}
