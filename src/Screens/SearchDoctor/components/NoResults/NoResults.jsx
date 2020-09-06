import React from 'react';
import Text from 'Components/Text';

function NoResults() {
  return (
    <>
      <div className="mt--4">
        <Text
          text="No results found"
          size="big"
        />
      </div>
      <div className="pd--one-and-half">
        <Text
          text="We couldn't find any doctor with this name or orange id"
          size="small"
          centered
        />
      </div>
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

export default NoResults;