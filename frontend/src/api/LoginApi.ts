const api_url: string = "https://main--rococo-druid-6fe908.netlify.app";

export const signIn = (email: string, password: string) => {
  return fetch(`${api_url}/user/signin`, {
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      let token: string = "";
      if (data.token) token = data.token;
      return token;
    });
};
