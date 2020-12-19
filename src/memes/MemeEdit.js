import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { REDIRECT_AFTER_CREATE } from "../settings";
import { memesValidators } from "./validators";

const MemeEdit = (props) => (
  <Edit {...props} redirect={REDIRECT_AFTER_CREATE}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" validate={memesValidators.name} />
      <ReferenceArrayInput
        label="Tags"
        source="tagsId"
        reference="tags"
        allowEmpty
      >
        <SelectArrayInput />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export default MemeEdit;
