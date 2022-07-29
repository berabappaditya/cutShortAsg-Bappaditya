import React, { useState } from "react";
import { User, Users, Check } from "./Icons";
export const First = ({ slide, setSlide, name, setName }) => {
  const [reqr, setReqr] = useState(false);
  function submit() {
    if (name) {
      setReqr(false);
      setSlide(slide + 1);
    } else {
      setReqr(true);
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome! first things first...</h2>
      <p>You can always change them later.</p>

      <div className="vhcenter" style={{ width: "100%" }}>
        <div style={{ width: "80%" }}>
          <div style={{ textAlign: "left" }}>
            <label for="name" className={reqr ? "reqr" : " "}>
              Your Name*
            </label>
          </div>
          <input type="text" name="name" placeholder="Steve Jobs" />
          <div style={{ textAlign: "left" }}>
            <label for="Disname" className={reqr ? "reqr" : " "}>
              Display Name*
            </label>
          </div>
          <input
            type="text"
            name="Disname"
            placeholder="Steve"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            onClick={() => {
              submit();
            }}
          >
            create work space
          </button>
        </div>
      </div>
    </div>
  );
};

export const Second = ({ slide, setSlide }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Let's setup home for all your work</h2>
      <p>You always can create another workspace later</p>
      <div className="vhcenter" style={{ width: "100%" }}>
        <div style={{ width: "80%" }}>
          <div style={{ textAlign: "left" }}>
            <label for="name">Workspace Name</label>
          </div>
          <input type="text" placeholder="Eden" />
          <div style={{ textAlign: "left" }}>
            <label for="name">Work URL</label>
          </div>
          <div className="text-input">
            <div className="inputSpan">www.eden.com/</div>
            <input type="Email" className="emailInput" placeholder="Example" />
          </div>
          <button
            onClick={() => {
              setSlide(slide + 1);
            }}
          >
            create work space
          </button>
        </div>
      </div>
    </div>
  );
};

export const Third = ({ slide, setSlide }) => {
  const [personal, setPersonal] = useState(false);
  const [team, setTeam] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>How you are planing to use Eden?</h2>
      <p>We'll streamline your setup experience accordingly.</p>

      <div className="vhcenter" style={{ width: "100%" }}>
        <div style={{ width: "80%" }}>
          <div className="planning-type">
            <div
              className={personal ? "border-prim" : "border-sec"}
              onClick={() => {
                setTeam(false);
                setPersonal(true);
              }}
            >
              <User
                height={"20px"}
                width={"20px"}
                color={personal ? "#664de5" : " "}
              />
              <h3>For myself</h3>
              <p className="textSec">
                Write better. Think more clearly.Stay organized
              </p>
            </div>
            <div
              className={team ? "border-prim" : "border-sec"}
              onClick={() => {
                setTeam(true);
                setPersonal(false);
              }}
            >
              <Users
                height={"25px"}
                width={"25px"}
                color={team ? "#664de5" : " "}
              />
              <h3>With my team</h3>
              <p className="textSec">
                Wikis, docs, tasks & projects,all in one palce.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setSlide(slide + 1);
            }}
          >
            create work space
          </button>
        </div>
      </div>
    </div>
  );
};

export const Fourth = ({ name }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="vhcenter" style={{ width: "100%" }}>
        <div style={{ width: "80%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "80px"
            }}
          >
            <span className="vhcenter finalCheck">
              <Check height={"25px"} width={"22px"} color={"white"} />
            </span>
          </div>

          <h2>Congratulation,{name}!</h2>
          <p>You have completed the onboarding,you can start using Eden!</p>

          <button> create work space</button>
        </div>
      </div>
    </div>
  );
};
