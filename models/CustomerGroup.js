import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const CustomerGroup = list({
  access: {
    operation: denyAll,
  },
  fields: {
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    customers: relationship({
      ref: "Customer.customerGroups",
      many: true,
    }),
    discountConditions: relationship({
      ref: "DiscountCondition.customerGroups",
      many: true,
    }),
    priceLists: relationship({
      ref: "PriceList.customerGroups",
      many: true,
    }),
    ...trackingFields,
  },
});
