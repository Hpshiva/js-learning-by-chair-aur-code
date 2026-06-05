

function createThemeManager() {
    let theme = "light"

    function toggleTheme() {
        if (theme === "light")
            return theme = "dark"
        else return theme = "light"

    }
    function getTheme() {
        return theme
    }
    return {
        toggleTheme, getTheme
    }
}
const res = createThemeManager()
console.log(res.getTheme())
console.log(res.toggleTheme())