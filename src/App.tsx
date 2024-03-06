import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./CollegeBasketballTeams.json";
import { render } from "@testing-library/react";
import { Interface } from "readline";

const TeamsData = data.teams;

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return (
    <>
      <h1>NCAA March Madness</h1>
      <p>View all the teams "Duke"ing it out in March Madness this year!</p>
    </>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const t = this.props;

    return (
      <>
        <div className="team">
          <h1>{t.school}</h1>
          <h2>{t.name}</h2>
          <p>
            {t.city}, {t.state}
          </p>
        </div>
      </>
    );
  }
}

function TeamList() {
  return (
    <>
      {TeamsData.map((t) => (
        <Team key={t.tid} {...t} />
      ))}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
