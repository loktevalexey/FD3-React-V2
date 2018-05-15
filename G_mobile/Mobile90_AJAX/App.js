"use strict";

require('es6-promise').polyfill();
import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

ReactDOM.render(<MobileCompany />, document.getElementById('container') );

