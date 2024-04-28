import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold  mt-10">
        When should I use context API?
      </h1>
      <p>
        The Context API in React is best used when passing data or state down to
        multiple components at different levels of nesting in the component
        tree, particularly for managing global state like user authentication,
        themes, or language preferences. Context simplifies data sharing and
        eliminates the need for manual prop passing.
      </p>
      <h1 className="text-lg font-semibold  mt-10"> What is a custom hook?</h1>
      <p>
        A custom hook in React is a JavaScript function that starts with "use"
        and allows you to extract component logic into reusable functions. These
        hooks can encapsulate stateful logic, side effects, or any custom
        behavior, promoting code reusability and maintainability across multiple
        components. Custom hooks enable cleaner and more modular code by
        separating concerns and promoting composability.
      </p>
      <h1 className="text-lg font-semibold  mt-10">What is useRef?</h1>
      <p>
        useRef is a React hook that returns a mutable ref object whose .current
        property is initialized to the passed argument. It's commonly used to
        access and interact with DOM elements directly, store mutable values
        across renders without causing re-renders, or persist values between
        renders in functional components without causing side effects.
      </p>
      <h1 className="text-lg font-semibold  mt-10">What is useMemo?</h1>
      <p>
        useMemo is a React hook that memoizes the result of a function and
        re-computes it only if the dependencies change. It's useful for
        optimizing performance by avoiding unnecessary re-calculations of
        expensive computations or calculations in components that render
        frequently. useMemo is particularly beneficial when dealing with
        computationally intensive operations or complex data transformations
        within functional components.
      </p>
    </div>
  );
};

export default Blogs;
