import { useMediaQuery } from "@material-ui/core";
import * as React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  Filter,
  List,
  ReferenceInput,
  SelectInput,
  ShowButton,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput
} from "react-admin";
import { REDIRECT_AFTER_CREATE, REDIRECT_AFTER_EDIT } from "../settings";

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List {...props} filters={<PostFilter />}>
      {isSmall ? (
        <SimpleList linkType="show" primaryText={(record) => record.title} />
      ) : (
        <Datagrid  rowClick={'show'}>
          <TextField source="id" />
          <TextField source="title" />
          <ShowButton />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const PostEdit = (props) => (
  <Edit {...props} title={<PostTitle />} redirect={REDIRECT_AFTER_EDIT}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props} redirect={REDIRECT_AFTER_CREATE}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
