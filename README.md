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
