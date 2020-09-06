import React from 'react';
import Text from '../../../../components/Text';
import Box from '../../../../components/Box';

function ErrorPage() {
  return (
    <Box vertical centered fluid>
      <Text
        text="Something went wrong"
        size="big"
      />
      <div className="pd--one-and-half">
        <Text
          text="Please try again!"
          size="small"
          centered
        />
      </div>
    </Box>
  )
}

export default ErrorPage;