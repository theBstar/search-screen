import { useState, useCallback, useMemo } from "react";
import axios from 'axios';

const { CancelToken, Cancel } = axios;

axios.defaults.baseURL = '/api/people/';

// status can be anything of error, initial, loading, submitting or loaded
const initialData = {
  status: 'initial',
  doctors: [],
};

let axiosCancelToken;

function useDoctorSearchData() {
  const [doctorData, setDoctorData] = useState({ ...initialData });

  const updateDoctorDataOnSearch = useCallback(
    async (searchTerm) => {
      if (searchTerm.length) {
        setDoctorData({
          status: 'loading',
          doctors: [],
        });

        try {
          if (axiosCancelToken) {
            axiosCancelToken();
            axiosCancelToken = null;
          }
          const data = await axios.get(`/?search=${searchTerm}`, {
            cancelToken: new CancelToken(e => {
              axiosCancelToken = e;
            }),
          });
          const doctors = data.data.results.map(({ name }, id) => ({
            id,
            username: `@dr.${name.toLowerCase()}`,
            name: `Dr.${name}`,
          }));
          setDoctorData({
            status: 'loaded',
            doctors,
          });
        } catch (e) {
          if (!(e instanceof Cancel)) {
            setDoctorData({
              status: 'error',
              doctors: [],
            });
          }
        }
      } else {
        setDoctorData({ ...initialData });
      }
    },
    [],
  );

  // There was no mention of any endpoint for post
  // However, the api can be hooked in here.
  const submitDoctorData = useCallback(
    data => {
      alert("Can send data to api here, but I don't have an endpoint yet!");
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