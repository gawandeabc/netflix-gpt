# Netflix GPT
- Create react app
- Configured Tailwind CSS 
- Add Routing (npm i -D react-router-dom)
- Header
- Routing
- Login Form
- sign Up form
- form validation
- useRef hook
- Firebase Configuration
    - create account using email id
    - create project
    - npm install firebase
    - copy cofiguration (we copied in utils -> firebase.js)
    - on firebase portal ->  go to Authentication portal
    - enable required auth type (we enabled email/password)

- Firebase Hosting
    - project terminal  -> npm install -g firebase-tools
    - run command -> firebase login   (if it is restricted google & resolve it)
    - run comman -> firebase init
    - select 
            - hosting: configure file for ....
            - use an estisitng project
            - what do you want to use as your public directory? build
            - configure as single pahe app? - N
            - set up automatic builds 7 deploys? - N
            - it create necesarry file 
            - run command -> npm run build
            - it creates build folder in project 
            - run command -> firebase deploy
            - and that's it -> it gives back hosting URL

- Firebase -> create sign up user account
    - refer firebase docs for authentication & follow the process 
    - for this application use
    - admin@gmail.com
    - Admin@123

- Redux to store USER DATA
    - npm i -D @reduxjs/toolkit
    - npm i react-redux
    - created user store with userSlice
    - after storing user data redirected to browse page

- implemented sign out
- updated profile
- added photo
- bug fix: sign up user display name & profile picture update
- bug fix: redirect users to right urls based on user is logged in / logged out
- unsubscribed to the onAuthStateChnaged callback
- Added hardcoded values to the constants file


- Fetch movies from TMDB
    - register for TMDB api
    - create an app on TMDB & get access token
    - check documentation , now playing movie api 
    - custom hook for now playing movie
    - create movieSlice
    - update store with movies data
    - plannig main & secondory container
    - fetch data for trailer video
    - update store with trailer video
    - Embedded the youtube video & make it autoplay & mute
    - secondory container with Movie List
    - developed Movie card
    - TMDB image CDN url
    - browse page enhancement
    - Custom hooks for pupolar, top rated & Upcoming movies


- Completed 2:34 mins in netflix video EP15

# Features
-Login/Sign up screen
    - Sign In / Sign up form 
    - redirect to browse page

- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in background
        - Title & description
        - Movie Suggestion
            -Movie List

- Netflix GPT
    - Search bar
    - Movie Sugestion
