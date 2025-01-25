import React from "react";

const Results = ({ feedback, aiScore, comparison }) => (
    <div className="p-4">
        <h2 className="text-xl mb-4">Grading Results</h2>
        <p><strong>Feedback:</strong> {feedback}</p>
        <p><strong>AI Detection Score:</strong> {aiScore}%</p>
        <h3 className="mt-4 text-lg">Comparison Metrics</h3>
        <p>{comparison}</p>
    </div>
);

export default Results;
