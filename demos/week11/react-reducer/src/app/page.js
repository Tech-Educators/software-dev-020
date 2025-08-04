'use client'
import { useTheme } from "@/context/ThemeContext"
import UserComponent from "@/components/UserComponent"

// of course, here we've just made the whole page a client compoonent - but you'd probably just do it on the individual component or Theme Button for example. The mechanics of using useTheme ect work the same in that compnoent
export default function Page() {

  // useTheme returns an object so just destructuing that
  const {state, dispatch} = useTheme()

  // state looks like this {theme: 'light'}
  // the dispatch function calls 'themeReducer' that we wrote earlier
  return (
    <div>Hello world
      <button className={state.theme}
      onClick={() => {
        dispatch({type: state.theme == 'light' ? 'dark' : 'light'})
      }}>
        Toggle theme
      </button>

      <br />
      <button className={state.theme}
        onClick={() => {
          dispatch({type: "colourblind"})
        }} 
      >
        toggle colourblind
      </button>
      <UserComponent />
    </div>
  )
}