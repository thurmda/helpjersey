helpjersey
==========


#Install

This uses Node.js (binaries available here http://nodejs.org/download/)
Packages are committed to the github repo. If you need to reinstall:

    rm -r node_modules
    npm install

Twitter Bootstrap is available in public/

#Run
If you have the heroku toolbelt installed (https://toolbelt.heroku.com/)
you can use

    foreman start

and foreman will assign the web app a port just like on heroku. If not
you can simply run

    npm start

and the web app will start on http://localhost:3000 Alter your config/index.js
if you need a different port.



