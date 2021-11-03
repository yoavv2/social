import React from "react";
import { Grid } from "semantic-ui-react";
function Feed() {
  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <h1>Recent Posts</h1>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Feed;
