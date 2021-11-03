import React, { useState } from "react";

import { Button, Form, Input } from "semantic-ui-react";
import { createUser } from "../Services/user.service";
function Register() {
  const [value, setValue] = useState("");

  async function submit() {
    try {
      console.log(`value`, value);
      await createUser(value);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Form className="form-container" onSubmit={submit}>
      <Form.Field>
        <Form.Input
          lable="name"
          placeholder="what is your name?"
          name="name"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Field>
    </Form>
  );
}

export default Register;
