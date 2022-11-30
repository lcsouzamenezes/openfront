import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import {
  json,
  text,
  relationship,
  image,
  checkbox,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const SalesChannel = list({
  access: {
    operation: denyAll,
  },
  fields: {
    name: text(),
    description: text(),
    isDisabled: checkbox(),
    ...trackingFields
  },
});
