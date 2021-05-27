# Search bar feature - lands
- responds to user input
- filters view of lands

# Data (state/props)
- Does this need state? Y
- Does it need props? Y
- Local or in store? Local
- state in LandsContainer; this.state.search

# Display (rendering / logic JSX)
- Input JSX
- Attributes (MVP): name= , value=, onChange=
- value={this.state.search}
- renderLands()

# Events (listeners / handlers)
- Listen to onChange={ handleChange() } on the <input/>
- When value of input changes, invoke a function - handleChange() - to update the {this.state.search}

# handleChange()
- update the state

# renderLands()
- create function - arrow/regular? arrow
- Why? need access to parent context to get local state; this.state
- access slice of store (state) from line 66 - this.props.lands
- this.props.lands is an array
- iterate through the array to return a new array - query
- see if the elements of this.props.lands includes the value that's in the input (this.state.search)
- if so, render the data
- pass data to props of Lands

* arrow functions to distinguish event handlers / callbacks
* regular functions - render

# Stretch
- render all lands if input is blank
- adjust function to respond to uppercase of lowercase
- respond to error
- implement Bootstrap for style

* turn into blog post

# Refactor
- local state - loading spinner - true
- 'hello'.includes('') /=> true
- test conditions
- filter rides by age/height
