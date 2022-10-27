import { list } from "@keystone-6/core";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const CustomerGroup = list({
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
