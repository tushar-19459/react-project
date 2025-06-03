import { usePopup } from "./PopContext";

export default function popup() {
    const { popup, setpopup } = usePopup()

    if (!popup) return null

    return (
        <div>
            <button onClick={() => setpopup(false)}>x</button>
            <header>
                <h1>this is the popup</h1>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto non consequatur harum recusandae aliquid, vero voluptas cum, doloribus officiis ullam sapiente dolor est dolores? Tenetur, pariatur. Magni non soluta necessitatibus!</p>
            <footer>&copy;</footer>
        </div>

    )
}