import { useState } from "react"
import { useEffect } from "react"

const useGlobalContext = () => {
  const [globalData, setGlobalData] = useState({
    data: "globalData"
  })

  useEffect(() => {
    window.globalData = globalData

  }, [globalData])

  return [globalData.data, setGlobalData]
}

export default useGlobalContext
