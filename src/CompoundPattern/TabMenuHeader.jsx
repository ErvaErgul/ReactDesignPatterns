import { useContext } from "react"
import { TabMenuContext } from "./TabMenu"

import TabMenuHeaderButton from "./TabMenuHeaderButton"

const TabMenuHeader = () => {

  const tabMenuContext = useContext(TabMenuContext)

  return (
    <div>
      {tabMenuContext.tabOptions.map((tabOption, index) => {
        return (
          <TabMenuHeaderButton key={index} index={index} tabOption={tabOption} />
        )
      })}

      <input></input>
    </div>
  )

}

export default TabMenuHeader
