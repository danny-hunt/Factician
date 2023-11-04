"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

import YouTube, { YouTubeProps } from "react-youtube";
import { ANALYSIS_DATA, AnalysisData } from "./data";

const YoutubeVid = ({
  videoId,
  onClick,
}: {
  videoId: string;
  onClick: any;
}) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: 58,
      end: 115,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onPlay={onClick}
      onPause={onClick}
      onReady={onPlayerReady}
    />
  );
};

interface Person {
  name: string;
  color: string;
  kind: "interviewee" | "interviewer";
}

type TagInfo = Record<string, Person>;

const TAG_INFO: TagInfo = {
  "1": { name: "Rick Scott", color: "red", kind: "interviewee" },
  "2": { name: "Jenny", color: "blue", kind: "interviewer" },
  "3": { name: "Jeff", color: "green", kind: "interviewer" },
};

type ChartData = {
  friendly: number;
  evasiveness: number;
  time: number;
}[];

export default function Home() {
  const [analysisData, setAnalysisData] = React.useState<AnalysisData>([]);
  const isPaused = useRef<boolean>(true);
  const messagesEndRef = useRef(null);
  // const vidRef = useRef(null);

  // Every three seconds, update the analysis data with the next entry from ANALYSIS_DATA

  const updateAnalysisData = () => {
    if (isPaused.current) {
      return;
    }
    setAnalysisData((prev: AnalysisData) => {
      const next = ANALYSIS_DATA[prev.length];
      if (next) {
        return ANALYSIS_DATA.slice(0, prev.length + 1);
      }
      return prev;
    });
    // @ts-ignore
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateAnalysisData();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // @ts-ignore
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    console.log(analysisData);
  }, [analysisData, analysisData.length]);

  const generateChart = (analysisData: AnalysisData): ChartData => {
    const chartData: ChartData = [];
    let prevFriendly = 50;
    let prevEvasiveness = 50;
    analysisData.forEach((entry) => {
      const { friendly, evasiveness, time_end } = entry;
      if (friendly) {
        prevFriendly = friendly;
      }
      if (evasiveness) {
        prevEvasiveness = evasiveness;
      }
      chartData.push({
        friendly: friendly ?? prevFriendly ?? 50,
        evasiveness: evasiveness ?? prevEvasiveness ?? 50,
        time: time_end,
      });
    });
    return chartData;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <YoutubeVid
          videoId="fbgnieG9Z4g"
          onClick={() => {
            // vidRef.current?.click();
            isPaused.current = !isPaused.current;
          }}
        />
        <div className="flex flex-col ml-4 w-96 h-96 overflow-y-scroll">
          {
            // Display transcription from analysisData:
            analysisData[analysisData.length - 1]?.transcription.map(
              (entry, i) => {
                const { speaker_tag, word } = entry;
                const { name, color, kind } = TAG_INFO[speaker_tag.toString()];
                return (
                  <p
                    key={i}
                    className={`fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30`}
                  >
                    <span
                      className={`inline-block w-2 h-2 rounded-full mr-2 bg-${color}-500`}
                    />
                    <span className={`font-bold text-${color} mx-2`}>
                      {name}
                    </span>
                    {word}
                  </p>
                );
              }
            )
          }
          <div className="pt-10" ref={messagesEndRef} />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          {analysisData && analysisData[analysisData.length - 1] && (
            <>
              {/** Title for section of stats like evasiveness */}
              <h1 className="text-2xl font-bold ml-8">Stats</h1>
              <>
                <h2 className="text-2xl font-bold text-center">
                  Evasiveness:{" "}
                  {analysisData[analysisData.length - 1].evasiveness}
                </h2>
                <h2 className="text-2xl font-bold text-center">
                  Friendliness: {analysisData[analysisData.length - 1].friendly}
                </h2>
              </>
            </>
          )}
        </div>
        <div className="w-2/3">
          {analysisData && analysisData[analysisData.length - 1] && (
            <>
              {/** Title for section of unanswered questions */}
              <h1 className="text-xl font-bold">Unanswered Questions</h1>

              {analysisData[analysisData.length - 1].questions.map(
                (question, i) => {
                  return (
                    <div key={i}>
                      <h2 className="text-xl  ">{question}</h2>
                    </div>
                  );
                }
              )}
            </>
          )}
        </div>
      </div>

      <div>
        {" "}
        {/* Button that plays/paused the youtube video and the interval in the useEffect */}
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick=
        >
          {isPaused.current ? "Play" : "Pause"}
        </button> */}
      </div>
    </main>
  );
}
