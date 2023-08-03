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
    placeHoldSum:'Dorothy is on the farm in Kansas when...', 
    placeHoldTitle: 'No Place Like Home',
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
    scenes: []
  }
]

export { sequenceArray }