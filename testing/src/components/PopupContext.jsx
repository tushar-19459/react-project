import { createContext, useContext, useState } from "react";

const popup = createContext()

export function PopupProvider({children}){
    const [pop,setpop] = useState(false)
    return(
        <popup.Provider value={{pop,setpop}}>
            {children}
        </popup.Provider>
    )

}
export function UsePopup(){
    return useContext(popup)
}