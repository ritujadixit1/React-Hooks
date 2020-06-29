## useEffect Hook
1. The Effect Hook lets you perform side effects in functional components.
2. It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount.

### Shortcuts
- rce - to make a class component (get rid of the named export).
- rconst - to make a constructor and initialize the state.
- rfce - to create a functional component

## useContext Hook
Context API - It provides a way to pass data through the component tree without having to pass props down manually at every level.

1. Create the context
2. Provide a context value
3. Consume the context value in the necessary components

You can set a default value to your context and it is set while creating it. The default value will only be use when the component will not have a matching provider in the component tree.
contextType property in a class (limitations:- 1. It only works with class components 2. You can subscribe to only a single context using contextType)