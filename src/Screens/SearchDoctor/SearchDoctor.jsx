import React from 'react';
import BackButton from 'Components/BackButton';
import Text from 'Components/Text';

function SearchDoctor() {

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
        <section className="block--centered mt--1">
          Lets see if this works
        </section>

      </section>
    </main>
  );
}

export default SearchDoctor;