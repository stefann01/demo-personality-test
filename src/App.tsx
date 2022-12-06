import React from "react";
import "./App.css";
import LandingView from "./components/LandingView";

import PersonalityTest from "./containers/personalityTest";

function App() {
  const [currentView, setCurrentView] = React.useState<"home" | "questions">(
    "home"
  );

  return (
    <div className="App">
      {currentView === "home" && (
        <LandingView onStartTest={() => setCurrentView("questions")} />
      )}
      {currentView === "questions" && <PersonalityTest />}
    </div>
  );
}

export default App;
