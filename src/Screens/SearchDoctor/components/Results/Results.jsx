import React, { useState } from 'react';
import ErrorPage from '../ErrorPage';
import Initial from '../Initial';
import Loader from '../Loader';
import NoResults from '../NoResults';
import Fab from 'Components/Fab';
import DoctorCard from 'Components/DoctorCard/DoctorCard';


function Results({
  results,
  onConnect
}) {
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  console.log('res ', results);
  if (results.status === 'error') return <ErrorPage />;
  if (results.status === 'initial') return <Initial />;
  if (results.status === 'loading') return <Loader />;
  if (!results.doctors.length) return <NoResults />;

  return (
    <>
      <div className="block--vertical--centered--fluid--flow pt--2">
        {results.doctors.map(item => (
          <DoctorCard
            key={item.id}
            data={item}
            checkboxTrackerProps={{ 'data-doctor-id': item.id }}
          />
        ))}
      </div>
      <Fab
        title="Connect with doctor"
        onClick={() => { console.log('hello'); }}
      />
    </>
  );
}

export default Results;