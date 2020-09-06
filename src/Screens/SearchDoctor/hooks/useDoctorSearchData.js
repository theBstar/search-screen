import { useState, useCallback, useMemo } from "react";
import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api/people/';

// status can be anything of error, initial, loading, submitting or loaded, submitted
const initialData = {
  status: 'initial',
  doctors: [],
};

function useDoctorSearchData() {
  const [doctorData, setDoctorData] = useState({ ...initialData });

  const updateDoctorDataOnSearch = useCallback(
    async (searchTerm) => {
      console.log('updated term ', searchTerm);
      if (searchTerm.length) {
        setDoctorData({
          status: 'loading',
          doctors: [],
        });

        try {
          const data = await axios.get(`/?search=${searchTerm}`);
          const doctors = data.data.results.map(({name}, id) => ({
            id,
            username: `@dr.${name.toLowerCase()}`,
            name: `Dr.${name}`,
          }));
          setDoctorData({
            status: 'loaded',
            doctors,
          });
        } catch {
          setDoctorData({
            status: 'error',
            doctors: [],
          });
        }
      } else {
        setDoctorData({ ...initialData });
      }
    },
    [],
  );

  const submitDoctorData = useCallback(
    (data) => {
      console.log('submitting doctor data ', data);
    },
    [],
  );

  return useMemo(() => ({
    doctorData, submitDoctorData, updateDoctorDataOnSearch
  }),
    [doctorData, submitDoctorData, updateDoctorDataOnSearch],
  );
}

export default useDoctorSearchData;