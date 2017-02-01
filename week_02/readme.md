# Jan 30

* omg the world is falling apart?
* 3-4 volunteers show their homework to the class
* The command line
	* Moving around
	* Making files/folders
	* Searching
	* Arguments/parameters
	* Getting help
	* Stdin/stdout
	* Piping
	* and more!
* Intro to node
	* es6
		* const
		* let
		* arrow functions
	* modules
		* export.x = x
		* 
	* npm
		* package.js
		* npm init
		* npm install --save
		* npm install -g

		
## Homework
* convert your text-based game into a node module that can be run from the node interactive shell
* read Web development with Node & Express chapter 3

-----

# Feb 1
* More on modules & how to write your own
* npm
	* package.js
	* npm init
	* npm install --save
	* npm install -g
* Writing our first web server
	* localhost & 127.0.0.1
	* internal ip addresses vs public ip addresses
	* Response codes
	* content types
* Auto-reloading with nodemon
* Intro to express
	* http verbs: GET vs POST
* Static files
* Templates
* Deploying to Heroku
	* create a git repo
	* add an ignore file for node_modules
	* create a "start" script in package.json
	* put your node version in package.json
	* ```heroku create```
	* ```git push heroku master```
	* ```heroku open```

## Homework
* create a Heroku account and set up the command line program for it
* write a simple puzzle game that you play by going different urls
	* The user should have to figure out what the next url to go to is based on information on the current page. For example, the first page might say: "what's one plus one?" The user would then go to /three
* Deploy your web app to heroku