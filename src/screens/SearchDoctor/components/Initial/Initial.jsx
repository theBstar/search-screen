import React from 'react';
import Text from '../../../../components/Text'
import InitialIllustration from '../../../../assets/search_doctor_empty_state.png'
import Box from '../../../../components/Box';


function Initial() {
  return (
    <Box vertical centered fluid classes="no-overflow">
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
    </Box>
  )
}

export default Initial;