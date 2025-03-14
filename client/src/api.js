const API_URL = "http://127.0.0.1:8000/api/";

export const getInterns = async () => {
  try {
    const response = await fetch(`${API_URL}interns/`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching interns:", error);
  }
};
