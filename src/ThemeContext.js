import React from 'react';
import theme from './Theme.js'
import { ThemeProvider as EmotionThemeProvider} from "emotion-theming"

// first we're just gonna define the default state of the app upon the initial load

const defaultData = {
    dark: false,
    toggle: () => {}
}

const ThemeContext = React.createContext(defaultData);
const useTheme = () => React.useContext(ThemeContext);

// Now we're gonna define the logic of loading the proper theme
// we're gonna make a custom Hook that basically tells us wether dark mode is APPROACHABLE or not
// and sets us up for darkness from the get-go

const useDarkMode = () => {
    const [themeState, setThemeState] = React.useState({
        dark: false,
        hasThemeMounted: false
    });

    React.useEffect(() => {
    // Now we're gonna dedicate a const to keeping track of our darkness
    const IsDark = localStorage.getItem("dark") === "true";
    //Now what this useEffect is GOING TO DO...
    setThemeState({...themeState, dark: IsDark, hasThemeMounted: true})
    //We can tell React to skip applying an effect (and we don't want this part to run EVERY TIME ThemeManager Reloads!!) by passing
    //  an array (possibly empty) though useEffect as the SECOND argument
    }, []);

    return [themeState, setThemeState];
};

// This will set a LOCAL state which is our initial Theme upon load

const ThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useDarkMode();

    //now we have a problem 
    // we need to setup a workaround for in case the app starts to render in LIGHT while/before getting the the state from local storage
    // we're doing this so it's a nice clean surprise, and NOT light THEN dark

    if (!themeState.hasThemeMounted) {
        // This is JSX don't be fooled!
        return <div />;
    }

    const toggle = () => {
        const dark = !themeState.dark;
        localStorage.setItem("dark", JSON.stringify(dark));
        setThemeState({...themeState, dark});
    }

    
    // Now if we're here that means we have to
    // compe up with a final theme object to reflect that dark is SET TO true in our localStorage
    // and then we can pass it through EmotionThemeProvider JSX downt there

    const computedTheme = themeState.dark ? theme("dark") : theme("light");

    return (
        <EmotionThemeProvider theme={computedTheme}>
            <ThemeContext.Provider value={{
                dark:themeState.dark,
                toggle}
            } >
                {children}
            </ThemeContext.Provider>
        </EmotionThemeProvider>
    )

}



export { useTheme , ThemeProvider }