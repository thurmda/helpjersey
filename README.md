#Help Jersey

Our project is focused on making information available to Sandy victims and 
volunteers that only have access to the internet via a phone. Most state and 
federal websites are virtually unusable on a phone so we are making that 
information accessible to those that need it most. Just open <a 
href="http://helpjersey.com/">helpjersey.com</a> in your phone's browser. You 
can share the latest news right through the site so others can benefit from up 
to the second information.

![preview](http://helpjersey.com/img/helpjersey_preview.png)


##Install

This project is built on Node.js, Express.js and MongoDB (binaries available 
here http://nodejs.org/download/) Packages are committed to the github repo so 
if you develop on a Mac it should just work. If you need to reinstall them for 
your environment:

    rm -r node_modules
    npm install


##Run
If you have the heroku toolbelt installed (https://toolbelt.heroku.com/)
you can use

    foreman start

and foreman will assign the web app a port just like on heroku. If not
you can simply run

    npm start

and the web app will start on http://localhost:3000 Alter your config/index.js
if you need a different port.

If you would like to start the app with a fresh database loaded from
data/municpal prepend your start command with 'freshDB=true ' i.e.

    freshDB=true foreman start

    freshDB=true npm start


