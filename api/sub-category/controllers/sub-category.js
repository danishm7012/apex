const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;
    console.log(slug);

    const entity = await strapi.services.subCategory.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.subCategory });
  },
};
