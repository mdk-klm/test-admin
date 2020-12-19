import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { REDIRECT_AFTER_CREATE } from "../settings";
import { memesValidators } from "./validators";

export const MemeCreate = (props) => (
  <Create {...props} redirect={REDIRECT_AFTER_CREATE}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" validate={memesValidators.name} />
      <ReferenceArrayInput label="Tags" source="tagsId" reference="tags" allowEmpty>
        <SelectArrayInput />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
