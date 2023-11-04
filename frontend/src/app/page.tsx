"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

import YouTube, { YouTubeProps } from "react-youtube";
import { ANALYSIS_DATA, AnalysisData } from "./data";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

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
  "1": { name: "Governor Scott", color: "red", kind: "interviewee" },
  "2": { name: "Journalist", color: "blue", kind: "interviewer" },
  "3": { name: "Other Journalist", color: "green", kind: "interviewer" },
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
    while (chartData[chartData.length - 1].time < 60) {
      chartData.push({
        friendly: undefined,
        evasiveness: undefined,
        time: chartData[chartData.length - 1].time + 3,
      });
    }
    return chartData;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex">
        <YoutubeVid
          videoId="fbgnieG9Z4g"
          onClick={() => {
            // vidRef.current?.click();
            isPaused.current = !isPaused.current;
          }}
        />
        <div className="flex flex-col ml-4 w-1/2 h-96 overflow-y-scroll">
          {
            // Display transcription from analysisData:
            analysisData[analysisData.length - 1]?.transcription.map(
              (entry, i) => {
                let { speaker_tag, word } = entry;
                let { name, color, kind } = TAG_INFO[speaker_tag.toString()];
                console.log(color);
                return (
                  <p
                    key={i}
                    className={`flex w-96 mt-1 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pt-3 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4`}
                  >
                    <span className={`inline-block w-4 h-4 rounded-full`} />
                    <span
                      className={`w-36 mx-4`}
                      style={{
                        color: color,
                      }}
                    >
                      {name}
                    </span>
                    <span className="w-4/5">{word}</span>
                  </p>
                );
              }
            )
          }
          <div className="pt-10" ref={messagesEndRef} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="mr-48">
          {analysisData && analysisData[analysisData.length - 1] && (
            <>
              {/** Title for section of stats like evasiveness */}
              <h1 className="text-2xl font-bold ml-8">Stats</h1>
              <>
                <h2
                  className="text-2xl font-bold text-center"
                  style={{
                    color: "#82ca9d",
                  }}
                >
                  Evasiveness:{" "}
                  {analysisData[analysisData.length - 1].evasiveness}
                </h2>
                <h2
                  className="text-2xl mb-4 font-bold text-center"
                  style={{
                    color: "#8884d8",
                  }}
                >
                  Friendliness: {analysisData[analysisData.length - 1].friendly}
                </h2>
                <LineChart
                  width={500}
                  height={300}
                  data={generateChart(analysisData)}
                >
                  <XAxis
                    dataKey="time"
                    ticks={[0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]}
                  />
                  <YAxis domain={[0, 100]} />
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="friendly" stroke="#8884d8" />
                  <Line
                    type="monotone"
                    dataKey="evasiveness"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </>
            </>
          )}
        </div>
        <div className="w-2/3 ml-6 flex-col justify-between space-y-24">
          {analysisData && analysisData[analysisData.length - 1] && (
            <>
              <div>
                {/** Title for section of unanswered questions */}
                <h1 className="text-xl font-bold">Unanswered Questions</h1>

                {analysisData[analysisData.length - 1].questions.map(
                  (question, i) => {
                    return (
                      <div key={i}>
                        <h2 className="text-xl">{question}</h2>
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                {/** Title for section of unanswered questions */}
                <h1 className="text-xl font-bold">Answered Questions</h1>

                {/* {analysisData[analysisData.length - 1].questions.map(
                (question, i) => {
                  return (
                    <div key={i}>
                      <h2 className="text-xl  ">{question}</h2>
                    </div>
                  );
                }
              )} */}
              </div>
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
