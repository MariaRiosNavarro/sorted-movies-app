import Home from "./pages/Home";
import { AppProvider } from "./Context/useMyContext";

const Loading = <span className="loading loading-spinner loading-lg"></span>;

function App() {
  return (
    <>
      <AppProvider>
        <Home />
      </AppProvider>
    </>
  );
}

export default App;
