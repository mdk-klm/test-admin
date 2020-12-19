import * as React from "react";
import {
  BooleanField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";

export const MemeShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Who is it ?">
        <TextField source="id" />
        <TextField source="name" />
      </Tab>
      <Tab label="status">
        <BooleanField source="isDead" />
      </Tab>
      <Tab label="Description">
        <TextField source="description" />
      </Tab>
    </TabbedShowLayout>
  </Show>
);
