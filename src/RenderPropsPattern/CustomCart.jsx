import Card from "./Card"

const CustomizableCart = () => {

  const renderHeader = () => {
    return (
      <div>
        Custom Header
      </div>
    )
  }

  return (
    <Card renderHeader={renderHeader} >
      Card Content
    </Card>
  )

}

export default CustomizableCart
