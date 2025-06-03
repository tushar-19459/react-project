import Menuitem from './Menuitem'
export default function Menulist({ list }) {
    return (
        list.map((listitem, index) =>
            <Menuitem item={listitem} key={index}></Menuitem>
        )
    )
}