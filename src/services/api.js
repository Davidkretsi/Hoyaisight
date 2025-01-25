import axios from "axios";

const API_URL = "http://localhost:5000";

export const uploadFiles = (essay, rubric) => {
    const formData = new FormData();
    formData.append("essay", essay);
    formData.append("rubric", rubric);

    return axios.post(`${API_URL}/upload`, formData);
};

export const getResults = () => {
    return axios.get(`${API_URL}/results`);
};
