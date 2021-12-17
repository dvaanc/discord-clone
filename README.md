# Discord clone
 Part of the Odin Project curriculum.

## Project Overview
Recreation of Discord on the web. Currently there is no support for mobile screens, 
I plan on making this web application mobile responsive once I finish the application logic, UI/UX and fully integrate Firebase.

### Live Preview: **https://dvaanc.github.io/discord-clone/**

## Special notes
 (Notes for myself and others who want to understand how and why I made these design choices);
 subject to change
### Server data and management
an example object holding data for a server

```javascript

const serverExample = { 
    serverName: "Test Server",
    id: 123456, 
    channelData: [
      {
        category: null,
        channelList: ['announcements', 'welcome']
      },
      {
        category: "text channel",
        channelList: ['general', 'music', 'bot commands']
      },
    ]
}

```

an example for holding user data 
note: user will hold ids for servers which then the web application will fetch the data associated with the unique server ID

```javascript

const testUser = {
  userID: 'testUser',
  password: "test",
  serverList: [ 123456 ],
}

```



