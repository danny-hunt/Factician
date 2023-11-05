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
  interruptions: number;
  answered_questions: string[];
  unanswered_questions: string[];
  contradictions: string[];
}

export type AnalysisData = AnalysisFrame[];

export const ANALYSIS_DATA = [
  {
    time_end: 0,
    transcription: [],
    evasiveness: null,
    friendly: null,
    interruptions: 0,
    answered_questions: [],
    unanswered_questions: [],
    contradictions: [],
  },
  {
    time_end: 3,
    transcription: [
      {
        word: "wish you could go to Greenway and ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 1.8,
      },
    ],
    evasiveness: null,
    friendly: null,
    interruptions: 0,
    answered_questions: [],
    unanswered_questions: [],
    contradictions: [],
  },
  {
    time_end: 6,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 6.0,
      },
    ],
    evasiveness: null,
    friendly: null,
    interruptions: 0,
    answered_questions: [],
    unanswered_questions: [],
    contradictions: [],
  },
  {
    time_end: 9,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 8.9,
      },
    ],
    evasiveness: null,
    friendly: null,
    interruptions: 0,
    answered_questions: [],
    unanswered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
    ],
    contradictions: [],
  },
  {
    time_end: 12,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.0,
      },
    ],
    evasiveness: null,
    friendly: null,
    interruptions: 0,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
    ],
    unanswered_questions: [],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
    ],
  },
  {
    time_end: 15,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      // {
      //   word: "you know we have scientists that disagree ",
      //   speaker_tag: 2,
      //   start_time: 12.9,
      //   end_time: 14.9,
      // },
    ],
    evasiveness: 70,
    friendly: 85,
    interruptions: 0,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
    ],
    unanswered_questions: [],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
    ],
  },
  {
    time_end: 18,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 17.5,
      },
    ],
    evasiveness: 65,
    friendly: 75,
    interruptions: 1,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
    ],
    unanswered_questions: ["What about your scientists?"],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
    ],
  },
  {
    time_end: 21,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 17.5,
      },
    ],
    evasiveness: 80,
    friendly: 85,
    interruptions: 1,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: [],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
    ],
  },
  {
    time_end: 24,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 23.5,
      },
    ],
    evasiveness: 75,
    friendly: 70,
    interruptions: 1,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: [],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
    ],
  },
  {
    time_end: 27,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 26.6,
      },
    ],
    evasiveness: 75,
    friendly: 75,
    interruptions: 1,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: [],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
    ],
  },
  {
    time_end: 30,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 29.3,
      },
    ],
    evasiveness: 85,
    friendly: 85,
    interruptions: 1,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: ["Is climate change having an impact on hurricanes?"],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
    ],
  },
  {
    time_end: 33,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact what an impact that will make but ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 32.0,
      },
      {
        word: "I'm not denying climate change but ",
        speaker_tag: 2,
        start_time: 32.0,
        end_time: 33.0,
      },
    ],
    evasiveness: 75,
    friendly: 80,
    interruptions: 1,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: ["Is climate change having an impact on hurricanes?"],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
    ],
  },
  {
    time_end: 36,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact what an impact that will make but ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 32.0,
      },
      {
        word: "I'm not denying climate change but it could very well go back ",
        speaker_tag: 2,
        start_time: 32.0,
        end_time: 33.6,
      },
      {
        word: "well that's denying it ",
        speaker_tag: 1,
        start_time: 33.6,
        end_time: 34.1,
      },
    ],
    evasiveness: 80,
    friendly: 70,
    interruptions: 2,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: ["Is climate change having an impact on hurricanes?"],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
      "Trusted source says that continued glacier melting will raise sea levels significantly. The politician implies that glacier melting may reverse course on its own.",
    ],
  },
  {
    time_end: 39,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact what an impact that will make but ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 32.0,
      },
      {
        word: "I'm not denying climate change but it could very well go back ",
        speaker_tag: 2,
        start_time: 32.0,
        end_time: 33.6,
      },
      {
        word: "well that's denying it ",
        speaker_tag: 1,
        start_time: 33.6,
        end_time: 34.1,
      },
      {
        word: "we're talking about on the news they say that ",
        speaker_tag: 2,
        start_time: 36.0,
        end_time: 39.0,
      },
    ],
    evasiveness: 75,
    friendly: null,
    interruptions: 2,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: ["Is climate change having an impact on hurricanes?"],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
      "Trusted source says that continued glacier melting will raise sea levels significantly. The politician implies that glacier melting may reverse course on its own.",
    ],
  },
  {
    time_end: 42,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact what an impact that will make but ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 32.0,
      },
      {
        word: "I'm not denying climate change but it could very well go back ",
        speaker_tag: 2,
        start_time: 32.0,
        end_time: 33.6,
      },
      {
        word: "well that's denying it ",
        speaker_tag: 1,
        start_time: 33.6,
        end_time: 34.1,
      },
      {
        word: "we're talking about on the news they say that we had hurricanes that were far worse than ",
        speaker_tag: 2,
        start_time: 36.0,
        end_time: 41.1,
      },
    ],
    evasiveness: 80,
    friendly: null,
    interruptions: 2,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: ["Is climate change having an impact on hurricanes?"],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
      "Trusted source says that continued glacier melting will raise sea levels significantly. The politician implies that glacier melting may reverse course on its own.",
    ],
  },
  {
    time_end: 45,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact what an impact that will make but ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 32.0,
      },
      {
        word: "I'm not denying climate change but it could very well go back ",
        speaker_tag: 2,
        start_time: 32.0,
        end_time: 33.6,
      },
      {
        word: "well that's denying it ",
        speaker_tag: 1,
        start_time: 33.6,
        end_time: 34.1,
      },
      {
        word: "we're talking about on the news they say that we had hurricanes that were far worse than what we just had with Michael who ",
        speaker_tag: 2,
        start_time: 36.0,
        end_time: 43.3,
      },
      {
        word: "says that they say ",
        speaker_tag: 1,
        start_time: 43.3,
        end_time: 44.6,
      },
    ],
    evasiveness: 90,
    friendly: null,
    interruptions: 3,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: ["Is climate change having an impact on hurricanes?"],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
      "Trusted source says that continued glacier melting will raise sea levels significantly. The politician implies that glacier melting may reverse course on its own.",
    ],
  },
  {
    time_end: 48,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact what an impact that will make but ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 32.0,
      },
      {
        word: "I'm not denying climate change but it could very well go back ",
        speaker_tag: 2,
        start_time: 32.0,
        end_time: 33.6,
      },
      {
        word: "well that's denying it ",
        speaker_tag: 1,
        start_time: 33.6,
        end_time: 34.1,
      },
      {
        word: "we're talking about on the news they say that we had hurricanes that were far worse than what we just had with Michael who ",
        speaker_tag: 2,
        start_time: 36.0,
        end_time: 43.3,
      },
      {
        word: "says that they say ",
        speaker_tag: 1,
        start_time: 43.3,
        end_time: 44.6,
      },
      {
        word: "people say that ",
        speaker_tag: 2,
        start_time: 44.6,
        end_time: 46.2,
      },
      {
        word: "but what about the scientists ",
        speaker_tag: 1,
        start_time: 46.2,
        end_time: 48.0,
      },
    ],
    evasiveness: 90,
    friendly: 45,
    interruptions: 4,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: [
      "Is climate change having an impact on hurricanes?",
      "But what about the scientists?",
    ],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
      "Trusted source says that continued glacier melting will raise sea levels significantly. The politician implies that glacier melting may reverse course on its own.",
    ],
  },
  {
    time_end: 51,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact what an impact that will make but ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 32.0,
      },
      {
        word: "I'm not denying climate change but it could very well go back ",
        speaker_tag: 2,
        start_time: 32.0,
        end_time: 33.6,
      },
      {
        word: "well that's denying it ",
        speaker_tag: 1,
        start_time: 33.6,
        end_time: 34.1,
      },
      {
        word: "we're talking about on the news they say that we had hurricanes that were far worse than what we just had with Michael who ",
        speaker_tag: 2,
        start_time: 36.0,
        end_time: 43.3,
      },
      {
        word: "says that they say ",
        speaker_tag: 1,
        start_time: 43.3,
        end_time: 44.6,
      },
      {
        word: "people say that ",
        speaker_tag: 2,
        start_time: 44.6,
        end_time: 46.2,
      },
      {
        word: "but what about the scientists say it's worse than ever ",
        speaker_tag: 1,
        start_time: 46.2,
        end_time: 49.0,
      },
    ],
    evasiveness: 90,
    friendly: 65,
    interruptions: 4,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: [
      "Is climate change having an impact on hurricanes?",
      "But what about the scientists that say it's worse than ever?",
    ],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
      "Trusted source says that continued glacier melting will raise sea levels significantly. The politician implies that glacier melting may reverse course on its own.",
      "Trusted source states that scientists agree human-caused climate change is making hurricanes more intense. The politician claims there are scientists who disagree with that.",
    ],
  },
  {
    time_end: 54,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact what an impact that will make but ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 32.0,
      },
      {
        word: "I'm not denying climate change but it could very well go back ",
        speaker_tag: 2,
        start_time: 32.0,
        end_time: 33.6,
      },
      {
        word: "well that's denying it ",
        speaker_tag: 1,
        start_time: 33.6,
        end_time: 34.1,
      },
      {
        word: "we're talking about on the news they say that we had hurricanes that were far worse than what we just had with Michael who ",
        speaker_tag: 2,
        start_time: 36.0,
        end_time: 43.3,
      },
      {
        word: "says that they say ",
        speaker_tag: 1,
        start_time: 43.3,
        end_time: 44.6,
      },
      {
        word: "people say that ",
        speaker_tag: 2,
        start_time: 44.6,
        end_time: 46.2,
      },
      {
        word: "but what about the scientists say it's worse than ever ",
        speaker_tag: 1,
        start_time: 46.2,
        end_time: 49.0,
      },
      {
        word: "you have to show me the scientist because ",
        speaker_tag: 2,
        start_time: 51.5,
        end_time: 53.5,
      },
    ],
    evasiveness: 90,
    friendly: null,
    interruptions: 4,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: [
      "Is climate change having an impact on hurricanes?",
      "But what about the scientists that say it's worse than ever?",
    ],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
      "Trusted source says that continued glacier melting will raise sea levels significantly. The politician implies that glacier melting may reverse course on its own.",
      "Trusted source states that scientists agree human-caused climate change is making hurricanes more intense. The politician claims there are scientists who disagree with that.",
    ],
  },
  {
    time_end: 57,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact what an impact that will make but ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 32.0,
      },
      {
        word: "I'm not denying climate change but it could very well go back ",
        speaker_tag: 2,
        start_time: 32.0,
        end_time: 33.6,
      },
      {
        word: "well that's denying it ",
        speaker_tag: 1,
        start_time: 33.6,
        end_time: 34.1,
      },
      {
        word: "we're talking about on the news they say that we had hurricanes that were far worse than what we just had with Michael who ",
        speaker_tag: 2,
        start_time: 36.0,
        end_time: 43.3,
      },
      {
        word: "says that they say ",
        speaker_tag: 1,
        start_time: 43.3,
        end_time: 44.6,
      },
      {
        word: "people say that ",
        speaker_tag: 2,
        start_time: 44.6,
        end_time: 46.2,
      },
      {
        word: "but what about the scientists say it's worse than ever ",
        speaker_tag: 1,
        start_time: 46.2,
        end_time: 49.0,
      },
      {
        word: "you have to show me the scientist because they have a very big political agenda that's like I can ",
        speaker_tag: 2,
        start_time: 51.5,
        end_time: 56.7,
      },
    ],
    evasiveness: 90,
    friendly: 65,
    interruptions: 4,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: [
      "Is climate change having an impact on hurricanes?",
      "But what about the scientists that say it's worse than ever?",
    ],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
      "Trusted source says that continued glacier melting will raise sea levels significantly. The politician implies that glacier melting may reverse course on its own.",
      "Trusted source states that scientists agree human-caused climate change is making hurricanes more intense. The politician claims there are scientists who disagree with that.",
    ],
  },
  {
    time_end: 60,
    transcription: [
      {
        word: "wish you could go to Greenway and watch these two huge chunks of ice just falling into the ocean raising the sea levels ",
        speaker_tag: 1,
        start_time: 0.0,
        end_time: 7.9,
      },
      {
        word: "and you don't know whether or not that would have happened with or without man you don't know ",
        speaker_tag: 2,
        start_time: 7.9,
        end_time: 12.4,
      },
      {
        word: "what your scientists your scientists ",
        speaker_tag: 1,
        start_time: 12.4,
        end_time: 14.7,
      },
      {
        word: "you know we have scientists that disagree with that ",
        speaker_tag: 2,
        start_time: 12.9,
        end_time: 15.2,
      },
      {
        word: "you know I was thinking and what if he said I've seen the hurricane situation I changed my mind there really is climate change and I thought what an impact what an impact that will make but ",
        speaker_tag: 1,
        start_time: 15.2,
        end_time: 32.0,
      },
      {
        word: "I'm not denying climate change but it could very well go back ",
        speaker_tag: 2,
        start_time: 32.0,
        end_time: 33.6,
      },
      {
        word: "well that's denying it ",
        speaker_tag: 1,
        start_time: 33.6,
        end_time: 34.1,
      },
      {
        word: "we're talking about on the news they say that we had hurricanes that were far worse than what we just had with Michael who ",
        speaker_tag: 2,
        start_time: 36.0,
        end_time: 43.3,
      },
      {
        word: "says that they say ",
        speaker_tag: 1,
        start_time: 43.3,
        end_time: 44.6,
      },
      {
        word: "people say that ",
        speaker_tag: 2,
        start_time: 44.6,
        end_time: 46.2,
      },
      {
        word: "but what about the scientists say it's worse than ever ",
        speaker_tag: 1,
        start_time: 46.2,
        end_time: 49.0,
      },
      {
        word: "you have to show me the scientist because they have a very big political agenda that's like I can also have a political agenda ",
        speaker_tag: 2,
        start_time: 51.5,
        end_time: 58.9,
      },
    ],
    evasiveness: 90,
    friendly: 65,
    interruptions: 4,
    answered_questions: [
      "Do you think climate change is causing ice to melt in greenway?",
      "What about your scientists?",
    ],
    unanswered_questions: [
      "Is climate change having an impact on hurricanes?",
      "But what about the scientists that say it's worse than ever?",
    ],
    contradictions: [
      "Trusted source states that human activities like greenhouse gas emissions have caused glaciers to melt rapidly since the early 1900s. The politician says you don't know if the melting glaciers are caused by humans.",
      "Trusted source says that continued glacier melting will raise sea levels significantly. The politician implies that glacier melting may reverse course on its own.",
      "Trusted source states that scientists agree human-caused climate change is making hurricanes more intense. The politician claims there are scientists who disagree with that.",
    ],
  },
];
