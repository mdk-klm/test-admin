import * as React from "react";
import { BooleanInput, Filter, TextInput } from "react-admin";

const MemeFilter = (props) => (
  <Filter {...props}>
    <TextInput source="id" alwaysOn />
    <BooleanInput source="isDead"/>
  </Filter>
);

export default MemeFilter;