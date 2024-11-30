### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT is an acronmyn for JSON Web Token. It is a way to ensure data comes from a valid source (server), and not from an unauthorized source. It works by the system generating a token using a secret key created on the server, and that token is validated before allowing the client to continue.

- What is the signature portion of the JWT?  What does it do?
The signature portion of a JWT is used to validate the token. If the signature is not present, or it is incorrect; the JWT verify function will return false, and the authorization will fail.

- If a JWT is intercepted, can the attacker see what's inside the payload? 
If a JWT is intercepted the attacker CAN see the contents of the payload as it is encoded, not encrypted. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
Implementing authentication:
(1) when the client logs in or registers, the user information is stored in a JWT Token.
(2) when the user goes to get authenticated, the JWT token is verified.
(3) the users credentials are read from the token and access is provided accordingly.
 
- Compare and contrast unit, integration and end-to-end tests.
Unit tests are for small portiions of code such as functions.
Integration tests are to test that the portions of code fit in to a larger scope. An ezample is if a funciton is used in a Class, and an integration test might test how that Class performs. Another example is perhaps testing how an API works in a route call.
End-to-end tests are big picture from the start of a process to the end, for example the test could simulate a user accessing the website and using the Class, the routes and the APIs.

- What is a mock? What are some things you would mock?
A mock is a simulated scenario, intended to test an interaction with the code. For example one could mock a user interaction whereby the user registers, and attempts to perform some actions in the App. Mocks are useful for testing.

- What is continuous integration?


- What is an environment variable and what are they used for?

- What is TDD? What are some benefits and drawbacks?

- What is the value of using JSONSchema for validation?

- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?

- What are some differences between Web Sockets and HTTP?

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
