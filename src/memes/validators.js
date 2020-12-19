import { maxLength, required } from "react-admin";

export const memesValidators = {
  name: [required(), maxLength(64)],
};
