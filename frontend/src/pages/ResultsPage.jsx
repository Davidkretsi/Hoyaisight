import React, { useEffect, useState } from "react";
import Results from "../components/Results";
import { getResults } from "../services/api";

const ResultsPage = () => {
    const [feedback, setFeedback] = useState("");
    const [aiScore, setAiScore] = useState(0);
    const [comparison, setComparison] = useState("");

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await getResults();
                setFeedback(response.data.feedback);
                setAiScore(response.data.aiScore);
                setComparison(response.data.comparison);
            } catch (error) {
                console.error("Failed to fetch results:", error);
            }
        };

        fetchResults();
    }, []);

    return <Results feedback={feedback} aiScore={aiScore} comparison={comparison} />;
};

export default ResultsPage;
