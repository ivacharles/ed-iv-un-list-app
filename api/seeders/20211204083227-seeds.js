'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('categories',
     [{category: 'antiques'},
     {category: 'appliances '},
     {category: 'arts & crafts'},
     {category: 'atvs, utvs, snowmobiles'},
     {category: 'auto parts'},
     {category: 'auto wheels & tires'},
     {category: 'aviation'},
     {category: 'barter '},
     {category: 'bicycle parts'},
     {category: 'boat parts'},
     {category: 'boats'},
     {category: 'books & magazines'},
     {category: 'business/commercial'},
     {category: 'cars & trucks'},
     {category: 'cds/dvds/vhs'},
     {category: 'cell phones'},
     {category: 'clothing & accessories'},
     {category: 'collectibles'},
     {category: 'computer parts'},
     {category: 'computers'},
     {category: 'electronics'},
     {category: 'free stuff'},
     {category: 'garage & moving sales'},
     {category: 'general for sale '},
     {category: 'health and beauty'},
     {category: 'heavy equipment'},
     {category: 'household items'},
     {category: 'jewelry'},
     {category: 'materials'},
     {category: 'motorcycle parts'},
     {category: 'motorcycles/scooters '}
  ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
