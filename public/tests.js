// What to test -> Starting Point
// 1.) Test that component renders
// 2.) Test that comp renders with props
// 3.) Test that comp renders in diff states e.g loggin/logged out -> showing of navbar etc.
// 4.) Test Comp reacts to events

// What not to test -> Implementation Details
// 1.) Implement Details -> should test the behavior of app & not how its implemented
// 2.) Third Party Code
// 3.) Code that isnt important from a user a point of view

// Priority Order 4 Queries
// "YOUR TESTS SHOULD RESEMBLE HOW USERS INTERACT WITH YOUR CODE (COMPONENT, PAGE,ETC.) AS MUCH AS POSSIBLE"
// 1.) GetbyRole (go thru docs to learn what role to use for each particular element)
// 2.) GetByLabelText
// 3.) GetByPlaceHolderText
// 4.) GetByText
// 5.) GetByDisplayValue
// IF NONE OF ABOVE WORK use => GetByAltText, GetByTitle (varies from browser to browser, and is not visible by default to sight readers), GetByTestId (the user cannot see/hear this e.g text is dynamic)
// TO DO
// write tests
// consume api endpoint & test it
// Research more to learn what to test for
// Learn a bit of cypress but not too much
// go thru docs to learn what role to use for each particular element
