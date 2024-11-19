import React, { useEffect } from "react";
import styled from '@emotion/styled';
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { Button } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';


const ListGrid = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
height: 100%;
overflow: scroll hidden;
`;

const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
};

const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
};

const lists = ["todo", "inProgress", "dropped", "done"];

const dat = [
    {
        "id": "1",
        "prefix": "todo",
        "name": "Yesu Doss X",
        "email": "yes@gmail.com",
        "status": "todo",
        "status_id": 1
    },
    {
        "id": "2",
        "prefix": "todo",
        "name": "Gowtham",
        "email": "gowtham@gmail.com",
        "status": "done",
        "status_id": 3
    },
    {
        "id": "3",
        "prefix": "todo",
        "name": "Vasanth",
        "email": "vasanth@gmail.com",
        "status": "inProgress",
        "status_id": 2
    }
]

const data = {
    "todo": [
        {
            "id": "item-216",
            "prefix": "todoa",
            "name": "Yesu Doss X",
            "email": "yes@gmail.com"
        },
        {
            "id": "item-841",
            "prefix": "todo",
            "name": "Gowtham",
            "email": "gowtham@gmail.com"
        },
        {
            "id": "item-146",
            "prefix": "todo",
            "name": "Vasanth",
            "email": "vasanth@gmail.com"
        }
    ],
    "inProgress": [

        {
            "id": "item-248",
            "prefix": "inProgress",
            "name": "Rex Manickam",
            "email": "rex@gmail.com"
        }
    ],
    "dropped": [
        {
            "id": "item-533",
            "prefix": "done",
            "name": "Test",
            "email": "test@gmail.com"
        }

    ],
    "done": [
        {
            "id": "item-534",
            "prefix": "done",
            "name": "Pradison",
            "email": "prad@gmail.com"
        },
        {
            "id": "item-962",
            "prefix": "done",
            "name": "Augustin",
            "email": "augustin@gmail.com"
        },
    ],
}

function KanbanBoard() {

    const useStyles = makeStyles((theme) =>
        createStyles({
            dropableContext: {
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                height: "100%",
                overflow: "scroll hidden"
            }
        }),
    );
    const classes = useStyles();


    const [elements, setElements] = React.useState(data);

    useEffect(() => {
        setElements(data);
    }, []);

    const onDragEnd = (result) => {

        var res = window.confirm(
            "Do you wish to change this? "
        );
        if (res) {
            if (!result.destination) {
                return;
            }
            const listCopy = { ...elements };

            const sourceList = listCopy[result.source.droppableId];
            const [removedElement, newSourceList] = removeFromList(
                sourceList,
                result.source.index
            );
            listCopy[result.source.droppableId] = newSourceList;
            const destinationList = listCopy[result.destination.droppableId];
            listCopy[result.destination.droppableId] = addToList(
                destinationList,
                result.destination.index,
                removedElement
            );

            setElements(listCopy);
        }
    };
    const onDragEndConfirm = (result) => {
        if (result?.source?.droppableId) {
            if (result?.source?.droppableId !== result?.destination?.droppableId) {
                onDragEnd(result)
            }
        }
    }

    return (
        <>
            <DragDropContext onDragEnd={onDragEndConfirm}>
                <ListGrid>
                    {lists.map((listKey) => (
                        <DraggableElement
                            elements={elements[listKey]}
                            key={listKey}
                            prefix={listKey}
                        />
                    ))}
                    <Button startIcon={<AddIcon />} sx={{ color: "black", minWidth: "250px", minHeight: "20px" }} size="large" variant="outlined">Add Section</Button>
                </ListGrid>
            </DragDropContext>
        </>
    );
}

export default KanbanBoard;
