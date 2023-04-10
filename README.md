# React 18 course with Mosh

## Development Environment
- Node version > 16.13
- VS Code 

---

### How to create a react app?
- There is two way to create a new react app:
  - Create React App (CRA): Official tool 
    - ```npx create react app```
  - Vite : Faster and give us smaller bundle sizer
    - `npm create vite@4.1.0` (4.1.0 is the version used in this course)

### How React works ?
- Assume we have two components App component (parent), and Message component which is a child component.
- When the application starts, react takes this component tree and built a Javascript data structure called **Virtual DOM**.
- This virtual DOM is different from the actual DOM that in the browser.
- The virtual DOM is a lightweight in memory representation, and each node represent a component with its properties.
- When the state or the data of the component change, react updates the corresponding node in the virtual DOM to reflect the new state.
- Then, react compare the current version of virtual DOM with the previous version of virtual DOM, to identify the nodes that should be updated.
- Then react updates the actual DOM.
- Technically, updating the virtual DOM not done by the react itself, its done by a react library called **React DOM**.

### What is JSX ?
- JSX stands for JavaScript XML. It is a syntax that allows us to write components that combine HTML and JavaScript in a readable and expressive way, making it easier to create complex user interfaces.

### What is the difference between Library and Frameworks ?
| Library      | Frameworks |
| ----------- | ----------- |
| A tool that provides a specific functionality       | A set of tools and guidelines for building apps       |

- React is a tool for building user interfaces, but we ca not relay on that.
- So, React need some additional tools for concerns such as
  - Routing
  - HTTP calls
  - Managing the application state 
  - Internationalization
  - Form validation
  - Animations 

### What is SyntheticBaseEvent?
- Its the type of event when it print to console log
- Its a built in class in react, because different browsers have a different implementation of event object.
- So to make it cross-browser, react team have created a class called **SyntheticBaseEvent**, that is a wrapper around the native browser event object.

### What is Hook?
- Hooks is a built in functions that allow us to tap in built-in features in react.
- Hooks e.g.
  - useState: to tell react this component have data will be changed over time.
  - useEffect
  - useReducer
  - useRef

### What is the difference between **Props** and **State** ?
| Props      | State |
| ----------- | ----------- |
| Are inputs or arguments passed to a component | Is the internal data managed by a component and can be changed over time |
| Similar to function args | Similar to a local variable |
| We should treat Props as Immutable | State are mutable which mean we will change the data over time| 
| Cause a re-render | Cause a re-render |

### What immutable mean ?
 - In english mutate something mean change it.
 - So, mutable mean **Changeable**.
 - And immutable mean **Unchangeable**, in another words it is read-only.

### What cohesion term mean?
- **Cohesion** mean things are related should be next to each other, and things are not related should be separated.


### How to styling components in React?
- Vanilla CSS
  - Benefits:
    - Component style will be in a file with the same name of the component.
    - The style file will called be called in the component file only.
    - The component can be reused in other projects, without losing the style.
- CSS Modules
  - CSS modules solve the problem of clashes, this problem could happened when we used two classes with the same name into our project.
  - CSS modules keeps these classes scoped in the component to avoid any clashes.
  - The name of the classes should be in a camelCase convention.
  - To pass multiple classes, we put theme into array and join them.
- CSS-IN-JS
  - Benefits:
    - Scoped styles
    - All the CSS & JS/TS code in one place 
    - Easier to delete a component
    - Easier to style based on props/state
    - Libraries: styled component, polished, Emotion.

### What is separation of concerns mean?
- Mean divide a program into distinct sections where each section handles a specific functionality, rather than having everything in one place.
- So, our app will be:
  - Modular 
  - Easer to understand
  - Easier to maintain
  - Easier to modify 

---

## Managing Component State

### State hook notes
- React update state asynchronously for performance reasons by minimizing unnecessary rerenders. react batches the update, applies them all at once, and then rerender the component.
- State stored outside of the component in memory.
- Use hooks at the top level of our component.

### Best practices to choose the state structure
- Avoid redundant state variables.
- Group related variables inside an object.
- Avoid deeply nested structure because it is hard to update, so preferred to use a flat structure.

