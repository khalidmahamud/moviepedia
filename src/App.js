import { useState } from "react";
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import './App.css';

function App() {
  const [searchParam, setSearchParam] = useState('');

  return (
    <div className="App">
      <Header 
        searchParam={searchParam}
        setSearchParam={setSearchParam}
      />
      <AllRoutes 
        searchParam={searchParam}
        setSearchParam={setSearchParam}
      />
      <Footer />
    </div>
  );
}

export default App;
