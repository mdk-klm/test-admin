import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  ShowButton,
  TextField,
} from "react-admin";

const CommentList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_at" />
      <TextField source="body" />
      <ReferenceField resource="comments" source="post_id" reference="posts">
        <TextField source="title" />
      </ReferenceField>
      <ShowButton />
    </Datagrid>
  </List>
);

export default CommentList;
