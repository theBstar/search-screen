import React from 'react';
import Text from '../../../../components/Text';

function ErrorPage() {
  return (
    <>
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
    </>
  )
}

export default ErrorPage;