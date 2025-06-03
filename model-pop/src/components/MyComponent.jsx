import { usePopup } from "./PopContext";

export default function MyComponent() {
  const { setpopup } = usePopup();

  return (
    <div>
      <button onClick={() => setpopup(true)}>Show PopUp</button>
    </div>
  );
}
