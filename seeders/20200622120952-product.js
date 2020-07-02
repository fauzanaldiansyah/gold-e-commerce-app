'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fields = [
      {
        "name" : "Emas 1gr",
        "descriptions" : "Pure Gold, ANTAM, New, 1gr",
        "imageurl" : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-0754721/antam_antam-logam-mulia-keping-emas--1-g--999-9--fine-gold-certificate-_full07.jpg?output-format=webp",
        "price" : "958000",
        "stock" : "100",
        createdAt : new Date(),
        updatedAt : new Date()
    },{
      "name" : "Emas 2gr",
      "descriptions" : "Pure Gold, ANTAM, New, 2gr",
      "imageurl" : "https://s1.inkuiri.net/i/large/https%2Fs1.bukalapak.com%2Fimg%2F6518224193%2Flarge%2FReady_Antam_2Gr_Emas_Batangan_Logam_Mulia_Gold_Bar_Murni_New.jpg",
      "price" : "1990000",
      "stock" : "75",
      createdAt : new Date(),
      updatedAt : new Date()
  },{
    "name" : "Emas 3gr",
    "descriptions" : "Pure Gold, ANTAM, New, 3gr",
    "imageurl" : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-0754719/antam_antam-logam-mulia-keping-emas--3-g--999-9--fine-gold-certificate-_full07.jpg?output-format=webp",
    "price" : "2800000",
    "stock" : "50",
    createdAt : new Date(),
    updatedAt : new Date()
},
];
return queryInterface.bulkInsert('Products', fields, {})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Products', null, {})
  }
};
