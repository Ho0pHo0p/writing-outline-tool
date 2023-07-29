import { v4 as uuid } from 'uuid'

const sequenceArray = [
  {
    id: uuid(),
    title: '',
    summary:'',
    seqNum: 1,
    marker: true,
    markerOn: false,
    placeHoldSum:'Dorothy is on the farm in Kansas when...', 
    placeHoldTitle: 'No Place Like Home',
  },
  {
    id: uuid(),
    title: '',
    summary:'',
    seqNum: 2,
    marker: true,
    markerOn: false,
  },
  {
    id: uuid(),
    title:'',
    summary:'',
    seqNum: 3,
    marker: false,
    markerOn: false,
  },
  {
    id: uuid(),
    title:'',
    summary:'',
    seqNum: 4,
    marker: true,
    markerOn: false,
  },
  {
    id: uuid(),
    title:'',
    summary:'',
    seqNum: 5,
    marker: false,
    markerOn: false,
  },
  {
    id: uuid(),
    title:'',
    summary:'',
    seqNum: 6,
    marker: true,
    markerOn: false,
  },
  {
    id: uuid(),
    title:'',
    summary:'',
    seqNum: 7,
    marker: true,
    markerOn: false,
  },
  {
    id: uuid(),
    title:'',
    summary:'',
    seqNum: 8,
    marker: false,
    markerOn: false,
  }
]

export { sequenceArray }