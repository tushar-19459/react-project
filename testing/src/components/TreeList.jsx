import TreeItem from './TreeItem'
export default function TreeList({ list }) {
    return (
        <ul>
            {list.map((listitem,i)=>
            <TreeItem item={listitem} key={i}></TreeItem>
            )}
        </ul>
    )
}