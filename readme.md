Mandatory II
Create a fullstack auth system using a web framework.

Auth = authorization and authentication.

Auth system = auth in both frontend and backend.

Hand-in: GitHub Classroom

Assignment type: Individual

Recommendation: Even though it is individual, try to hack each other’s local system for security auditing and do code reviews of the security sensitive parts.

Deadline: Check GitHub Classroom. (Late hand-ins in Teams).

Technical requirements:
Use a web framework. This is an opportunity to learn or use any web framework but beware that only Svelte, HTML or template languages are allowed for the exam project.

Use a database.

Add notifications. The project should have at least one. You could use one of these libraries: https://github.com/CodeSeven/toastr https://github.com/kbrgl/svelte-french-toast

Email should be sent out or "sent out". I have provided tutorials for Nodemailer, Resend but you are free to use other service. Only 1 type of email is required but here are suggestions for different types of emails: 

sign up

first login

forgot password etc.

Backend:
You need to implement authentication:

The passwords must be hashed (Bcrypt or similar).

Implement it yourself: You are not allowed to use a library or a federated service such as Passport.js, Google SSO OAuth or Firebase Authenticate.

You need to implement authorization:

Use sessions (easy) or JWT (difficult). Good video on how to implement JWT with Express: https://www.youtube.com/watch?v=mbsmsi7l3r4
Frontend:
You need to implement authentication here too:

The minimum requirement is a Login/Sign out component. (Sign up/Forgot password are optional).
You need to implement authorization here too:

Protect your routes: use private routes so people can’t access pages by changing the URL. Even if you aren't using svelte-navigator, let this repo inspire you:
https://github.com/mefechoel/svelte-navigator/tree/main/example/private-routes

Optional
Feel free to add a theme to the website a frontpage and content once logged in. What type of website is it? That's up to you. Doesn't have to relate to the exam project.


Previous lessons learning goals:

Lesson 7: 
Understands how code and its placement affects application memory and efficiency.

Understands the arguments for and against SSR vs. CSR when it comes to:

Load time.

Ressources spent (duration, when and where).

SEO.

Dealing with CORS. (SSR has no CORS issues.)

Can argue for better ways to structure the code and how to avoid files that are too long.

Can create an Express Router by heart.


Lesson 8:
Can create a Svelte project from scratch with npm create vite.

Understands the structure of a Svelte project and can explain it what each file does.

Understand the dangers of XSS and how to prevent it in frontend (avoiding innnerHTML) and backend (sanitizing).

Lesson 9:
Understand the tree structure of web frameworks (parent/child).

Fully understand the different ways to pass data in Svelte. Can code it too.

Lesson 10:
Understands how middleware works in Express, why order matters and how to use it to your advantage.

Can use a rate-limiter.

Understands how sessions work on the server.

Can argue about the pros and cons of JWT vs. session.

Lesson 11:

Understands the role of Dotenv and is able to differentiate it from environment variables in Node.js.

Understands client routing in SPAs.

Can use fetch in Svelte with onMount (to avoid a reactive loop).

Can solve CORS issues in Express.

Understands why CORS exists and the situations that trigger it.

Understand how CSR and SSR deals with CORS and session id.

Knows how to serve Svelte from Express with vite build --watch.