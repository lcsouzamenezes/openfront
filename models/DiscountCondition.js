import { list } from "@keystone-6/core";
import { json, select, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const DiscountCondition = list({
  fields: {
    type: select({
      type: "enum",
      options: [
        {
          label: "Products",
          value: "products",
        },
        {
          label: "Product Types",
          value: "product_types",
        },
        {
          label: "Product Collections",
          value: "product_collections",
        },
        {
          label: "Product Tags",
          value: "product_tags",
        },
        {
          label: "Customer Groups",
          value: "customer_groups",
        },
      ],
      validation: {
        isRequired: true,
      },
    }),
    operator: select({
      type: "enum",
      options: [
        {
          label: "In",
          value: "in",
        },
        {
          label: "Not In",
          value: "not_in",
        },
      ],
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    discountRule: relationship({
      ref: "DiscountRule.discountConditions",
    }),
    customerGroups: relationship({
      ref: "CustomerGroup.discountConditions",
      many: true,
    }),
    products: relationship({
      ref: "Product.discountConditions",
      many: true,
    }),
    productCollections: relationship({
      ref: "ProductCollection.discountConditions",
      many: true,
    }),
    productTags: relationship({
      ref: "ProductTag.discountConditions",
      many: true,
    }),
    productTypes: relationship({
      ref: "ProductType.discountConditions",
      many: true,
    }),
    ...trackingFields,
  },
});
