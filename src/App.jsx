import "./App.css";

import Form from "./components/Form";

function App() {
  return (
    <>
      <header>
        <img className="logo" src="/gps.png" alt="GPS logo" />
        <h1>Project Front Page Generator</h1>
      </header>
      <main>
        <Form />
      </main>
    </>
  );
}

export default App;
