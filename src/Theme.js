// Let's start by defining light mode and dark mode in terms of colors...

const white = "#FFFFFF";
const black = "#161617";
const gray = "#F8F8F9";

const lightMode = {
  background: gray,
  body: black 
}

const darkMode = {
  background: black,
  body: white
}

const theme = mode => (mode === "dark" ? darkMode : lightMode)


export default theme;