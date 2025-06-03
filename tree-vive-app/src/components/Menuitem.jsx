import { useState } from 'react'
import Menulist from './Menulist'
export default function Menuitem({ item }) {

    const [children, setchildren] = useState({})

    function handleclick(itemlable) {
        setchildren(
            {
                ...children,
                [itemlable]: !children[itemlable]
            }
        )
        console.log(children)
    }

    return (
        <div>
            {item.lable}
            {item && item.children && item.children.length ? <span onClick={() => handleclick(item.lable)}>+</span> : null}
            {item && item.children && item.children.length && children[item.lable] ? <Menulist list={item.children}></Menulist> : null}
        </div>
    )
}