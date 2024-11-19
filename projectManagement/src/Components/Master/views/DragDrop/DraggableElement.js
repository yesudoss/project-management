import React from 'react'
import styled from '@emotion/styled';
import { IconButton, InputBase, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createStyles, makeStyles } from "@mui/styles";
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Download } from "@mui/icons-material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    borderRadius: "8px",
    fontWeight: 700,
    "& input:hover": {
        borderRadius: "6px",
        paddingLeft: "8px",
        border: "1px solid black",
        borderColor: theme?.palette?.primary?.main,
        borderWidth: "2px",
        transition: "padding-left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
    },
    "& input:focus": {
        borderRadius: "6px",
        paddingLeft: "8px",
        border: "1px solid black",
        borderColor: theme?.palette?.primary?.main,
        borderWidth: "2px",
        transition: "padding-left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
    }
}));


const useStyles = makeStyles((theme) =>
    createStyles({
        ColumnHeader: {
            textTransform: "uppercase",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        DroppableStyles: {
            marginRight: "10px",
            marginLeft: "10px",
            padding: "10px",
            borderRadius: "6px",
            background: "#f3f3f3",
            border: "1px dashed rgba(145, 158, 171, 0.24)",
            minHeight: "80vh",
        },
        DragItem: {
            padding: "10px",
            borderRadius: "6px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
            background: "white",
            margin: "0 0 8px 0",
            gridGap: "20px",
        },
    }),
);
const DraggableElement = ({ columnId, column }) => {
    const classes = useStyles();
    const handleDownload = () => {
        alert("Downloading the pdf")
    }
    return (
        <div className={classes?.DroppableStyles}>
            <div className={classes.ColumnHeader}>
                <StyledInputBase value={column.name} />
                <IconButton><MoreVertIcon /></IconButton>
            </div>
            <Droppable droppableId={columnId} key={columnId}>

                {(provided, snapshot) => {
                    return (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                // background: snapshot.isDraggingOver
                                //     ? "lightblue"
                                //     : "lightgrey",
                                width: 250,
                                minHeight: 500
                            }}
                        >

                            {column.items.map((item, index) => {
                                return (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}
                                    >
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    className={classes?.DragItem}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}

                                                >
                                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Typography variant="subtitle2">{`${item?.first_name} ${item?.last_name}`}</Typography>
                                                        <IconButton onClick={handleDownload}><Download fontSize="small" /></IconButton>
                                                    </div>
                                                    <span>{item?.email}</span>
                                                    <div className={classes.CardFooter}>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            {item.id}
                                                        </div >
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    </Draggable>
                                );
                            })}
                        </div>
                    )
                }}

            </Droppable>

        </div>
    )
}

export default DraggableElement