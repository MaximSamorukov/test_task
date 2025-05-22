import cn from "classnames";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { useCollapeContext } from "./store/context";

import s from "./app.module.scss";

function App() {
  const { isOpen } = useCollapeContext();
  return (
    <div className={cn(s.container, { [s.containerOpen]: isOpen })}>
      <Header />
      <Card />
    </div>
  );
}

export default App;
