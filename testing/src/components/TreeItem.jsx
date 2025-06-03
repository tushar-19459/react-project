import { useState } from "react"
import TreeList from "./TreeList"
export default function TreeItem({ item }) {

    const [children, setchildren] = useState({})

    function handleClick(lable) {
        setchildren({
            ...children, [lable]: !children[lable]
        })
    }

    return (
        <>
            <li>{item.lable}{item && item.children && item.children.length  ? <span onClick={() => handleClick(item.lable)}> {children[item.lable]?'-':'+'} </span> : null}</li>
            {item && item.children && item.children.length && children[item.lable] ? <TreeList list={item.children}></TreeList> : null}
        </>
    )
}