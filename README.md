# react_complete_course
Completed Stephen Grider's fundamental React course (https://www.udemy.com/course/react-redux/)


To run the streaming app:

- You will need node and npm installed
- clone this repository
- cd streams
- open 3 tabs in this directory
- navigate into api, client and rtmpserver folders (1 in each of the 3 tabs)
- run `npm i` in each folder to install required node dependencies
- then run `npm start` in each folder to start each instance
- client should automatically open in your browser on `localhost:3000`

What can be done: 
- Sign in with Google OAuth (1)
- Once signed in, a `Create Streams` button will appear below. CRUD operations can be performed on the Streams that you created, i.e. deleted and edited
- I streamed my desktop via a custom OBS stream (https://obsproject.com/) for testing. Configure your custom stream to be the ith element in the array. For example, `Other Stream` (2) is the first stream in the screenshot below. This has an id of 1. 
![image](https://user-images.githubusercontent.com/36197976/112505521-c4afff00-8d84-11eb-9fa6-f0f1de8d62ad.png)

- Once clicked, the show stream tab will open:
![image](https://user-images.githubusercontent.com/36197976/112505240-8286bd80-8d84-11eb-9f84-518cfe51cb46.png)
