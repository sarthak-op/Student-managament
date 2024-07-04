import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="marks" source="marks" />
        <TextInput label="name" source="name" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};
