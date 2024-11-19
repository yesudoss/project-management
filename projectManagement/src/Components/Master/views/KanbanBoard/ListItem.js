import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";
import styled from '@emotion/styled';
import { IconButton, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border: 3px solid white;
  border-radius: 50%;
`;

const CardHeader = styled.div`
  font-weight: 500;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  
  grid-gap: 20px;
  
`;

const handleDownload = () => {
  alert("Downloading the pdf")
}
const ListItem = ({ item, index }) => {

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <DragItem
            onClick={() => alert(JSON.stringify(item))}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <Typography variant="subtitle2">{item?.name}</Typography>
              <IconButton onClick={handleDownload}><Download fontSize="small" /></IconButton>
            </div>
            <span>{item?.email}</span>
            <CardFooter>
              <Author>
                {item.id}
                <Avatar
                  src=""
                />
              </Author>
            </CardFooter>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
