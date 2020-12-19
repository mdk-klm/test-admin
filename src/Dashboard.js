import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import logo from "./unnamed.png";

export default () => (
  <Card>
    <img src={logo} alt="logo" />
    <CardHeader title="Welcome to the party" />
    <CardContent>Ceci est un test de react admin.</CardContent>
  </Card>
);
