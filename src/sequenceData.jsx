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
    markerText: 'The inciting incident occurs at the end of Sequence 1',
    placeHoldSum:'In this first sequence, we meet the characters, get to know the world they are in, see hints at upcoming conflicts and tension, and learn the basic premise of the story. Sequence One typically ends with the Inciting Incident.', 
    placeHoldTitle: 'Sequence One',
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
    markerText: 'By the end of Sequence 2 the protagonist answers the Call to Action! The story breaks into Act 2',
    placeHoldSum:'After the Inciting Incident, there`s usually a period of time in which the protagonist considers the Call to Action. They debate whether or not to leave their familiar, comfortable world and proceed into the unknown. By the end of Sequence Two, the protagonist is on the journey that will take them to the end of the movie and there is no turning back.', 
    placeHoldTitle: 'Sequence Two',
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
    placeHoldSum:'This is the start of Act Two; the protagonist has officially entered the new world. During Sequence Three, the protagonist faces their first real obstacle, new tensions and conflicts arise, and the stakes are raised.', 
    placeHoldTitle: 'Sequence Three',
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
    markerText: 'The Midpoint occurs at the end of Sequence 4',
    placeHoldSum:'Some might call Sequence Four, along with Sequence Three, the “Fun and Games” of the movie. These two sections deliver on the “Promise of the Premise.” In Sequence Four, the protagonist faces another obstacle or dilemma that comes as a direct result of what happened in Sequence Three. This sequence usually ends with the Midpoint.', 
    placeHoldTitle: 'Sequence Four',
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
    placeHoldSum:'Sequence Five contains the twists and turns of Act Two. Secrets are revealed, relationships are tested, tensions rise, obstacles get more challenging to overcome, and protagonists are really put to the test. In this sequence, the protagonist typically rebels against whatever growth they`re confronted with, wanting instead for things to stay the same.', 
    placeHoldTitle: 'Sequence Five',
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
    markerText: 'The end of Sequence 6 marks the break into Act 3',
    placeHoldSum:'All of Act Two culminates in this: Sequence Six. Things have steadily gotten more and more difficult for the protagonist, all leading to the Culmination or Low Point. At the end of Sequence Six, the protagonist finds themselves at a point of Culmination (positive) or a Low Point (negative) that directly leads to the next sequence: the Climax.', 
    placeHoldTitle: 'Sequence Six',
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
    markerText: 'The Climax occurs in Sequence 7',
    placeHoldSum:'This is it. The big moment. The massive fight scene. The come-to-Jesus moment where your protagonist must change or die. Everything is on the line and the stakes have never been higher. It all happens in Sequence Seven, and we, the audience, learn whether or not the protagonist “succeeds” or “fails.”', 
    placeHoldTitle: 'Sequence Seven',
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
    placeHoldSum:'Sequence Eight is the narrative epilogue. It`s what happens to your characters after their success or failure during the climax, including a look at how they have been impacted by that success or failure. In this sequence, the journey we`ve been on since Sequence One comes to an end. And… fade to black.', 
    placeHoldTitle: 'Sequence Eight',
    scenes: []
  }
]

export { sequenceArray }