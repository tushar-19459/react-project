import { PopupProvider } from "./components/PopContext";
import MyComponent from "./components/MyComponent";
import Popup from "./components/popup";

export default function App() {
  return (
    <PopupProvider>
      <MyComponent />
      <Popup />
    </PopupProvider>
  );
}
