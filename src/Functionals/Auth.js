const client_id = process.env.REACT_APP_SPOTKEY
const redirect_uri = "http://localhost:3000/"
const AuthEndpoint = "https://accounts.spotify.com/authorize"
const scope = "playlist-modify-private"
// const scopes = [
// "streaming",
// "user-read-email",
// "user-read-private",
// ];

// export const loginUrl = `${AuthEndpoint}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}`;
export const loginUrl = `${AuthEndpoint}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}`;
  // loginUrl = "https://accounts.spotify.com/authorize?client_id=YourClientId&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"
  