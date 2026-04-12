import {create} from "zustand"

const initializeTheme = () => {
  const savedTheme = localStorage.getItem("chat-theme") || "coffee"
  document.documentElement.setAttribute("data-theme", savedTheme)
  return savedTheme
}

export const useThemeStore = create((set)=>({
    theme: initializeTheme(),
    setTheme: (theme)=>{
        localStorage.setItem("chat-theme",theme)
        document.documentElement.setAttribute("data-theme",theme)
        set({ theme })
    }
}))