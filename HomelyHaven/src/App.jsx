import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, IndexPage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  );
}

export default App;
