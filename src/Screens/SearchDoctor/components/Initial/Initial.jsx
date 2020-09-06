import React from 'react';
import Text from 'Components/Text';
import InitialIllustration from 'Assets/search_doctor_empty_state.png';


function Initial() {
  return (
    <>
      <img src={InitialIllustration} alt="Start searching for doctors by entering text" />
      <div className="mt--4">
        <Text
          text="Find your doctors"
          size="big"
        />
      </div>
      <div className="pd--one-and-half">
        <Text
          text="Use the search bar to find your doctors using their orange ID"
          size="small"
          centered
        />
      </div>
    </>
  )
}

export default Initial;