### Keeping components pure
- React built on top of a fundamental concept called **Purity**.
- What purity or pure function mean ?
  - It's mean if give a function the same input it always return the same result.
- React designed around this concept, React expects to get the same props and return the same JSX.
- React designed like this for performance reason, because if the input of the component does not change, React will escape re-rendering that component.

### Updating objects
- We can not updating objects directly, the object should be copied to new object and update the value.
- React need a new object for updating.

```Javascript

// ** Wrong way
function Drinks (){
  const [dink, setDrink] = useState({
    title: "Americano",
    price: 5
  })

  const handleClick=()=> {
    drink.price = 6 
    setDrink(drink)
  }

  return(
    <div>
      <p>Drink Price: {drink.price} </p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

// ** Correct way
function Drinks (){
  const [dink, setDrink] = useState({
    title: "Americano",
    price: 5
  })

  const handleClick = () => setDrink({...drink, price: 5})


  return(
    <div>
      <p>Drink Price: {drink.price} </p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
```

### Updating nested object
- Updating nested object need to be shallow copied first, then change the value.
- Why its need to be copied first even the if the main object copied ?
  - Because the main object will reference location different from the nested object location.
  - customer object have a location in memory different to customer.address object.

```Javascript
function Customer (){
  const [customer, setCustomer] = useState({
    name: "John",
    address:{
      city: "San Francisco",
      zipCode: 94111
    }
  })

  const handleClick=()=> setCustomer({...customer, address: {...customer.address, zipCode: 94224}})

  return(
    <div>
      <p>Customer zip code: {customer.address.zipCode} </p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

```

### Updating Arrays
- To update arrays we can apply the same concept when updating objects.

```Javascript
function Tags (){
  const [tags, setTags] = useState(['happy', 'cheerful'])

  const handleClick=()=> {
    // Add
    setTags([...tags, 'exciting'])

    // Remove
    setTags(tags.filter(tag => tag !== 'happy'))

    // Update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
  }

  return(
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
```

### Updating arrays of objects


```Javascript
function Bugs (){
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', isFixed: false},
    {id: 2, title: 'Bug 2', isFixed: false},
  ])

  const handleClick=()=> {
    // Update
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, isFixed: true} : bug))
  }

  return(
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
```

### Updating arrays of objects using immer package
- We can use a library called **Immer** for updating arras of object.
- With this package we can deal with objects values like variables.

### Sharing State between Components
- Assume we have a shopping cart that show the items in the cart and a cart icon in the navbar that shows the number of the items.
- These are two separated components, but the cart component needs to share the total number of items with the navbar. How we can do that?
- Thats can be done by something called left state up, which mean move the useState hooke to the closest parent, so the parent can pass the state to the two components. 


## Important Note
- The component holds the state, is the one responsible for updating it.

### Why we initialized useRef with null?
- The current property referencing to a DOM node.
- The initial value passed here will set the current property.
- So initially when we create a ref object we don't have access to 
a DOM node, because the DOM is created after react renders our component, so we have 
no initial value to provide here.
- So, after React renders the component and creates the DOM, it will set to 
current property to a DOM node, and it will set it back to null when the node 
is removed from thr screen  

### What is controlled component?
- As we know all the input fields in HTML have a value property that maintaining there own state.
- But in React when we implement the input element, we declare a state to store the value.
- So it is possible that these sources get out of sync.
- To solve this problem, we must make React the single source of truth.
- To do that, we reassign the value property to the state.value, So the input field always relies on the value in our state variable
- So now we referring to the input as a controlled component because it state is entirely controlled by React.
- Thats mean the input field is not manage by the DOM, but instead it is stored and updated in the component state.

### What is Optimistic update and Pessimistic update?
 - **Optimistic update**: update the UI then call the server => use this method if the call to the server succeeded most of the time
 - **Pessimistic update**: call the server, then update the UI.

### What is the difference between PUT and PATCH http methods?
- **PUT**: Used for replacing an object.
- **PATCH** Used for updating on or more of object properties.
> The method chooses depends on how the back-end is built, because some back-ends does not support PATCH method.  