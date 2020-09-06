import React from 'react';
import BackButton from 'Components/BackButton';
import Text from 'Components/Text';
import SearchInput from 'Components/SearchInput/SearchInput';
import useDebouncedValue from 'Hooks/useDebouncedValue';
import InitialScreen from './components/Initial';

function SearchDoctor() {
  const [searchValue, handleInputChange] = useDebouncedValue(
    "",
    200,
    (text) => {
      console.log('hello ', text);
    }
  );

  return (
    <main className="block--vertical--fluid">
      <BackButton />
      <section className="block--vertical--fluid mt--1">
        <header>
          <Text
            component="h1"
            text="Search orange ID or name"
            size="big"
          />
        </header>
        <section className="block--vertical--centered--fluid mt--1">
          <SearchInput value={searchValue} onChange={handleInputChange} />
          <div className="block--vertical--fluid mt--1">
            {!searchValue
              ? (
                <div className="block--vertical--centered--fluid mt--1">
                  <InitialScreen />
                </div>
              )
              : (
                <div>{searchValue}</div>
              )}
          </div>
        </section>
      </section>
    </main>
  );
}

export default SearchDoctor;