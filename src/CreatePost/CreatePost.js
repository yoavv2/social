import React, {useState} from "react";
import { Form } from 'semantic-ui-react'
import {create} from "../Services/Post.service";

function CreatePost() {
  const [content, setContent] = useState('')
  const [name, setName] = useState('')

  function submit() {
    create({name,message:content})
        .then((res) => res.json())

        .catch((e) => console.log(e))
  }

  return <div>

    <Form onSubmit={submit} >
      <h1>Create Post:</h1>
      <Form.Group widths='equal'>
        <Form.Input onChange={e=> setName(e.target.value)} value={name} fluid label='name' placeholder='Full name' />
      </Form.Group>
      <Form.TextArea onChange={e=> setContent(e.target.value)} value={content} label='About' placeholder='Tell us more about you...' />
      <Form.Button >Submit</Form.Button>
    </Form  >
  </div>;
}

export default CreatePost;
