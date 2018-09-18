// this.getFormFields = getFormfields.bind(this) in the constructor or componentDidMount of the component to be used.
// NOTE: state field name has to be the same name of the input field
const getFormFields = function({ target }, stateObjectName) {
  //destructuring the field target to obtain the name and value of the field
  const { name, value } = target;
  // if not object name from the state is passed to stateObjectName parameter
  // then is assumed that the field is not inside an object in the state
  if (stateObjectName === undefined) {
    this.setState({ [[name]]: value });
    return;
  }
  // if an object name from the state is passed to the stateObjectName
  this.setState(state => (state[stateObjectName][name] = value));
};

export default getFormFields;
