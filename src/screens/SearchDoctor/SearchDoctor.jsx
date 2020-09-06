import React from 'react';
import BackButton from '../../components/BackButton';
import Text from '../../components/Text';
import SearchInput from '../../components/SearchInput';
import useDebouncedValue from '../../hooks/useDebouncedValue';
import Results from './components/Results';
import useDoctorSearchData from './hooks/useDoctorSearchData';
import Box from '../../components/Box';

function SearchDoctor() {

  const { doctorData, submitDoctorData, updateDoctorDataOnSearch } = useDoctorSearchData();
  const [searchTerm, updateSearchTerm] = useDebouncedValue(
    "",
    300,
    updateDoctorDataOnSearch,
  );

  return (
    <Box
      component="main"
      vertical
      fluid
      root
    >
      <BackButton />
      <Box
        component="section"
        vertical
        fluid
        classes="mt--2"
      >
        <header>
          <Text
            component="h1"
            text="Search orange ID or name"
            size="big"
          />
        </header>
        <Box
          component="section"
          vertical
          fluid
          classes="mt--1"
        >
          <SearchInput value={searchTerm} onChange={updateSearchTerm} />
          <Box
            vertical
            fluid
          >
              <Results
                results={doctorData}
                onConnect={submitDoctorData}
              />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchDoctor;