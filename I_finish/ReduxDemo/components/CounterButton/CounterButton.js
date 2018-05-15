import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { counterButton_create, counterButton_add } from './counterButtonAC';

import './CounterButton.css';

class intCounterButton extends React.PureComponent {

  static propTypes = {
    counterid: PropTypes.number.isRequired, // передано из родительского компонента
    counterButton: PropTypes.object.isRequired, // передано из Redux
  };

  componentWillMount() {
    // изначально счётчика с идентификатором counterid нет
    // создадим
    this.props.dispatch( counterButton_create(this.props.counterid) );
  }

  incCounter = () => {
    this.props.dispatch( counterButton_add(this.props.counterid,1) );
  }

  decCounter = () => {
    this.props.dispatch( counterButton_add(this.props.counterid,-1) );
  }
  
  render() {

    // получим значение именно этого счётчика
    let counterValue=this.props.counterButton.counters[this.props.counterid];

    return (
      <div className="CounterButton">
        <input type='button' value='-' onClick={this.decCounter} />
        <span className="CounterButtonValue">{counterValue}</span>
        <input type='button' value='+' onClick={this.incCounter} />
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    // раздел Redux state под именем counterButton будет доступен
    // данному компоненту как this.props.counterButton
    counterButton: state.counterButton,
  };
};

const CounterButton = connect(mapStateToProps)(intCounterButton);

export default CounterButton;
