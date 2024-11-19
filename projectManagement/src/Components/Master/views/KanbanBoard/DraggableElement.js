import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from '@emotion/styled';
import { IconButton, InputBase } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from "@mui/styles";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
  alignItems: center
`;

const DroppableStyles = styled.div`
min-width:300px;
margin-right:10px;
margin-left:10px;
  padding: 10px;
  border-radius: 6px;
  background: #f3f3f3;
  border:1px dashed rgba(145, 158, 171, 0.24)
`;

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

const DraggableElement = ({ prefix, elements }) => {
    return (
        <DroppableStyles>
            <ColumnHeader>
                <StyledInputBase value={prefix} />
                <IconButton><MoreVertIcon /></IconButton>
            </ColumnHeader>
            <Droppable droppableId={`${prefix}`}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {elements.map((item, index) => (
                            <ListItem key={item.id} item={item} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DroppableStyles>
    )
};

export default DraggableElement;
