import axios from "axios";
import toast from "react-hot-toast";
import { RETRIEVE_BLOOD_GROUPS } from "./ActionTypes"

export const retrieveBloodGroups = () => async (dispatch) => {
  await axios.get('http://localhost:6969/api/bloodGroups')
    .then(function (response) {
      dispatch({
        type: RETRIEVE_BLOOD_GROUPS,
        payload: response?.data?.data,
      });
      return Promise.resolve(response?.data?.data);
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
};

export const createBloodGroup = (params) => async (dispatch) => {
  axios.post('http://localhost:6969/api/bloodGroup',
    {
      name: params?.name
    }
  )
    .then(function (response) {
      dispatch(retrieveBloodGroups());
      toast.success("Added Successfully")
      return Promise.resolve(response?.data?.data);
    })
    .catch(function (error) {
      toast.error("Unable to Create")
      return Promise.reject(error);
    })
};

export const updateBloodGroup = (params) => async (dispatch) => {
  axios.put(`http://localhost:6969/api/bloodGroup/${params?.id}`,
    {
      name: params?.name
    }
  )
    .then(function (response) {
      dispatch(retrieveBloodGroups());
      toast.success("Updated Successfully")
      return Promise.resolve(response?.data?.data);
    })
    .catch(function (error) {
      toast.error("Unable to Update")
      return Promise.reject(error);
    })
};

export const deleteBloodGroup = (params) => async (dispatch) => {
  axios.delete(`http://localhost:6969/api/bloodGroup/${params?.id}`)
    .then(function (response) {
      dispatch(retrieveBloodGroups());
      toast.success("Deleted Successfully")
      return Promise.resolve(response?.data?.data);
    })
    .catch(function (error) {
      toast.error("Unable to Delete")
      return Promise.reject(error);
    })
};