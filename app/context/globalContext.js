"use client";
import axios from "axios";

import React, { useState, useContext, createContext, useEffect } from "react"

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [activeUsers, setActiveUsers] = useState({});
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [avgSessionLength, setAvgSessionLength] = useState(0);
    const [startingKnowledge, setStartingKnowledge] = useState(0);
    const [currentKnowledge, setCurrentKnowledge] = useState(0);
    const [activity, setActivity] = useState([]);
    const [weakestTopics, setWeakestTopics] = useState([]);
    const [strongTopics, setStrongTopics] = useState([]);
    const [userLeaderBoard, setUserLeaderBoard] = useState([]);
    const [groupLeaderBoard, setGroupLeaderBoard] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`api/data`)
            const data = res.data;
            const { metrics, activity, topics, user_leaderboard, groups_leaderboard } = data;

            setActiveUsers(metrics.active_users);
            setQuestionsAnswered(metrics.questions_answered);
            setAvgSessionLength(metrics.average_session_length_seconds);
            setStartingKnowledge(metrics.starting_knowledge_percentage);
            setCurrentKnowledge(metrics.current_knowledge_percentage);
            setActivity(activity.monthly);
            setWeakestTopics(topics.weakest);
            setStrongTopics(topics.strongest);
            setUserLeaderBoard(user_leaderboard);
            setGroupLeaderBoard(groups_leaderboard);

        } catch (error) {
            console.log("error fetching forecast data:", error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                activeUsers,
                questionsAnswered,
                avgSessionLength,
                startingKnowledge,
                currentKnowledge,
                activity,
                weakestTopics,
                strongTopics,
                userLeaderBoard,
                groupLeaderBoard,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);