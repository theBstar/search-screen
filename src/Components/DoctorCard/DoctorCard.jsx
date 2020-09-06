import React from 'react';
import './DoctorCard.scss';

function DoctorCard({ data, checkboxTrackerProps }) {
  return (
    <div className="card">
      <div className="avatar">
        {/* <img src={data.userAvatar} alt="User Profile" /> */}
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
        <div {...checkboxTrackerProps}>
          Checkbox
        </div>
      </div>
    </div>
  )
}

export default DoctorCard;
