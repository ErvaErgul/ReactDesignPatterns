import { useState } from "react"

import TabMenu from "./TabMenu"

const CustomTabMenu = () => {

  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const tabOptions = [
    "Tab 1",
    "Tab 2",
    "Tab 3"
  ]

  const tabContents = [
    <div>Content 1</div>,
    <div>Content 2</div>,
    <div>Content 3</div>,
  ]

  return (
    <TabMenu activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} tabOptions={tabOptions} tabContents={tabContents} />
  )

}

export default CustomTabMenu
