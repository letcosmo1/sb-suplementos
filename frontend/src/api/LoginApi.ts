const api_url: string = "http://localhost:3001"

export const signIn = (email: string, password: string) => {
    return fetch(`${api_url}/user/signin`, {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-type": "application/json" },
          })
          .then((res) => res.json())
          .then((data) => {
            let token: string = ""
            if(data.token) token = data.token
            return token
          })
}
