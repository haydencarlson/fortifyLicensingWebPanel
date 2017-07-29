export function checkJwt(jwt) {
  let response = await fetch("http://localhost:3000/auth/jwt", {
    method: "POST",
    body: {jwt: jwt},
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    })
  });
}
