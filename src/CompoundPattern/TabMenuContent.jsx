import { useContext } from "react"
import { TabMenuContext } from "./TabMenu"

const TabMenuContent = () => {

  const tabMenuContext = useContext(TabMenuContext)

  return (
    <>
      {tabMenuContext.tabContents[tabMenuContext.activeTabIndex]}
    </>
  )

}

export default TabMenuContent
