import React from "react";
import "./Education.css";

interface EducationProps {
  examName1: string;
  examName2: string;
  examName3: string;
}
const Education = ({ examName1, examName2, examName3 }: EducationProps) => {
  return (
    <>
      <div className="education"></div>
      <h2>
        A/L :{examName1} <br />
        R/Sri Walagamba Central College
        <br />
        <b>Technology Stream</b>
        <br />
        Engineering Technology - C
        <br />
        Science For Technology - B
        <br />
        Information Technology - C
        <br />
        <b>District Rank-173</b>
        <br />
        <br /> O/L: {examName2}
        <br />
        R/Kahatapitiya Hapugahakumbura Vidyalaya
        <br />
        I have done.
        <br />
        3B, 4C and 2S.
        <br />
        English C
        <br />
        Maths C
        <br />
        <br />
        Following degree: {examName3} <br />
        SLTC Research University
        <br /> (SRI LANKA TECHNOLOGICAL CAMPUS)
      </h2>
    </>
  );
};

export default Education;
