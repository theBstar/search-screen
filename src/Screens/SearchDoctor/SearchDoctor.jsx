import React from 'react';
import BackButton from 'Components/BackButton';
import Text from 'Components/Text';
import SearchInput from 'Components/SearchInput/SearchInput';
import useDebouncedValue from 'Hooks/useDebouncedValue';

function SearchDoctor() {
  const [searchValue, handleInputChange] = useDebouncedValue(
    "",
    200,
    (text) => {
      console.log('hello ', text);
    }
  );
  return (
    <main>
      <BackButton />
      <section className="mt--1">
        <header>
          <Text
            component="h1"
            text="Search orange ID or name"
            size="big"
          />
        </header>
        <section className="block--vertical--centered mt--1">
          <SearchInput value={searchValue} onChange={handleInputChange} />
          <div className="block--vertical-centered mt--1">
            {searchValue}
          </div>
        </section>

      </section>
    </main>
  );
}

export default SearchDoctor;