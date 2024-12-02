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
Integration tests are to test that the portions of code fit in to a larger scope. An ezample is if a funciton is used in a Class, and an integration test might test how that Class performs. Another Integration test example is perhaps testing how an API works in a route call.
End-to-end tests are big picture from the start of a process to the end, for example the test could simulate a user accessing the website and using the Class, the routes and the APIs.

- What is a mock? What are some things you would mock?
A mock is a simulated scenario, intended to test an interaction with the code. For example one could mock a user interaction whereby the user registers, and attempts to perform some actions in the App. Mocks are useful for testing.

- What is continuous integration?
CI is used in coding to write small chunks of code and integrate these chunks into the main body of code to see if they integrate succesfully. It allows for easier error identification.

- What is an environment variable and what are they used for?
An environment variable (env) is a folder in a protected location on a public facing server, and is used to store code secret information such as API keys, URI's, secret keys, etc.

- What is TDD? What are some benefits and drawbacks?
Test Driven Development is a way of writing code whereby first the unit tests are written, then the code is written. A benefit of this approach is that the focus of the code is channelled towards the end result of passing the test. It helps keep the code focused. A drawback is that there needs to be an abundance of tests written for every possible scenario in order to build effective apps.

- What is the value of using JSONSchema for validation?
JSON Schema is advantageous as it catches potential issues early in the process. If the data that is passed in to the code is validated it makes the code not need to have as much error handling and not needing to write code to catch data that is inconsistent.

- What are some ways to decide which code to test?
There are a few strategies on can use to decide which code to test:
Here are some effective strategies to decide which code to test:

  1. Risk-Based Testing
  2. Test-Driven Development (TDD)
  3. Code Coverage Analysis
  4. Mutation Testing
  5. User Experience Testing

- What does `RETURNING` do in SQL? When would you use it?
Returning tells SQL what data we want the query to return. If for example we are doing an UPDATE query, we might want the query to return the updated data, plus some other data from the same record. One could also use RETURNING with the DELETE statement.

- What are some differences between Web Sockets and HTTP?
Use HTTP for traditional web applications that require occasional data fetching or updates.
Use WebSockets for real-time applications that require constant, bidirectional communication between the client and server.



- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I think I preferred FLASK, but that might only be because we learnt that first, and I thought it was so cool. Learning Express was cool too, but as it was another way of doing something we already learned it lost some of the WOW! factor. If we learned Express first, I would probably say I preferred it! 
