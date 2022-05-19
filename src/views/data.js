// const axios = require("axios");

exports.getData = () => {
  return {
    title: "My BD Link",
    subTitle: "Connecting you to the world",
    about: "",
    contact: {
      details:
        "Wherever & whenever you need us. We are here for you - contact us for all your support needs, be it technical, general queries or information support. Our hotline numbers and e-mail are open 24x7 for your needs.",
      house: "03",
      road: "05",
      bloack: "B",
      area: "Rampura, Banasree",
      country: "Dhaka, Bangladesh",
      phone: "01675 366 466, 01975 366 466",
      email: "bdlinknetwork@gmail.com"
    },
    coverage: "",
    packages: [
      {
        title: "Bronze",
        color: "#cd7f32",
        details: "6 Mbps",
        price: "600 Taka"
      },
      {
        title: "Silver",
        color: "#aaa9ad",
        details: "8 Mbps",
        price: "800 Taka"
      },
      {
        title: "Gold",
        color: "#d4af37",
        details: "15 Mbps",
        price: "1,000 Taka"
      },
      {
        title: "Platinum",
        color: "#e5e4e2",
        details: "20 Mbps",
        price: "1,500 Taka"
      }
    ]
  };
};
