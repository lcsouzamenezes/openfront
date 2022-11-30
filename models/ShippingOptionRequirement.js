import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { select, integer, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ShippingOptionRequirement = list({
  access: {
    operation: denyAll,
  },
  fields: {
    type: select({
      type: "enum",
      options: [
        {
          label: "Min Subtotal",
          value: "min_subtotal",
        },
        {
          label: "Max Subtotal",
          value: "max_subtotal",
        },
      ],
      validation: {
        isRequired: true,
      },
    }),
    amount: integer({
      validation: {
        isRequired: true,
      },
    }),
    shippingOption: relationship({
      ref: "ShippingOption.shippingOptionRequirements",
    }),
    ...trackingFields,
  },
});
