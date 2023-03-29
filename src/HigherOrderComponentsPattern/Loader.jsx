const Loader = ({ loading, WrappedComponent, ...props }) => {

  if (loading) {
    return <p>Loading...</p>
  }

  return <WrappedComponent {...props} />

}

export default Loader
