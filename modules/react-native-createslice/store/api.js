const apiUsersRequest = () => {
  const res = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  return res;
};

export const api = {
  apiUsersRequest
};
