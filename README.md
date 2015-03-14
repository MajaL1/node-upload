# Node.js Basic File Upload
Upload files using Node.js with upload percentages. This example does not use AJAX.

## Installing
Clone the repo and run the following:
```
npm install
```

## Running
You can either use node to run this, I suggest something like supervisor:
```
npm install -g supervisor
```

Once supervisor is installed:
```
supervisor server.js
```
Navigate to ```http://localhost:3000``` to view the demo

## How does it work?
- Once you have a server running, upload a file and click on upload.
- The server will post to ```/upload``` and will give you %age details of the uploaded file


### Todo
- ~~Deploy for live demo~~

Demo: https://mysterious-fjord-6917.herokuapp.com/

---
PR's welcome.
