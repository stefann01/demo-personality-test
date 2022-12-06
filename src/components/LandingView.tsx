import React from "react";
import classes from "./LandingView.module.scss";
interface LandingViewProps {
  onStartTest: () => void;
}

export default function LandingView({ onStartTest }: LandingViewProps) {
  return (
    <main className={classes.container}>
      <h1>It is so incredible to finally be understood.</h1>
      <p>
        Take our personality test and get a step closer in your journey to find
        out who you really are.
      </p>
      <button className={classes.startTestButton} onClick={onStartTest}>
        Take the test.
      </button>
    </main>
  );
}
