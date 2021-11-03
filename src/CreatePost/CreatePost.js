import React from "react";
import { Form } from 'semantic-ui-react'

function CreatePost() {
  return <div>
    <Form>
      <Form.Group widths='equal'>
        <Form.Input fluid label='name' placeholder='Full name' />
      </Form.Group>
      <Form.TextArea label='About' placeholder='Tell us more about you...' />
      <Form.Button>Submit</Form.Button>
    </Form>
  </div>;
}

export default CreatePost;
