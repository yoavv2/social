import React, {useEffect, useState} from "react";
import Post from '../Post/Post'
import {getFeed} from "../Services/Post.service";
import { Grid } from "semantic-ui-react";


function Feed() {
    const [posts, setPosts] = useState([])

    useEffect( ()=>{
        const getPost = async () => {
            try{
                const feed =  await getFeed();
                setPosts(feed);
            }catch (e) {
                console.log(e)
            }
        }
        getPost();

    },[]);
    console.log(posts);
  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <h1>Recent Posts</h1>
        </Grid.Column>

      </Grid.Row>

      <Grid.Row floated>

            {posts.map((post)=>{
                return  <Grid.Column key={post.id}><Post data={post}  /></Grid.Column>;
            })}

      </Grid.Row>
    </Grid>
  );
}

export default Feed;
