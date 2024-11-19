import { CREATE_BLOOD_GROUP, RETRIEVE_BLOOD_GROUPS, UPDATE_BLOOD_GROUP } from "../Action/ActionTypes"

const initialState = {};

function bloodgroupReducer(bloodgroups = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_BLOOD_GROUP:
            return [...bloodgroups, payload];
        case RETRIEVE_BLOOD_GROUPS:
            return { ...bloodgroups, data: payload };
        case UPDATE_BLOOD_GROUP:
            return bloodgroups.map((tutorial) => {
                if (tutorial.id === payload.id) {
                    return {
                        ...tutorial,
                        ...payload,
                    };
                } else {
                    return tutorial;
                }
            });

        default:
            return bloodgroups;
    }
};

export default bloodgroupReducer;