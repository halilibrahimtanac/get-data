import axios from "axios";

const getData = async (id) => {
  try {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + id
    );

    return { ...user, post: posts };
  } catch (e) {
    console.log(e);
  }
};

export default getData;
