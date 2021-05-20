# Synchronous
connect(mapDispatchToProps)
- pass down props to AddAttractionForm

# Component Lifecycle - Mounting
render()

# Local Execution Context - handleSubmit()
event.preventDefault()

console.log('a')

this.props.addAttraction(this.state)
invokes () => { dispatch(addAttraction())}
returns dispatch(addAttraction(this.state))
- middleware immediately kicks in with dispatch
- since dispatch returns a function, add the { f } to the call stack

console.log('g')

this.setState()

# Call Stack

{ f2 }
addAttraction(this.state)

# Local Execution Context - addAttraction(this.state)
console.log('b')
return { f2 }
console.log('f') does not render

# Local Execution Context { f2 }
console.log('c')

fetch //=> Promise
.then
.then

- if nothing is on the call stack, .then can parse JSON to JS object

console.log('d')

middleware dispatches action to the reducer to update the state

console.log('e')
