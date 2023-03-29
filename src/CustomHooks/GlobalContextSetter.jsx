import useGlobalContext from "./useGlobalContext"

const GlobalContextSetter = () => {

  const [globalData, setGlobalData] = useGlobalContext()

  return (
    <div>
      <input value={globalData} onChange={(e) => setGlobalData({ data: e.target.value })}></input>

      <p>
        {globalData}
      </p>
    </div>
  )

}

export default GlobalContextSetter
