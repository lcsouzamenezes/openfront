import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import {
  checkbox,
  integer,
  json,
  select,
  text,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Product = list({
  access: {
    operation: denyAll,
  },
  fields: {
    title: text({
      validation: {
        isRequired: true,
      },
    }),
    subtitle: text(),
    description: text(),
    handle: text(),
    isGiftcard: checkbox(),
    thumbnail: text(),
    weight: integer(),
    length: integer(),
    height: integer(),
    width: integer(),
    hsCode: text(),
    originCountry: text(),
    midCode: text(),
    material: text(),
    metadata: json(),
    discountable: checkbox({
      defaultValue: true,
    }),
    status: select({
      type: "enum",
      options: [
        {
          label: "Draft",
          value: "draft",
        },
        {
          label: "Proposed",
          value: "proposed",
        },
        {
          label: "Published",
          value: "published",
        },
        {
          label: "Rejected",
          value: "rejected",
        },
      ],
      defaultValue: "draft",
      validation: {
        isRequired: true,
      },
    }),
    externalId: text(),
    productCollection: relationship({
      ref: "ProductCollection.products",
    }),
    shippingProfile: relationship({
      ref: "ShippingProfile.products",
    }),
    productType: relationship({
      ref: "ProductType.products",
    }),
    discountConditions: relationship({
      ref: "DiscountCondition.products",
      many: true,
    }),
    discountRules: relationship({
      ref: "DiscountRule.products",
      many: true,
    }),
    productImages: relationship({
      ref: "ProductImage.products",
      many: true,
    }),
    productOptions: relationship({
      ref: "ProductOption.product",
      many: true,
    }),
    productTags: relationship({
      ref: "ProductTag.products",
      many: true,
    }),
    taxRates: relationship({
      ref: "TaxRate.products",
      many: true,
    }),
    productVariants: relationship({
      ref: "ProductVariant.product",
      many: true,
    }),
    ...trackingFields,
  },
});
