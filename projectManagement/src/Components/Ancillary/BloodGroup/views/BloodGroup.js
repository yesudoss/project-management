import MaterialTable from "@material-table/core";
import React, { useEffect, useState } from 'react'
import { Add, MoreVert } from '@mui/icons-material';
import Popup from '../../../Base/views/Popup';
import BloodGroupForm from './BloodGroupForm';
import Base from '../../../Base/views/Base';
import { useDispatch, useSelector } from 'react-redux';
import { createBloodGroup, deleteBloodGroup, retrieveBloodGroups, updateBloodGroup } from '../../../../Store/Ancillary/BloodGroup/Action/Action';


const BloodGroup = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.bloodgroupReducer)
    const [bloodgroupData, setBloodGroupData] = useState([])
    const [openPopup, setOpenPopup] = useState(false);
    useEffect(() => {
        dispatch(retrieveBloodGroups());
        // eslint-disable-next-line
    }, [])

    const handleOnClickAdd = () => {
        // setOpenPopup(true);
    }

    return (
        <Base>
            <MaterialTable
                columns={[
                    {
                        title: "Name", field: "name", validate: (row) =>
                            (row.name || "").length === 0
                                ? "Name must not be empty"
                                : true,
                    },
                ]}
                data={data || []}
                // icons={{
                //     Add: () => <Add />,
                // }}
                options={{
                    maxBodyHeight: 368,
                    rowStyle: { fontSize: "13px" },
                    headerStyle: { fontWeight: "bold" },
                    sorting: true,
                    search: true,
                    searchText: "",
                    searchFieldAlignment: "right",
                    searchAutoFocus: true,
                    searchFieldVariant: "standard",
                    filtering: false,
                    paging: true,
                    pageSizeOptions: [10, 25],
                    pageSize: 10,
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    paginationPosition: "bottom",
                    exportButton: true,
                    exportAllData: true,
                    exportFileName: "Blood Group",
                    addRowPosition: "first",
                    selection: true,
                    actionsColumnIndex: -1,
                    showSelectAllCheckbox: true,
                    showTextRowsSelected: true,
                    grouping: true,
                    columnsButton: true,
                }}

                editable={{
                    onRowAddCancelled: (rowData) => console.log("Row adding cancelled"),
                    onRowUpdateCancelled: (rowData) => console.log("Row editing cancelled"),
                    onRowAdd: (newData) => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                dispatch(createBloodGroup(newData))
                                resolve();
                            }, 1000);
                        });
                    },
                    onRowUpdate: (newData, oldData) => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                dispatch(updateBloodGroup(newData));
                                resolve();
                            }, 1000);
                        });
                    },
                    onRowDelete: (oldData) => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                dispatch(deleteBloodGroup(oldData));
                                resolve();
                            }, 1000);
                        });
                    },
                }}
                title="Blood Group"
            />

            <Popup
                isMasterProduct="lg"
                // fullWidth
                title={"Add Blood Group"}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <BloodGroupForm setOpenPopup={setOpenPopup} setBloodGroupData={setBloodGroupData} />
            </Popup>
        </Base>
    )
}

export default BloodGroup