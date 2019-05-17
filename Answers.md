1) In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	Actions - Actions are the bridge between your application and your store. Actions ate simply data that needs to be passed to your store for later use.

	Reducers - Reducers are the logic that updates the store. They do this using the payload sent by an action.

	Store - The store is where you state is housed. It is know as a single source of truth because there are no duplicates to the data in the store. Its the only source of state for Application state.

2) What is the difference between Application state and Component state? When would be a good time to use one over the other?

	Application State - Application state is data that is available to all sub parts of your application.

	Component State - Component state is data that is only available to one component unless passed to another using props.

3) Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

	Reduc-thunk is middleware that allows us to perform async operations when creating actions. Our action creator becomes a function within a function that allows access to dispatch and getState.
