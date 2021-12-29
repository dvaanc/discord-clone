export const templates = {
  createMyOwn: {
    textChannels: [
      {
        category: 'text channels',
        channels: ['general'],
      },
    ],
    voiceChannels: [
      {
        category: 'voice channels',
        channels: ['General'],
      },
    ],
  },
  createGaming: {
    textChannels: [      
      {
      category: 'text channels',
      channels: ['general', 'clips and highlights'],
      },
    ],
    voiceChannels: [
      {
        category: 'voice channels',
        channels: ['Lobby', 'Gaming' ],
      },
    ],
  },
  createSchoolClub: {
    textChannels: [
      {
        category: 'information',
        channels: ['welcome and rules', 'announcements', 'resources'],
      },
      {
        category: 'text channels',
        channels: ['general', 'meeting plans', 'off topic']
      },
    ],
    voiceChannels: [
      {
        category: 'voice channels',
        channels: ['Lounge', 'Meeting Room 1', 'Meeting Room 2']
      },
    ],
  },
  createStudyGroup: {
    textChannels: [
      {
        category: 'information',
        channels: ['welcome and rules', 'notes resources'],
      },
      {
        category: 'text channels',
        channels: ['general', 'homework help', 'session planning', 'off topic'],
      },
    ],
    voiceChannels: [
      {
        category: 'voice channels',
        channels: ['Lounge', 'Study Room 1', 'Study Room 2'],
      },
    ],
  },
  createFriends: {
    textChannels: [
      {
        category: 'text channels',
        channels: ['general', 'games', 'music'],
      },
    ],
    voiceChannels: [
      {
        category: 'voice channels',
        channels: ['Lounge', 'Stream Room'],
      },
    ],
  },
  createArtistsAndCreators: {
    textChannels: [
      {
        category: 'information',
        channels: ['welcome and rules', 'announcements'],
      },
      {
        category: 'text channels',
        channels: ['general', 'events', 'ideas and feedback'],
      },
    ],
    voiceChannels: [
      {
        category: 'voice channels',
        channels: ['Lounge', 'Community Hangout', 'Stream Room'],
      },
    ],
  },
  createLocalCommunity: {
    textChannels: [
      {
        category: 'information',
        channels: ['welcome and rules', 'announcements', 'resources'],
      },
      {
        cateogry: 'text channels',
        channels: ['general', 'meeting plans', 'off topic'],
      },
    ],
    voiceChannels: [
      {
        category: 'voice channels',
        channels: ['Lounge', 'Meeting Room'],
      },
    ],
  },
} as any