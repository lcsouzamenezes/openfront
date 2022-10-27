import { list } from "@keystone-6/core";
import {
  json,
  text,
  relationship,
  image,
  checkbox,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const SalesChannel = list({
  fields: {
    name: text(),
    description: text(),
    isDisabled: checkbox(),
    ...trackingFields
  },
});
