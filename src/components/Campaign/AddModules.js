import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// DragDropContext = all of our colomns, Droppable colomn, Draggable card
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { columnsData } from "../../data/Modules";

const onDragEnd = (result, columns, setColumns, setTotals, participants) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    // TODO - setModulesSummary function
    let cost = 0;
    const summaryItems =
      destination.droppableId === "0" ? { ...destItems } : { ...sourceItems };
    const modules =
      destination.droppableId === "0" ? destItems.length : sourceItems.length;
    for (let item in summaryItems) {
      cost += summaryItems[item].costPerRecipient * participants;
    }
    setTotals({ modules, cost });
    // TODO - end of function

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
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
        items: copiedItems,
      },
    });
  }
};

const AddModules = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [columns, setColumns] = useState(columnsData);
  const [totals, setTotals] = useState({ modules: 1, cost: 0 });
  const [participants] = useState(
    useSelector(({ campaign }) => campaign.participants)
  );

  const onClick = () => {
    dispatch({ type: "ADD_MODULES", payload: totals });
    history.push("./schedule-campaign");
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(result, columns, setColumns, setTotals, participants)
          }
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            padding: 4,
                            width: 250,
                            minHeight: 500,
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
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#a333c8"
                                          : "white",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <div
                                        className="ui fluid card"
                                        key={index}
                                        style={{ border: "1px solid #a333c8" }}
                                      >
                                        <div className="content center aligned">
                                          <div className="header">
                                            {item.title}
                                          </div>
                                          <div className="description">
                                            Playing Time{" "}
                                            <b>{item.duration} Min</b>
                                          </div>
                                          <div className="description">
                                            Cost Per Recipient{" "}
                                            <b>{item.costPerRecipient}$</b>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
      <div className="ui grid">
        <div className="four wide column">
          <Link to="/add-recipients" className="ui secondary basic button">
            Back
          </Link>
        </div>
        <div className="eight wide column">
          <div className="ui divider">
            <div style={{ textAlign: "center" }}>
              {totals.modules} modules were selected at a total cost of{" "}
              {totals.cost}$ for {participants} recipients
            </div>
          </div>
        </div>
        <div className="four wide column">
          <button
            onClick={onClick}
            className="ui right floated primary basic button"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AddModules;
