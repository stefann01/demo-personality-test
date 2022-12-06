import React from "react";
import classes from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
export default function Section({ children, className }: SectionProps) {
  return (
    <section className={`${classes.section} ${className}`}>{children}</section>
  );
}
