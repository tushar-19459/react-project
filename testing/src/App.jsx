import TreeView from "./components/Treeview"
import Treeitem from "./components/Menuitems"
import { PopupProvider } from "./components/PopupContext"
import PopUp from './components/PopUp'
import GetPopUp from "./components/GetPopUp"
import { DataProvider } from "./components/DataAcco"
import Accordion from "./components/Accordion"
import UserRef from "./components/UseRef"
import Outside from "./components/Outside"
function App() {

  return (
    <>
      {/* <TreeView data={Treeitem}></TreeView> */}
      {/* <PopupProvider>
        <GetPopUp></GetPopUp>
        <PopUp></PopUp>
      </PopupProvider> */}

      {/* <DataProvider>
        <Accordion></Accordion>
      </DataProvider> */}
    {/* <UserRef/> */}
    <Outside></Outside>
    </>
  )
}

export default App
