import "./App.css";
import { useGetTopChatsQuery } from "./store/slices/shazamApi";

function App() {
  const { data, isLoading } = useGetTopChatsQuery();
  console.log(data);

  return (
    <div className="App">
      <h1 className="text-center text-green-700 font-bold">Shazam</h1>
    </div>
  );
}

export default App;
