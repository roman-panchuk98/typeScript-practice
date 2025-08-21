import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

async function logThreePosts() {
  const posts = await fetchPosts();
  const firstThree = posts.slice(0, 3);
  for (const el of firstThree) {
    // console.log(`
    // TITLE: ${el.title}
    // BODY: ${el.body}
    //         `);
    console.log(`TITLE: ${el.title}\nBODY: ${el.body}\n---`);
  }
}

logThreePosts();
