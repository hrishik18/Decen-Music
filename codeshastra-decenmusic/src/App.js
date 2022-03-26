import Login from "./screens/Login";
import Home from "./screens/Home";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  return code ? <Home code={code} /> : <Login />;
}

export default App;
