"use strict";

const { buildQuery } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve first organization.
   *
   * @return {Object}
   */

  async findFirst({ ctx }) {
    const { organization } = strapi.models;
    const organizations = await buildQuery({
      model: organization,
      filters: { limit: 1 },
      sort: [{ field: "createdAt", order: "asc" }],
    });
    if (organizations.length) {
      return organizations[0];
    }
    return ctx.throw(404, "Could not find an organization in Organization.");
  },
};
