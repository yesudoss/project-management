import { IconButton, InputBase, Typography } from "@mui/material";
import { createStyles, makeStyles, styled } from "@mui/styles";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import uuid from "uuid/v4";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Download } from "@mui/icons-material";
import DraggableElement from "./DraggableElement";

const useStyles = makeStyles((theme) =>
    createStyles({
        ListGrid: {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            height: "100%",
            overflow: "scroll hidden",
            marginBottom: "40px",
            webkitScrollbar: "none",
        },
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



const columnsFromBackend = {
    "ids1": {
        name: "Requested",
        items: [
            { id: "id1", content: "First task", first_name: "FName", last_name: "LName" },
            { id: "id2", content: "Second task", first_name: "FName", last_name: "LName" },
            { id: "id3", content: "Third task", first_name: "FName", last_name: "LName" },
            { id: "id4", content: "Fourth task", first_name: "FName", last_name: "LName" },
            { id: "id5", content: "Fifth task", first_name: "FName", last_name: "LName" }
        ]
    },
    "ids2": {
        name: "To do",
        items: [
            { id: "id6", content: "Six task", first_name: "FName", last_name: "LName" },
        ]
    },
    "ids3": {
        name: "In Progress",
        items: [

            { id: "id7", content: "Seven task", first_name: "FName", last_name: "LName" },
            { id: "id8", content: "Eight task", first_name: "FName", last_name: "LName" }
        ]
    },
    "ids4": {
        name: "Done",
        items: [
            { id: "id9", content: "Nine task", first_name: "FName", last_name: "LName" },
            { id: "id10", content: "Ten task", first_name: "FName", last_name: "LName" },
            { id: "id11", content: "Eleven task", first_name: "FName", last_name: "LName" },
            { id: "id12", content: "Twelve task", first_name: "FName", last_name: "LName" },
            { id: "id13", content: "Thirteen task", first_name: "FName", last_name: "LName" }
        ]
    }
};

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

function DragDrop() {
    const classes = useStyles();
    const [columns, setColumns] = useState(columnsFromBackend);

    const handleDownload = () => {
        alert("Downloading the pdf")
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                <div className={classes.ListGrid}>
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <DraggableElement key={columnId} column={column} columnId={columnId} />
                        );
                    })}
                </div>
            </DragDropContext>
        </div>
    );
}

export default DragDrop;
