import React from "react";

const Context = React.createContext('light');

function Provider({children}) {
       const [state, setState] = React.useState(false)

       return (
              <Context.Provider value={{state, setState}}>{children}</ Context.Provider>
       )
}

export {Context, Provider}