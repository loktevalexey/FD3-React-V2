"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

var questionText='Как вы относитесь к программированию?';
var answersArr=require('./answers.json');
var defaultFreeAnswerText="???";

ReactDOM.render(
  React.createElement(VotesBlock,{question:questionText,answers:answersArr,
    deffreeanswertext: defaultFreeAnswerText,startWorkMode:1}), 
  document.getElementById('container') 
);

