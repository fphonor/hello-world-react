/*eslint no-unused-vars: ["warn", {  "args": "none", "caughtErrorsIgnorePattern": "^[A-Z].*" }]*/
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
 
function Problem (props) {
  const parts = props.parts.map((x) => 
    <Part role={x.role} sentence={x.sentence}/>
  )
  return (
    <div className='problem'>
      <div>{props.index}</div>
      {parts}
      <Actions/>
    </div>
  );
}

function Part (props) {
  return (
    <div>
      <span> {props.role}: </span>
      <span> {props.sentence} </span>
    </div>
  );
}

function Actions (props) {
  return (
    <div>
      <AudioButton/>
      <RecorderButton/>
      <PlayButton/>
      <GradeInfo/>
    </div>
  );
}

function GradeInfo (props) {
  return <span>96</span>;
}

function AudioButton (props) {
  return <span>音</span>;
}

function RecorderButton (props) {
  return <span>录</span>;
}

function PlayButton (props) {
  return <span>播</span>;
}

// eslint-disable-next-line
function Page(props) {
  const problems = props.problems.map((x, i) =>
    <div className='problem_container'>
      <Problem index={i+1} parts={x.parts}/>
      <hr/>
    </div>
  );
  return (
    <div>
      {problems}
    </div>
  );
}

function ProblemStatus (props) {
  return <span className={props.status}>{props.index}</span>
}

function ProblemsStatus (props) {
  return (
    <div className='problems'>
      {
        props.problems.map((x, i) => 
            <ProblemStatus status={x.status} index={i}/>
        )
      }
    </div>
  );
}

function StatusPage(props) {
  return (
    <div>
      <ProblemsStatus problems={props.problems} />      
    </div>
  );
}


// eslint-disable-next-line
const problems = [
  {
    parts: [
      {
        role: 'A',
        sentence: 'A teenager was arrested for sending terrorist threat on Facebook.'
      }, {
        role: 'B',
        sentence: 'He was?'
      }
    ]
  },
  {
    parts: [
      {
        role: 'A',
        sentence: 'A teenager was arrested for sending terrorist threat on Facebook.'
      }, {
        role: 'B',
        sentence: 'He was?'
      }
    ]
  },
  {
    parts: [
      {
        role: 'A',
        sentence: 'A teenager was arrested for sending terrorist threat on Facebook.'
      }, {
        role: 'B',
        sentence: 'He was?'
      }
    ]
  }
];

const problems_status = [
  {status: 'not_done'},
  {status: 'done'},
  {status: 'right'},
  {status: 'wrong'}
];
const task_status = {
  score: 0.5,
  target_score: 0.5,
  submit_time: new Date()
};
class App extends Component {
  render () {
    //return <Page problems={problems}/>
    return <StatusPage problems={problems_status} task_status={task_status}/>
  }
}

export default App;
