import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

const MobileClient = (props) => {

  console.log("MobileClient id="+props.id+" render");
  
  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{props.balance}</span>
      <span className='MobileClientFIO'>{props.fio}</span>
    </div>
  );

};

MobileClient.propTypes = {
  id: PropTypes.number.isRequired,
  fio: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};

export default MobileClient;
