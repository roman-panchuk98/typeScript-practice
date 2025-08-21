const users = ["alice", "bob", "charlie"];

type User = {
  id: number;
  name: string;
};

function toUserObjects(arr: string[]): User[] {
  return arr.map((el, index) => ({
    id: index + 1,
    name: el,
  }));
}

console.log(toUserObjects(users));
