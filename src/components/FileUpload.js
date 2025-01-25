import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
    const [essay, setEssay] = useState(null);
    const [rubric, setRubric] = useState(null);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("essay", essay);
        formData.append("rubric", rubric);

        try {
            const response = await axios.post("http://localhost:5000/upload", formData);
            setMessage(response.data.message || "Upload successful!");
        } catch (error) {
            setMessage("Upload failed. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-xl mb-4">Upload Your Essay and Rubric</h2>
            <input
                type="file"
                onChange={(e) => setEssay(e.target.files[0])}
                className="block mb-4"
                required
            />
            <input
                type="file"
                onChange={(e) => setRubric(e.target.files[0])}
                className="block mb-4"
                required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                Upload
            </button>
            <p className="mt-4">{message}</p>
        </form>
    );
};

export default FileUpload;
