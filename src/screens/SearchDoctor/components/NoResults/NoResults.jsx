import React from 'react';
import Text from '../../../../components/Text';
import Box from '../../../../components/Box';

function NoResults() {
  return (
    <Box vertical centered fluid>
      <Text
        text="No results found"
        size="big"
      />
      <div className="pd--2">
        <Text
          text="We couldn't find any doctor with this name or orange id"
          size="small"
          centered
        />
      </div>
      <Text
        text="Please try again!"
        size="small"
        centered
      />
    </Box>
  )
}

export default NoResults;