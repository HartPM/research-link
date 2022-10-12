Introduction

	Research Link is an app to connect scientific research organizations with study participants
	Built with React, Ruby on Rails, and PostgreSQL
	Demo video: https://vimeo.com/manage/videos/733331792


Requirements

	Ruby 2.7.4
	NodeJS (v16) and npm
	Postgresql
	
	
	
Environment Setup

Install the Latest Ruby Version

	Verify which version of Ruby you're running by entering this in the terminal:

		$ ruby -v

	Make sure that the Ruby version you're running is listed in the supported runtimes by Heroku. At the time of writing, supported versions are 2.6.8, 2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site for the latest supported versions.

	If it's not, you can use rvm to install a newer version of Ruby:

		$ rvm install 2.7.4 --default

	You should also install the latest versions of bundler and rails:

		$ gem install bundler
		$ gem install rails


Install NodeJS

	Verify you are running a recent version of Node with:

		$ node -v

	If your Node version is not 16.x.x, install it and set it as the current and default version with:

		$ nvm install 16
		$ nvm use 16
		$ nvm alias default 16

	You can also update your npm version with:

		$ npm i -g npm


Install Postgresql

PostgreSQL Installation for WSL
	To install Postgres for WSL, run the following commands from your Ubuntu terminal:

		$ sudo apt update
		$ sudo apt install postgresql postgresql-contrib libpq-dev

	Then confirm that Postgres was installed successfully:

		$ psql --version
	
	Run this command to start the Postgres service:

		$ sudo service postgresql start
		
	Finally, you'll also need to create a database user so that you are able to connect to the database from Rails. First, check what your operating system username is:

		$ whoami
		
	If your username is "ian", for example, you'd need to create a Postgres user with that same name. To do so, run this command to open the Postgres CLI:

		$ sudo -u postgres -i
		
	From the Postgres CLI, run this command (replacing "ian" with your username):

		$ createuser -sr ian
	
	Then enter control + d or type logout to exit.


Postgresql Installation for OSX

	To install Postgres for OSX, you can use Homebrew:

		$ brew install postgresql

	Once Postgres has been installed, run this command to start the Postgres service:

		$ brew services start postgresql
		
		

Application Setup

	1. cd into the directory you would like to install the app on
	
	2. copy the SSH link from the green code button at the top of this repository
	
		$ git clone <paste SSH here>
	
	3. cd into the new directory you just cloned
	
	4. Start the Rails app
	
		$ rails s
	
	5. Open a new terminal to start the React app
	
		$ npm start --prefix client
	
	

