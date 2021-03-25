'use strict';

module.exports = {
  handleBanana: (request, response) => {
    response.status(200).send('bananas are great!');
  },

  makeBananaSplit: () => console.log('yum')
}