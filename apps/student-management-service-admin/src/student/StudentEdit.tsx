import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="marks" source="marks" />
        <TextInput label="name" source="name" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Edit>
  );
};
