# NgEcommerce

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

// Building the header component

- Creating a Header Component using angular material
- Creating header actions component for showing the header right side icons
- Creating a pages for Products and Wishlist component
- Setting the route path in app.routes to access the pages of two components

// Building a Products Grid Page

- Setting up our products data using signals
- Filtering on category with computed route params
- Render the products data as a grid
- Creating the product card component
- Adding the category sidebar

  # Products Data
     1. All products Data
     2. Category selected
     3. Products Filtered on

  # Angular Signals
    1. Standard way to define data
       - ESP if it's dynamic
    2. Basically a container with a value
       - "Set" the value
       - Read value with ()
       - Angular tracks any changes
  
  # Selected Category
    1. Should come from the URL/Route
    2. withComponentInputBinding() provide inside appConfig
    3. Input SIgnal in the Page Component
       - read only

  # Filtered Products
    - Filtered products (computed) from this two signals AllProducts and SelectedCategory

  # Render the Products Grid
    - @for control flow
    - text interpolation with {{}}
    - property binding with []

  # Creating the Product Card
    1. Presentational component
       - Inputs and Outputs
       - Reusable!
    2. Adding more styling to card

  # Category Sidebar
    - Angular Material Sidenav
    - Angular Material Navigation List
    - Angular Pipes - for formatting
    - Activated list item


// Enter NgRx Signals Store! Part 3

  - Introduction to the NgRx Signals Store
  - Refactoring products grid to signal store
  - Building the products wishlist features

  # NgRx Signals Store - lightweight store based on signals
    - withState
    - withComputeds
    - withMethods
    - withHooks

  # How to access the store using dependency injection ?
    - Design Pattern to help reuse logic/code in Angular apps
    - Angular = inject a service / token
    - Provide store at different levels

  # Updating the state
    - use patchState function
    - use signalMethod inside withMethods / if you are not going with signalMethod inside withMethods then use effect() inside the product-grid component constructor to receive the category.

  # Unidirectional Data Flow
    - Store (Business Logic)
    - Component (Displaying Data)
      1. Component getting the data/state from store
      2. Again component updating the data/state to store

  # Building a Products Wishlist
    - Adding Functionality in Store
      1. Add Wishlist State
      2. Add to Wishlist Method
      3. Using "immer" for immutable updates
      4. toaster using hot toast
    - Toggle wishlist button
    - wishlist count in the header
    - wishlist page

  # Creating a Flexible Component
    - Providing inputs for configuration <- (Back Button)
    - Content Projection
      - "Project" content from parent <- (Product Card Component)

// Buiding the product cart - part 4

  - Adding cart state + add to cart method
  - Building the product cart page
    - Cart Items with Quantity Selector
    - Wishlist tease section
    - Summarize the order
    
  # Creating an Attribute Directive
    - changes appearance or functionality DOM element
    - Distinct from structual directive which can change structure of DOM