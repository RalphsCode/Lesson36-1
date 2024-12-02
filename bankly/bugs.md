First bug for me was getting jest to run.
The Jest in the dependancies is not compatible, and was causing errors such as:
"ReferenceError: TextEncoder is not defined"
So I had to download and install the latest versions of all dependancies.
After that; jest executed, and all tests passed.
Sounds easy, but to a coding rookie like me, that took a couple of hours to debug!

I'm also having trouble with the seed command, which is generating errors. Having to execute the seed commands manually to effect.

Bug #1:
Route:  users/GET
Requirement: "should return only *basic* info: {username, first_name, last_name}"
Actual: returns all info on a user - including email and phone which are not expected.
Fix: took email and phone out of the SQL statement.
Test: test created that checks the returned info is only {username, first_name, last_name}

Bug #2:
Route: users/GET
Problem: The User Class method has arguments username & password, neither of which are used in the method. This is redundant and unnecessary.
Fix: removed the arguments from the method.

Bug #3:
Route: users/GET/[username]
Requirement: If user cannot be found, return a 404 err.
Problem: If user cannot be found, no 404 err is generated.
Fix: Have a 404 err be generated if user not found. Adding the 'throw' keyword ensures the error is thrown.
Test: test created to check for 404 error if user not found.

Bug #4:
Route: auth
Problem: in the auth middleware, the authUser function decodes the JWT token. The JWT Token should be verified not decoded.
Fix: Change the keyword to 'verify', and add the secret key argument.

// Bug #5 
Route: PATCH user/[username]
Problem: requireAdmin middleware in route preventing a user from updating their own record, and only permitting an Admin to make the Patch/Update.
Fix: Remove the requireAdmin middleware from the route definition.
Test: Test added whereby uers patches/updates their own record.

// Bug #6 
Route: PATCH user/[username]
Problem: only certain fields are allowed to be updated in a PATCH, and if others are included in the request, there is supposed to be an error. However, there is no code to enforce this rule.
Fix: Added code to the users route to ensure only the allowed records can be updated.
Test: A test was written to check that an error is generated if unallowed fields are present in the patch request.

// Bug #7
File: db.js
Bug: Header reads: /** Database setup for Jobly. */
Fix: Changed it to Bankly.

All 18 tests passsing succesfully.