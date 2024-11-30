import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Data from "./components/Data";
import AllUsers from "./components/AllUsers";
import QuestionAnswered from "./components/QuestionAnswered";
import SessionLength from "./components/SessionLength";
import StartingKnowledge from "./components/StartingKnowledge";
import CurrentKnowledge from "./components/CurrentKnowledge";
import KnowledgeGain from "./components/KnowledgeGain";
import { ActivityGraph } from "./components/ActivityGraph";
import UserLeaderBoard from "./components/UserLeaderBoard";
import GroupsLeaderBoard from "./components/GroupsLeaderBoard";
import WeakestTopics from "./components/WeakestTopics";
import StrongestTopics from "./components/StrongestTopics";

export default function Home() {
  return (
    <main className="flex bg-slate-100 w-full ">
      <Navbar />
      <div className="w-[100%]">
        <Header />
        <Data />
        <div className="flex flex-wrap items-center justify-center">
          <div className="flex max-[600px]:flex-col min-[666px]:w-[460px] flex-row  flex-wrap justify-around items-center mx-auto lg:mx-10 md:w-[560px] lg:w-[560px]">
            <AllUsers />
            <QuestionAnswered />
            <SessionLength />
            <StartingKnowledge />
            <CurrentKnowledge />
            <KnowledgeGain />
          </div>
          <div className="w-[550px] h-[360px] mt-8 md:mt-5">
            <ActivityGraph />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-evenly">
          <WeakestTopics />
          <StrongestTopics />
        </div>

        <div className="flex flex-wrap mb-5 items-center justify-evenly">
          <UserLeaderBoard />
          <GroupsLeaderBoard />
        </div>
      </div>
    </main>
  );
}
