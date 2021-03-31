# Code 301: Intermediate Software Development

Welcome to Code 301! This class builds on your 201 foundation with a deep dive into the world of servers. Using React, Node.js, npm libraries, and Bootstrap, this class prepares you for 401.

## Overview

Code 301 begins with front end development using React and Bootstrap. Module 2 introduces the back-end and building servers to serve files to a React front-end. Module 3 brings everything together with the development of a full-stack application from start to finish. The final module is team-based project work.

## General Daily Plan

- Warm-up exercise
- Review code challenges and whiteboarding
- Introduction of today's code challenge topic
- Code review of lab assignment
- Code demo of new topics
- Lab preview
- Code challenge implementation
- Collaborative lab time

## Learning Objectives

As a result of completing Code 301, students will:

- Collaboratively design and create web applications from scratch using MVC architecture built with professional-grade HTML, CSS, and JavaScript.
- Work with string, array, and object data structures and algorithms to solve code challenges with pure JavaScript programming.
- Design dynamic front end and back end applications which can function together or independently and are deployed to cloud platforms.
- Explain the fundamentals of how the World Wide Web works, over the internet.
- Utilize dependency management techniques to build with third-party libraries such as ExpressJS, React, EJS, and Bootstrap.
- Persist data Mongo databases, sourced from third-party API or user-generated content.
- Follow agile software development practices during week-long sprints, including pair-programming, stand-ups, daily retrospectives, project management with Kanban boards, regular refactoring, and working in a shared code base.
- Enroll in a Code 401 course or attain an entry-level website development job or internship by completing the course requirements.

### Index of cheatsheets and resources

- [Heroku Cheatsheet](/class-08/cheatsheets/heroku.md)


### Hosted Mongo Databases: Atlas

While you can run Mongo on your own machines, it's quite common to run an instance of Mongo in the cloud so that you can take advantage of better hardware, more memory and higher speed networks. Mongo offers a hosted cloud database service called "Atlas" ... once you've got this setup, it's easy to connect your API servers from anywhere in the world to use it.

1. Sign Up
1. Setup the organization
   - Name your organization and project
   - These can be whatever you want to call them
   - Set Preferred Language (Javascript)
1. Pick the "Free" (Shared Cluster) option
1. Create Cluster
   - Choose AWS
   - Choose the closest region to your location (i.e. Oregon)
1. Create a DB User
   - Click the "Database Access" link
   - Add a new user
     - Choose Password Authentication
     - Choose a username and password
     - For access rights, choose "Atlas Admin"
1. Enable Network Access
   - Click Network Access Button
   - Click "Add IP Address"
   - Choose the "Allow Access from Anywhere" option
   - Click "Confirm"
1. Get your connection string
   - Click "Clusters" button on the left
   - Click on the "Connect" button on the cluster screen
   - To connect to your new database with the command line:
     - Choose the "Connect with Mongo Shell" option
     - Copy out the connection string
     - This will look something like this:
     - `mongo "mongodb+srv://cluster0.xtrut.mongodb.net/<dbname>" --username dba`
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
   - To connect your Node or Express application:
     - Choose the "Connect your Application" option
     - This will look something like this:
     - `mongodb+srv://dba:<password>@cluster0.xtrut.mongodb.net/<dbname>?retryWrites=true&w=majority`
     - Replace `<password>` with the password you created earlier
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
     - Use this as  `MONGODB_URI` in your .env file or at Heroku when you deploy

![Account Setup](assets/atlas-setup.png)

![Choose Plan](assets/atlas-choose-plan.png)

![Cluster](assets/atlas-cluster-screen.png)

![Network Options](assets/atlas-network.png)

![Connect](assets/atlas-connect-options.png)

![Heroku Setup](assets/heroku-mongo.png)

