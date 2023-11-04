export interface Transcription {
  word: string;
  speaker_tag: number; // TODO: get names into UI too
  start_time: number;
  end_time: number;
}

export interface Interruption {
  speaker_tag: number;
  time: number;
}

export interface AnalysisFrame {
  time_end: number;
  transcription: Transcription[];
  evasiveness: number | null;
  friendly: number | null;
  interruptions: Interruption[];
  questions: string[];
}

export type AnalysisData = AnalysisFrame[];

export const ANALYSIS_DATA: AnalysisData = [
  {
    time_end: 0,
    transcription: [],
    evasiveness: null,
    friendly: null,
    interruptions: [],
    questions: [],
  },
  {
    time_end: 3,
    transcription: [
      {
        word: "you really think that all of those deputies were ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.0,
      },
    ],
    evasiveness: null,
    friendly: null,
    interruptions: [],
    questions: ["You really think that all of those deputies were?"],
  },
  {
    time_end: 6,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 6.0,
      },
    ],
    evasiveness: null,
    friendly: null,
    interruptions: [],
    questions: ["You really think that all of those deputies were off-duty?"],
  },
  {
    time_end: 9,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 8.9,
      },
    ],
    evasiveness: null,
    friendly: null,
    interruptions: [],
    questions: ["You really think that all of those deputies were off-duty?"],
  },
  {
    time_end: 12,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 11.9,
      },
    ],
    evasiveness: null,
    friendly: null,
    interruptions: [],
    questions: ["You really think that all of those deputies were off-duty?"],
  },
  {
    time_end: 15,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 14.8,
      },
    ],
    evasiveness: null,
    friendly: null,
    interruptions: [],
    questions: ["You really think that all of those deputies were off-duty?"],
  },
  {
    time_end: 18,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 17.8,
      },
    ],
    evasiveness: null,
    friendly: null,
    interruptions: [],
    questions: ["You really think that all of those deputies were off-duty?"],
  },
  {
    time_end: 21,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
    ],
    evasiveness: null,
    friendly: 80,
    interruptions: [],
    questions: ["You really think that all of those deputies were off-duty?"],
  },
  {
    time_end: 24,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
    ],
    evasiveness: 70,
    friendly: null,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
    ],
  },
  {
    time_end: 27,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.0,
      },
    ],
    evasiveness: 80,
    friendly: 85,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
    ],
  },
  {
    time_end: 30,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
    ],
    evasiveness: 90,
    friendly: null,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
    ],
  },
  {
    time_end: 33,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
      {
        word: "I'm appreciative are ",
        speaker_tag: 1,
        start_time: 31.0,
        end_time: 32.8,
      },
    ],
    evasiveness: 90,
    friendly: 80,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
    ],
  },
  {
    time_end: 36,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
      {
        word: "I'm appreciative are everybody comes to my fence and you guys should we wear the ",
        speaker_tag: 1,
        start_time: 31.0,
        end_time: 35.8,
      },
    ],
    evasiveness: null,
    friendly: 70,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
    ],
  },
  {
    time_end: 39,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
      {
        word: "I'm appreciative are everybody comes to my fence and you guys should we wear the 43-year lower crime rate we should be very ",
        speaker_tag: 1,
        start_time: 31.0,
        end_time: 37.8,
      },
    ],
    evasiveness: null,
    friendly: 60,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
    ],
  },
  {
    time_end: 42,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
      {
        word: "I'm appreciative are everybody comes to my fence and you guys should we wear the 43-year lower crime rate we should be very supportive of our law enforcement, ",
        speaker_tag: 1,
        start_time: 31.0,
        end_time: 40.0,
      },
      {
        word: "Do you think it's ok for them to ",
        speaker_tag: 2,
        start_time: 40.3,
        end_time: 41.9,
      },
    ],
    evasiveness: 90,
    friendly: 70,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
      "Do you think it's ok for them to?",
    ],
  },
  {
    time_end: 45,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
      {
        word: "I'm appreciative are everybody comes to my fence and you guys should we wear the 43-year lower crime rate we should be very supportive of our law enforcement, ",
        speaker_tag: 1,
        start_time: 31.0,
        end_time: 40.0,
      },
      {
        word: "Do you think it's ok for them to be there on duty? ",
        speaker_tag: 2,
        start_time: 40.3,
        end_time: 44.1,
      },
      {
        word: "I'm ",
        speaker_tag: 1,
        start_time: 44.7,
        end_time: 44.8,
      },
    ],
    evasiveness: 90,
    friendly: 50,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
      "Do you think it's ok for them to be there on duty?",
    ],
  },
  {
    time_end: 48,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
      {
        word: "I'm appreciative are everybody comes to my fence and you guys should we wear the 43-year lower crime rate we should be very supportive of our law enforcement, ",
        speaker_tag: 1,
        start_time: 31.0,
        end_time: 40.0,
      },
      {
        word: "Do you think it's ok for them to be there on duty? ",
        speaker_tag: 2,
        start_time: 40.3,
        end_time: 44.1,
      },
      {
        word: "I'm very appreciative our police chief's endorsement last week dissociation ",
        speaker_tag: 1,
        start_time: 44.7,
        end_time: 48.0,
      },
    ],
    evasiveness: 90,
    friendly: 75,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
      "Do you think it's ok for them to be there on duty?",
    ],
  },
  {
    time_end: 51,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
      {
        word: "I'm appreciative are everybody comes to my fence and you guys should we wear the 43-year lower crime rate we should be very supportive of our law enforcement, ",
        speaker_tag: 1,
        start_time: 31.0,
        end_time: 40.0,
      },
      {
        word: "Do you think it's ok for them to be there on duty? ",
        speaker_tag: 2,
        start_time: 40.3,
        end_time: 44.1,
      },
      {
        word: "I'm very appreciative our police chief's endorsement last week dissociation ",
        speaker_tag: 1,
        start_time: 44.7,
        end_time: 48.0,
      },
    ],
    evasiveness: 90,
    friendly: 70,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
      "Do you think it's ok for them to be there on duty?",
    ],
  },
  {
    time_end: 54,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
      {
        word: "I'm appreciative are everybody comes to my fence and you guys should we wear the 43-year lower crime rate we should be very supportive of our law enforcement, ",
        speaker_tag: 1,
        start_time: 31.0,
        end_time: 40.0,
      },
      {
        word: "Do you think it's ok for them to be there on duty? ",
        speaker_tag: 2,
        start_time: 40.3,
        end_time: 44.1,
      },
      {
        word: "I'm very appreciative our police chief's endorsement last week dissociation ",
        speaker_tag: 1,
        start_time: 44.7,
        end_time: 48.0,
      },
    ],
    evasiveness: 95,
    friendly: 70,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
      "Do you think it's ok for them to be there on duty?",
    ],
  },
  {
    time_end: 57,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
      {
        word: "I'm appreciative are everybody comes to my fence and you guys should we wear the 43-year lower crime rate we should be very supportive of our law enforcement, ",
        speaker_tag: 1,
        start_time: 31.0,
        end_time: 40.0,
      },
      {
        word: "Do you think it's ok for them to be there on duty? ",
        speaker_tag: 2,
        start_time: 40.3,
        end_time: 44.1,
      },
      {
        word: "I'm very appreciative our police chief's endorsement last week dissociation ",
        speaker_tag: 1,
        start_time: 44.7,
        end_time: 48.0,
      },
    ],
    evasiveness: 90,
    friendly: 60,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
      "Do you think it's ok for them to be there on duty?",
    ],
  },
  {
    time_end: 60,
    transcription: [
      {
        word: "you really think that all of those deputies were off-duty? ",
        speaker_tag: 2,
        start_time: 0.6,
        end_time: 3.4,
      },
      {
        word: "I'm very proud of the last week the police chief's endorsed me I'm very proud that 40 Sheriff's have endorsed me I'm very proud of all the support from the law enforcement but if 43 year loan or crime rate so we invite them to our campaign events and I'm very appreciative of the ones that came ",
        speaker_tag: 1,
        start_time: 3.4,
        end_time: 21.0,
      },
      {
        word: "But do you think it was a problem to have duty law enforcement there? ",
        speaker_tag: 2,
        start_time: 21.6,
        end_time: 23.9,
      },
      {
        word: "I'm very appreciative of both their support and those it come to my vents ",
        speaker_tag: 1,
        start_time: 24.3,
        end_time: 27.9,
      },
      {
        word: "You didn't answer the question should there be discipline? ",
        speaker_tag: 3,
        start_time: 27.9,
        end_time: 30.0,
      },
      {
        word: "I'm appreciative are everybody comes to my fence and you guys should we wear the 43-year lower crime rate we should be very supportive of our law enforcement, ",
        speaker_tag: 1,
        start_time: 31.0,
        end_time: 40.0,
      },
      {
        word: "Do you think it's ok for them to be there on duty? ",
        speaker_tag: 2,
        start_time: 40.3,
        end_time: 44.1,
      },
      {
        word: "I'm very appreciative our police chief's endorsement last week dissociation ",
        speaker_tag: 1,
        start_time: 44.7,
        end_time: 48.0,
      },
    ],
    evasiveness: 90,
    friendly: 65,
    interruptions: [],
    questions: [
      "You really think that all of those deputies were off-duty?",
      "But do you think it was a problem to have duty law enforcement there?",
      "You didn't answer the question should there be discipline?",
      "Do you think it's ok for them to be there on duty?",
    ],
  },
];
