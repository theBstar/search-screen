import React from 'react';
import BackButton from '../../components/BackButton';
import Text from '../../components/Text';
import SearchInput from '../../components/SearchInput';
import useDebouncedValue from '../../hooks/useDebouncedValue';
import Results from './components/Results';
import useDoctorSearchData from './hooks/useDoctorSearchData';

function SearchDoctor() {

  const { doctorData, submitDoctorData, updateDoctorDataOnSearch } = useDoctorSearchData();
  const [searchTerm, updateSearchTerm] = useDebouncedValue(
    "",
    300,
    updateDoctorDataOnSearch,
  );

  return (
    <main className="block--vertical--fluid">
      <BackButton />
      <section className="block--vertical--fluid mt--2">
        <header>
          <Text
            component="h1"
            text="Search orange ID or name"
            size="big"
          />
        </header>
        <section className="block--vertical--centered--fluid mt--1">
          <SearchInput value={searchTerm} onChange={updateSearchTerm} />
          <div className="block--vertical--fluid mt--1">
            <div className="block--vertical--centered--fluid">
              <Results
                results={doctorData}
                onConnect={submitDoctorData}
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default SearchDoctor;