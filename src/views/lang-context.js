import React from "react";
export const langs = {
  ind: {
    text:
      "Indeks massa tubuh (IMT), atau indeks Quetelet, merupakan proksi heuristik untuk lemak tubuh manusia berdasarkan berat badan seseorang dan tinggi.",
    textbtn: "English",
    foreground: "#000000",
    background: "#eeeeee",
  },
  eng: {
    text:
      "Body mass index (BMI) is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres.",
    textbtn: "Bahasa",
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const LangContext = React.createContext(
  langs.eng // default value
);
