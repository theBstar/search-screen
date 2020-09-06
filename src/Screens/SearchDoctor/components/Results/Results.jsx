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
  if (results.status === 'error') return <ErrorPage />;
  if (results.status === 'initial') return <Initial />;
  if (results.status === 'loading') return <Loader />;
  if (!results.doctors.length) return <NoResults />;

  return (
    <>
      <div
        className="block--vertical--centered--fluid--flow pt--2"
      >
        {results.doctors.map(item => (
          <DoctorCard
            key={item.id}
            data={item}
            onCheckboxClick={event => {
              event.persist();
              setSelectedDoctors(old => {
                let newSelectedList = [...old];
                if (event.target.checked) {
                  newSelectedList.push(item);
                } else {
                  newSelectedList = newSelectedList.filter(el => el.id !== item.id);
                }
                return newSelectedList;
              })
            }}
            checkboxValue={!!selectedDoctors.find(el => el.id === item.id)}
          />
        ))}
      </div>
      {!!selectedDoctors.length && (
        <Fab
          title="Connect with doctor"
          onClick={() => onConnect(selectedDoctors)}
        />
      )}

    </>
  );
}

export default Results;