import React from "react";
import { Context } from '../Context/themeContext';

export const useTheme = () => {
       const ctx = React.useContext(Context)

       return [ctx.state, ctx.setState]
}