import Tabestest from "./Tabestest"
export default function Tabes(){

    const data = [
        {
            lable:"tabe 1",
            content:"this is tab 1"
        },
        {
            lable:"tabe 2",
            content:"this is tab 2"
        },
        {
            lable:"tabe 3",
            content:"this is tab 3"
        },
    ]

    return(
        <Tabestest data={data}></Tabestest>
    )
}