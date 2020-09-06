import React from 'react';
import './Loader.scss';
import Box from '../../../../components/Box';

function Loader() {
  return (
    <Box vertical centered fluid>
      <div className="loader">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </Box>
  )
}

export default Loader;