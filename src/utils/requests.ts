/* const baseUrl = "/data"; */
const baseUrl = "http://localhost:5000/api/v1";

const createApplication = async () => {
  try {
  } catch (e) {
    throw e;
  }
};

const readData = async (endpoint: string) => {
  try {
    if (!endpoint || typeof endpoint !== "string") {
      throw new Error("Please provide a valid endpoint");
    }

    const response = await fetch(`${baseUrl}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error fetching data:", e);
    throw e;
  }
};

const updateData = () => {};

const deleteData = () => {};

export const request = {
  get: readData,
  apply: createApplication,
  patch: updateData,
  delete: deleteData,
};
