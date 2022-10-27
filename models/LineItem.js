import { list } from "@keystone-6/core";
import {
  checkbox,
  integer,
  json,
  text,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const LineItem = list({
  fields: {
    title: text({
      validation: {
        isRequired: true,
      },
    }),
    description: text(),
    thumbnail: text(),
    isGiftcard: checkbox(),
    shouldMerge: checkbox({
      defaultValue: true,
    }),
    allowDiscounts: checkbox({
      defaultValue: true,
    }),
    hasShipping: checkbox(),
    unitPrice: integer({
      validation: {
        isRequired: true,
      },
    }),
    quantity: integer({
      validation: {
        isRequired: true,
      },
    }),
    fulfilledQuantity: integer(),
    returnedQuantity: integer(),
    shippedQuantity: integer(),
    metadata: json(),
    isReturn: checkbox(),
    claimOrder: relationship({
      ref: "ClaimOrder.lineItems",
    }),
    cart: relationship({
      ref: "Cart.lineItems",
    }),
    swap: relationship({
      ref: "Swap.lineItems",
    }),
    order: relationship({
      ref: "Order.lineItems",
    }),
    productVariant: relationship({
      ref: "ProductVariant.lineItems",
    }),
    claimItems: relationship({
      ref: "ClaimItem.lineItem",
      many: true,
    }),
    fulfillmentItems: relationship({
      ref: "FulfillmentItem.lineItem",
      many: true,
    }),
    lineItemAdjustments: relationship({
      ref: "LineItemAdjustment.lineItem",
      many: true,
    }),
    lineItemTaxLines: relationship({
      ref: "LineItemTaxLine.lineItem",
      many: true,
    }),
    returnItems: relationship({
      ref: "ReturnItem.lineItem",
      many: true,
    }),
    ...trackingFields,
  },
});
