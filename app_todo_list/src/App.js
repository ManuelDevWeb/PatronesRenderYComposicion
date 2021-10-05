import React from "react";

// Importando provider del context
import {TodoProvider} from "./TodoContext";

// Importando componentes
import { AppUI } from "./AppUI";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
