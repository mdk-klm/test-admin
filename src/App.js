import UserIcon from "@material-ui/icons/Group";
import jsonRestProvider from "ra-data-fakerest";
import * as React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./auth/authProvider";
import Dashboard from "./Dashboard";
import TagList from "./tag/TagList";
import data from "./data";
import { MemeCreate } from "./memes/MemeCreate";
import MemeList from "./memes/MemeList";
import MemeEdit from "./memes/MemeEdit";
import { MemeShow } from "./memes/MemeShow";
import { PostCreate, PostEdit, PostList } from "./posts/posts";
import { PostShow } from "./posts/PostShow";
import { theme } from "./theme";

const disableFakeFetchRequestsLogs = true;
const App = () => (
  <Admin
    dataProvider={jsonRestProvider(data, disableFakeFetchRequestsLogs)}
    dashboard={Dashboard}
    theme={theme}
    authProvider={authProvider}
  >
    <Resource
      name="posts"
      show={PostShow}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={UserIcon}
    />
    <Resource
      name="memes"
      list={MemeList}
      create={MemeCreate}
      show={MemeShow}
      edit={MemeEdit}
    />
    <Resource name="tags" list={TagList} />
  </Admin>
);

export default App;
