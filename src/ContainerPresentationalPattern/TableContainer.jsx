import { useState } from "react"
import { useEffect } from "react"

import Loader from "../HigherOrderComponentsPattern/Loader"
import TablePresentation from "./TablePresentation"

const TableContainer = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    // Stimulate API call that fetches data and sets loading to false
    setTimeout(() => {
      setData("Table data")
      setLoading(false)
    }, 2000)

  }, [])

  return (
    <div>
      <Loader loading={loading} WrappedComponent={TablePresentation} data={data} />
    </div>
  )

}

export default TableContainer
