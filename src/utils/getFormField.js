// this.getFormFields = getFormfields.bind(this) in the constructor or componentDidMount of the component to be used.
// NOTE: state field name has to be the same name of the input field
const getFormField = function({ target }, optionalStateObjectName) {
  //destructuring the field target to obtain the name and value of the field
  const { name, value, files } = target;
  // if not object name from the state is passed to stateObjectName parameter
  // then is assumed that the field is not inside an object in the state
  if (optionalStateObjectName === undefined) {
    this.setState({ [[name]]: files ? files[0] : value });
    console.log(this.state.searchBar);
    
    return;
  }
  // if an object name from the state is passed to the stateObjectName
  this.setState(
    state => (state[optionalStateObjectName][name] = files ? files[0] : value)
  );
};

export default getFormField;
