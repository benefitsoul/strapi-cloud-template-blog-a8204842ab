module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
    to: 'benefitsoul@gmail.com',
    from: 'no-reply@strapiapp.com', //e.g. single sender verification in SendGrid
    subject: 'The Strapi Email plugin worked successfully',
    text: 'Hello world!',
    html: 'Hello world!',
            })
        } catch(err) {
            console.log(err);
        }
    }
}
