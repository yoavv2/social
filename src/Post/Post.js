import React, {useEffect} from "react";
import {Button, Card, Image, Icon, Label, CardContent} from 'semantic-ui-react'
import "./Post.css";



function Post({data}) {
console.log(data)

  return <div className={'Post'} >
    <Card fluid>
      <Card.Content >
        <Image
            floated='right'
            size='mini'
            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-182880589-1493334765.jpg'
        />
        <Card.Header>{data.name}</Card.Header>
        <Card.Description>
          {data.message}
        </Card.Description>
      </Card.Content>
      {/*<Card.Content extra>*/}
      {/*  <div className='ui two buttons'>*/}
          {/*<Button as='div' labelPosition='right'>*/}
          {/*  <Button icon>*/}
          {/*    <Icon name='heart outline' />*/}
          {/*    Like*/}
          {/*  </Button>*/}
          {/*  <Label as='a' basic pointing='left'>*/}
          {/*    2,048*/}
          {/*  </Label>*/}
          {/*</Button>*/}
          {/*<Button as='div' labelPosition='right'>*/}
          {/*  <Button icon>*/}
          {/*    <Icon name='comment outline' />*/}
          {/*    Comments*/}
          {/*  </Button>*/}
          {/*  <Label as='a' basic pointing='left'>*/}
          {/*    2,048*/}
          {/*  </Label>*/}
          {/*</Button>*/}
      {/*  </div>*/}
      {/*</Card.Content>*/}
    </Card>
  </div>;
}

export default Post;
