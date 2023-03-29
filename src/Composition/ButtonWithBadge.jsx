import Button from "./Button"

const ButtonWithBadge = ({ badgeText, ...props }) => {

  // Reusing the existing button component and adding a badge to it.

  return (
    <div style={{ position: "relative" }}>
      <Button>
        <p style={{ position: "absolute", top: "0", right: "3px" }}>{badgeText}</p>
        <p>{props.children}</p>
      </Button>
    </div>
  )

}

export default ButtonWithBadge
