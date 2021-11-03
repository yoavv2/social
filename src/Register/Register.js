import React, { useState } from "react";

import { Button, Form } from "semantic-ui-react";
import { createUser } from "../Services/user.service";
function Register() {
  async function submit(values) {
    try {
      await createUser(values);
      // history.push("/login");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Form onSubmit={submit}>
      <Form.Field>
        <Form.Input
          label="name"
          placeholder="what is your name?"
          name="name"
          type="text"
          // value={values.username}
        />
      </Form.Field>
    </Form>
  );
}

export default Register;
