### Simple test with json-server

Follow the video
https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server

- yarn install -g json-server
- create small db.json file

{
    "people": [
        {
            "id": 0,
            "name": "John"
        }
    ]
}

json-server db.json --> launch on port 3000

#### postman
- GET   localhost/people
- POST localhost/people   application/json data  { "name": "fred" }
- PUT  localhost/people/2        { "name":  "camera" }            --> to change the name
- DELETE localhost/people/3     --> deletes that record

s on command line to save a snapshot ( is this still needed? )

Can use faker to bring in some dummy data

- git init
- yarn add faker lodash

json-server generate.js

or similar with employees.js

Search with GET  localhost:3000/people?q=Ian
