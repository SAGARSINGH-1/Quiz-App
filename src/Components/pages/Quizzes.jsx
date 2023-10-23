import React, { useEffect, useState } from "react";
import Topicform from "../requirements/Topic-form";
import Topics from "../requirements/Topics";
import { RaceBy } from "@uiball/loaders";

export default function Quizzes() {
  const [isContentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setContentLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      {isContentLoaded ? (
        <div className="max-w-7xl flex  mx-auto overflow-x-auto overflow-y-hidden">
          <div className="form mt-10">
            <Topicform />
          </div>
          <div>
            <Topics title="Tech Quiz Genre Selection" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center top-[30vh] min-h-screen relative">
          <RaceBy size={100} lineWeight={5} speed={1.4} color="#3f83f8" />
          <p className="text-center text-gray-500 mt-5">Loading...</p>
        </div>
      )}
    </div>
  );
}
