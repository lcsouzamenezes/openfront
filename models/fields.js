import { checkbox } from "@keystone-6/core/fields"

export const permissionFields = {
  canManageProducts: checkbox({
    defaultValue: false,
    label: "User can Update and delete any product"
  }),
  canSeeOtherUsers: checkbox({
    defaultValue: false,
    label: "User can query other users"
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: "User can Edit other users"
  }),
  canManageRoles: checkbox({
    defaultValue: false,
    label: "User can CRUD roles"
  }),
  canManageCart: checkbox({
    defaultValue: false,
    label: "User can see and manage cart and cart items"
  }),
  canManageOrders: checkbox({
    defaultValue: false,
    label: "User can see and manage orders"
  })
}

export const permissionsList = Object.keys(permissionFields)
