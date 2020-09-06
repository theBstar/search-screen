import React from 'react';
import './DoctorCard.scss';
import Checkbox from '../Checkbox';

function DoctorCard({ data, onCheckboxClick, checkboxValue }) {
  return (
    <div className="card">
      <div className="avatar">
      </div>
      <div className="content">
        <div className="primary-text">
          {data.username}
        </div>
        <div className="secondary-text capitalize">
          {data.name}
        </div>
      </div>
      <div className="action">
        <Checkbox onClick={onCheckboxClick} vlaue={checkboxValue} />
      </div>
    </div>
  )
}

export default DoctorCard;
