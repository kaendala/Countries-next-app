'use client'
import { useThemeContext } from "@/context/ThemeContext/ThemeContext";
import { Brightness5, DarkMode } from "@mui/icons-material";
import s from './ButtonChangeTheme.module.scss';

const ButtonChangeTheme=()=>{
    const {theme, changeTheme } = useThemeContext();
    return (
        <div id="changeTheme" className={s.changeTheme} onClick={changeTheme}>
            {theme==='light'?<DarkMode/>: <Brightness5/>}
            <p className={s.text}>{theme ==='light'?'Dark':'Light'} Mode </p>
        </div>
    )
}
export default ButtonChangeTheme