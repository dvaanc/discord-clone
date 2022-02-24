# Discord clone
 Part of the Odin Project curriculum as a standalone project.

## Project Overview
Recreation of Discord on the web. Current iteration will not have support for mobile screens (yes I know I should be making it mobile first), I figured it would be more important if I skip mobile compatability since 
the actual discord web app online has no mobile support and focus on learning CRUD and learning the different services that firebase offers. There may be plans to make it responsive in the future but I would have most likely moved on to other projects.

### Live Preview: **https://dvaanc.github.io/discord-clone/**
Dummy user credentials (feel free to make your own account or use the provided credentials below to login):
- User: test@gmail.com
- Pass: 123456

## Special notes
 - Notes for myself and for others who want to understand my design choices.
 
### Server data and management
an example object holding data for a server
__Firestore:__ 
_servers/${serverID}/${category}/channels/${channelName}/messages/${messageID}_
  - servers, collection that will hold servers
  - serverID is the unique ID generated using the uuidv4 module, initially it was automated by firestore but 
    I used the module instead since I needed to access the ID again after creating the server.
  - category, if the user created a server using a predefined server template there will be categories created. Channels without a category are assigned to "no category".
  - channels, collection that stores channels
  - channelName is generated by either the user when making a channel or by predefined template.
  - messages, collection that will hold messages
  - messageID, a document that will contain user profile, username, timestamp and message content

```javascript

const testUser = {
  userID: 'testUser',
  password: "test",
  serverList: [ 123456 ],
}

```



