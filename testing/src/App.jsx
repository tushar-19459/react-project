import TreeView from "./components/Treeview"
import Treeitem from "./components/Menuitems"
import { PopupProvider } from "./components/PopupContext"
import PopUp from './components/PopUp'
import GetPopUp from "./components/GetPopUp"
import { DataProvider } from "./components/DataAcco"
import Accordion from "./components/Accordion"
function App() {

  return (
    <>
      {/* <TreeView data={Treeitem}></TreeView> */}
      {/* <PopupProvider>
        <GetPopUp></GetPopUp>
        <PopUp></PopUp>
      </PopupProvider> */}

      <DataProvider>
        <Accordion></Accordion>
      </DataProvider>

    </>
  )
}

export default App
