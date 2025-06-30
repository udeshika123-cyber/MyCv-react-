import React from "react";
import "./mySelf.css";

interface MySelfProps {
  name: string;
  university: string;
  NicNo: string;
  gender: string;
  country: string;
  address: string;
  hobbies: string;
  status: string;
  Date_of_birth: string;
}

const mySelf = ({
  name,
  university,
  NicNo,
  gender,
  country,
  address,
  hobbies,
  status,
  Date_of_birth,
}: MySelfProps) => {
  return (
    <>
      <div className="mySelf-header">
        <h1>
          <u>Personal Profile</u>
        </h1>
      </div>
      <div className="mySelf">
        <h2>
          Name In Full : {name}
          <br />
          University : {university}
          <br />
          NIC NO :{NicNo}
          <br />
          Gender : {gender}
          <br />
          Country: {country}
          <br />
          Address : {address}
          <br />
          Hobbies :{hobbies}
          <br />
          Status : {status}
          <br />
          DOB : {Date_of_birth}
        </h2>
      </div>
    </>
  );
};

export default mySelf;
