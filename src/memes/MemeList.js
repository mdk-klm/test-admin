import * as React from "react";
import {
  BooleanField,
  ChipField,
  Datagrid,
  EditButton,
  ImageField,
  List,
  ReferenceArrayField,
  ShowButton,
  SingleFieldList,
  TextField,
} from "react-admin";
import MemeFilter from "./MemeFilter";

const MemeList = (props) => {
  return (
    <List {...props} filters={<MemeFilter />}>
      <Datagrid rowClick={"show"}>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="bottomText" />
        <ImageField source="image" />
        <TextField source="rank" />
        <ReferenceArrayField
          label="Tags"
          source="tagsId"
          reference="tags"
          allowEmpty
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <BooleanField source="isDead" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default MemeList;
