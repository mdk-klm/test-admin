import * as React from "react";
import { Datagrid, EditButton, List, ShowButton, TextField } from "react-admin";

const TagList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick={"show"}>
        <TextField source="id" />
        <TextField source="text" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default TagList;
