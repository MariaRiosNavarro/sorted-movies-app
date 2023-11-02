import Home from "./pages/Home";
import { AppProvider } from "./Context/useMyContext";

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
