

//In this component, we are creating a higher order component that takes a component as an argument and returns a new component. This function is used in App.js to wrap the ItemDetails component.
function withExtraProp(Component) {
    return function EnhancedComponent(props) {
      return <Component {...props} extraProp="value" />;
    };
  }

  export default withExtraProp;