import CardActions from "@material-ui/core/CardActions";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { Link } from 'react-router-dom';
import * as React from "react";
import {
  Button,
  Datagrid,
  DateField,
  ListButton,
  ReferenceManyField,
  RefreshButton,
  RichTextField,
  Show,
  ShowButton,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import AddNewCommentButton from "./AddNewCommentButton";


const PostShowActions = ({ basePath, data }) => (
  <CardActions>
    <ListButton basePath={basePath} />
    <RefreshButton />
    <AddNewCommentButton record={data} />
  </CardActions>
);

export const PostShow = (props) => (
  <Show {...props} actions={<PostShowActions />}>
    <TabbedShowLayout>
      <Tab label="Summary">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="teaser" />
      </Tab>
      <Tab label="Body" path="body">
        <RichTextField
          source="body"
        />
      </Tab>
      <Tab label="Comments" path="comments">
        <ReferenceManyField
          addLabel={false}
          reference="comments"
          target="post_id"
          sort={{ field: "created_at", order: "DESC" }}
        >
          <Datagrid>
            <DateField source="created_at" />
            <TextField source="body" />
            <ShowButton />
          </Datagrid>
        </ReferenceManyField>
        <AddNewCommentButton />
      </Tab>
    </TabbedShowLayout>
  </Show>
);
