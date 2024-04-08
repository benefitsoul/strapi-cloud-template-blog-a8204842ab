'use strict';

/**
 * article service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article.article');

await strapi.plugins['email'].services.email.send({
    to: 'benefitsoul@gmail.com',
    from: 'no-reply@strapiapp.com', //e.g. single sender verification in SendGrid
    subject: 'The Strapi Email plugin worked successfully',
    text: 'Hello world!',
    html: 'Hello world!',
  }),
