Stack: Node - Firebase - React

Backend: Node (create-react-app)
Frontend: React
Authentication: Firebase
Database: Firebase (realtime)
Testing: Mock Data
Hosting: Firebase

Strategy:

I originally tried to create the app w/ webpack/babel, but had some issues w/ configuration, and for sake of time switched to the create-react-app package. I chose to use Firebase for most of the functionality, as they have realtime sync on their database, and super easy authentication - plus it's free! For hosting, I went with Firebase as well - just for sake of simplicity, as well as compatibility. To test, I tested my site locally on the live production database, and manually deleted the data once done.

Issues:

Webpack/Babel - I would have really preferred to use webpack/babel as I think this is more efficient for live production, however it would have just had taken me too long to mess with. I also would have had to figure out how to connect it to Firebase hosting, which I wanted to avoid, again for sake of time.

Firebase Database: I piggybacked heavily off the Bloc Chat app, however there were a variety of differences in functionality involving the database that I had to figure out.

Firebase Hosting:

1. Don't have access to root, so installed locally, and firebase CLI wouldn't work.
2. Didn't understand how to build the app, and then add to firebase.json so site could launch.

Solutions:

Webpack/Babel - I didn't end up going w/ webpack/babel, however after hours in the docs and stackOverflow, I was able to setup the configuration. It appears they just recently updated the version, and this brought along a variety of changes to the syntax, whereas stackOverflow had a lot of outdated syntax. So I finally just looked up the documentation, and was able to surmise my configuration was correct.

Firebase Database: I just read the docs, and refrenced previous projects we had done.

Firebase Hosting:

1. Realized I needed to use npx.
2. Remembered job insight, where I just needed to run build and then direct Firebase to the static version of the site.

Future Problems to Solve:

- must re-render to show delete
- would make mobile friendly
- would add CSS to show that item is marked as purchased
