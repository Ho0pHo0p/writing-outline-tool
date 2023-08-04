import { v4 as uuid } from 'uuid'

const sequenceArray = [
  {
    id: uuid(),
    1: {
      title: "",
      summary: ""
    },
    seqNum: 1,
    numWritten: 'one',
    marker: true,
    markerOn: false,
    placeHoldSum:'Dorothy is on the farm in Kansas when her neighbor threatens her dog Toto...', 
    placeHoldTitle: 'Home Sweet Home',
    scenes: []
  },
  {
    id: uuid(),
    2: {
      title: "",
      summary: ""
    },
    seqNum: 2,
    numWritten: 'two',
    marker: true,
    markerOn: false,
    placeHoldSum:'A Tornado takes Dorothy to a mysterious land...', 
    placeHoldTitle: 'Tornado',
    scenes: []
  },
  {
    id: uuid(),
    3: {
      title: "",
      summary: ""
    },
    seqNum: 3,
    numWritten: 'three',
    marker: false,
    markerOn: false,
    placeHoldSum:'Dorothy lands in Oz and meets Glinda the Good Witch...', 
    placeHoldTitle: 'Not in Kansas Anymore',
    scenes: []
  },
  {
    id: uuid(),
    4: {
      title: "",
      summary: ""
    },
    seqNum: 4,
    numWritten: 'four',
    marker: true,
    markerOn: false,
    placeHoldSum:'Dorothy sets off on her journey to find the Wizard of Oz and return home...', 
    placeHoldTitle: 'On the Yellow Brick Road',
    scenes: []
  },
  {
    id: uuid(),
    5: {
      title: "",
      summary: ""
    },
    seqNum: 5,
    numWritten: 'five',
    marker: false,
    markerOn: false,
    placeHoldSum:'Dorothy, and friends, are tested as their journey brings them to the castle of the Wicked Witch...', 
    placeHoldTitle: 'Flying Monkeys, oh My!',
    scenes: []
  },
  {
    id: uuid(),
    6: {
      title: "",
      summary: ""
    },
    seqNum: 6,
    numWritten: 'six',
    marker: true,
    markerOn: false,
    placeHoldSum:'Dorothy is forced to choose between Toto and the magic slippers...', 
    placeHoldTitle: 'She`s Melting',
    scenes: []
  },
  {
    id: uuid(),
    7: {
      title: "",
      summary: ""
    },
    seqNum: 7,
    numWritten: 'seven',
    marker: true,
    markerOn: false,
    placeHoldSum:'Dorothy finally meets the Wizard, but can he help her get home?...', 
    placeHoldTitle: 'Off to See the Wizard',
    scenes: []
  },
  {
    id: uuid(),
    8: {
      title: "",
      summary: ""
    },
    seqNum: 8,
    numWritten: 'eight',
    marker: false,
    markerOn: false,
    placeHoldSum:'Dorothy wakes up in her bed in Kansas...', 
    placeHoldTitle: 'There is No Place Like Home',
    scenes: []
  }
]

export { sequenceArray }