// Card Component With Customizable Header That Is Rendered By The Props
const Card = (props) => {

  return (
    <div className="card-container">
      <div className="card-header">
        {props.renderHeader()}
      </div>

      <div className="card-body">
        {props.children}
      </div>
    </div>
  )

}

export default Card
