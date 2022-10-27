import { list } from "@keystone-6/core";
import { json, text, relationship, image } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

// export const cloudinary = {
//   cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'fake',
//   apiKey: process.env.CLOUDINARY_KEY || 'fake',
//   apiSecret: process.env.CLOUDINARY_SECRET || 'fake',
//   folder: 'sickfits',
// };

export const ProductImage = list({
  fields: {
    // image: cloudinaryImage({
    //   cloudinary,
    //   label: 'Source',
    // }),
    image: image({ storage: "my_images" }),
    altText: text(),
    products: relationship({ ref: "Product.productImages", many: true }),
    metadata: json(),
    ...trackingFields,
  },
  ui: {
    listView: {
      initialColumns: ["image", "altText", "product"],
    },
  },
});