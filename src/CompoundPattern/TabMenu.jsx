import { createContext } from "react"

import TabMenuHeader from "./TabMenuHeader"
import TabMenuContent from "./TabMenuContent"

export const TabMenuContext = createContext()

const TabMenu = ({ activeTabIndex, setActiveTabIndex, tabOptions, tabContents }) => {

  return (
    <TabMenuContext.Provider value={{ activeTabIndex, setActiveTabIndex, tabOptions, tabContents }}>
      <div className="tab-menu">
        <TabMenuHeader></TabMenuHeader>
        <TabMenuContent></TabMenuContent>
      </div>
    </TabMenuContext.Provider>
  )

}

export default TabMenu
