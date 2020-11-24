# farmers_market_client
# Farm Stan: Frontend
### Coded by Charles Desiderio, Spencer Haugh, Aaron Luing, and Dan Seiders

# What is Farm Stan?

Farm Stan is a collaborative project where the goal was to practice writing a full MERN stack web application in a collaborative environment.  The source of inspiration for the project came about from our groups love of farmers markets, merged with a desire to make the foundations of an application that would have real-world applications.

Once our group had decided upon the basis of our project, Dan S. was elected to be the host of the Github repositories.  We then divided ourselves into two groups:  Dan and Charles would work on the backend logic using Node and Express, while Aaron and Spencer would build out the front using React.

# Technology on the Front End
## Step 1: Building The Founbdations
### React
The base of the front-end was built out using React.  Our first item on our to-do list was to run our `npx create-react-app`.  Once the files were set up, we brainstormed on what we would need and how we would organize everything.
The App.js worked as out controller, while the rest of the pages/information was divied up into a Pages folder and a Component folder.  The logo, footer, and navigational bars were made into components, while larger sections like the Show Farms or Edit Farms pages were fleshed out and stashed into the Pages folder.

## Step 2: Integrating The API 
### Axios
Once the basic files were created, we moved on to setting up our API callbacks.  Key functionality for Farm Stan relied on callbacks to our backend deployment to pull Market, Farm, and User information.  To do this, we decided to forgo using Fetch, and instead use Axios.  As a promise-based HTTP library, we knew we could use it for both our front-end and back-end code.  The key benefit of switching to Axios was the ease of writing the callbacks out in our files.  Unlike .fetch, axios responses are already converted into JSON, so the ammount of code we had to write was cut in half.

## Blocker 1
### CORS
Our first major drawback was encountered with CORS upon initially testing our api callbacks.  Our axios calls were being denied by the backend and were issuing cors errors.  To fix this, we had to go into the backend and whitelist both our localhost port AND our heroku deployment url.  Once the backend team were able to fix this, we were up and running again

## Step 3: Changing Pages
### React Router
With our api callbacks working, we moved on to the next step: figuring out how to change what is displayed on the screen when the user accesses a new route.  Thanks to recommendation from our standup instructor John, we accomplished this task using React Router.
The majority of our React Router code ended up in the base App.js.  From there, our structure was <Router> => <Switch> => <Route>.  Everything in the render for the App export was wrapped in the top-level <Router> tag.  We kept our Navigation and Header component calls in this base level.  One step deeper, we added the <Switch> tags.  Here, we can nest our <Route> tags, which themselves contain key Page files.  When the <Switch> finds a <Route> with a matching path to the HTTPS, the .jsx file inside the Route will be rendered.

## Step 4: Wrapup

With all of our extensions up and running, our final goal was to flesh out the code and wrap up the functionality.  By this point, the backend crew were available for help, and as a group we worked through our full CRUD functionality.

We used Axios callbacks to fetch and post to the database on the backend, and then used React Router to swap views upon specific functions (ex: submission of forms).  Working together, we were able to finish the app and achieve MVP status.

# Future Plans
There is still plenty of room for this app to grow in the future.  One of the stretch goals we didn't get to was implementing the Google Maps api in order to bring up a map of the Market locations.  Everyone in our group has expressed interest in working more on this in the future, and we are all excited at the posibility of launching a full app to the public.

# Learning Sources
These resources helped our team learn how to use our core extensions:
### Axios
https://www.youtube.com/watch?v=oQnojIyTXb8&t
### React Router
https://www.youtube.com/watch?v=Law7wfdg_ls