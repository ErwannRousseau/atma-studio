"use client";
import JSConfetti from "js-confetti";
import { useEffect } from "react";

export function ConfettiJS() {
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }, []);

  return null;
}
