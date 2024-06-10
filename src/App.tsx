import { useState } from "react";

import Header from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header>
        <Home />
      </Header>
    </div>
  );
}

export default App;
