import { useContext } from "react"
import { TabMenuContext } from "./TabMenu"

const TabMenuHeaderButton = ({ tabOption, index }) => {

  const tabMenuContext = useContext(TabMenuContext)

  return (
    <button onClick={() => tabMenuContext.setActiveTabIndex(index)}>
      {tabOption}
    </button>
  )

}

export default TabMenuHeaderButton
