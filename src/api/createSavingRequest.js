import axios from "axios";

export const createSavingRequest = async (user, id) => {
  try {
    console.log(`http://localhost:3001/savings/${id}`);
    console.log(user);
    const response = await axios.post(
        `http://localhost:3001/savings/${id}`,
      user
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
