### TypeScript

- This syntax **(event: MouseEvent)** called Type annotation, so we can specify the type of parameters and variables and so on.
- With typescript we get access to properties, autocomplete, type safety and easier to refactor.

### What is TypeScript interface?
- With interface we can defined the shape of an object.
  - e.g.
  ```Typescript
  interface ListGroupProps {
    items: string[];
    heading: string;
  }

  function ListGroup(props: ListGroupProps){ ... }
  ```
  - This code above mean that the ListGroup component will receive an object like this.