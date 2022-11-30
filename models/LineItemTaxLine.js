import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { json, float, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const LineItemTaxLine = list({
  access: {
    operation: denyAll,
  },
  fields: {
    rate: float({
      validation: {
        isRequired: true,
      },
    }),
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    code: text(),
    metadata: json(),
    lineItem: relationship({
      ref: "LineItem.lineItemTaxLines",
    }),
    ...trackingFields,
  },
});
