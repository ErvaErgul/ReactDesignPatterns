import Loader from "./HigherOrderComponentsPattern/Loader"
import Transaction from "./HigherOrderComponentsPattern/Transaction"
import Button from "./Composition/Button"
import ButtonWithBadge from "./Composition/ButtonWithBadge"
import TableContainer from "./ContainerPresentationalPattern/TableContainer"
import GlobalContextSetter from "./CustomHooks/GlobalContextSetter"
import CustomCart from "./RenderPropsPattern/CustomCart"
import CustomTabMenu from "./CompoundPattern/CustomTabMenu"

const App = () => {

  return (
    <>
      <div className="demoSection">
        HOC Demo - Loader Wrapper
        <Loader loading WrappedComponent={Transaction} transactionId="1" transactionCost="50$" />
        <Loader loading={false} WrappedComponent={Transaction} transactionId="2" transactionCost="25$" />
      </div>

      <hr />

      <div className="demoSection">
        Composition Demo
        <Button>Button</Button >
        <ButtonWithBadge badgeText="!">ButtonWithBadge</ButtonWithBadge>
      </div>

      <hr />

      <div className="demoSection">
        Container & Presentational Demo
        <TableContainer />
      </div>

      <hr />

      <div className="demoSection">
        Global Context Using "window" Object
        <GlobalContextSetter />
      </div>

      <hr />

      <div className="demoSection">
        Render Props Pattern
        <CustomCart />
      </div>


      <div className="demoSection">
        Compound Components Pattern
        <CustomTabMenu />
      </div>
    </>
  )

}

export default App
