'use client'
import { useTheme } from "@/context/ThemeContext"
import UserComponent from "@/components/UserComponent"

// of course, here we've just made the whole page a client compoonent - but you'd probably just do it on the individual component or Theme Button for example. The mechanics of using useTheme ect work the same in that compnoent
export default function Page() {

  // useTheme returns an object so just destructuing that
  const {theme, setTheme} = useTheme()

  return (
    <div>Hello world
      <button className={theme}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}>
        Toggle theme
      </button>
      <UserComponent />
    </div>
  )
}