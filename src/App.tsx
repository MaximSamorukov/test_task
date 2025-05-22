import { useState } from "react";
import s from "./app.module.scss";
import { Header } from "./components/Header";
import { Card } from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={s.container}>
      <Header />
      <Card />
    </div>
  );
}

export default App;
