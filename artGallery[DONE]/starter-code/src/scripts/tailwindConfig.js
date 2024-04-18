tailwind.config = {
  content: ["./**/*.{js, html}"],
  theme: {
    extend: {
      colors: {
        gold: "#D5966C",
        "dark-900": "#151515",
        "grey-500": "#444444",
      },
      fontFamily: {
        // 'display': ['Oswald', ...],
        headings: ['"Big Shoulders Display"', "cursive"],
        teste: ["Helvetica"],
        body: ["Outfit", "cursive"],
      },
    },
  },
};

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         // 'display': ['Oswald', ...],
//         "body": ['Outfit', "cursive"],
//         "headings": ["Big Shoulders Display", "cursive"],
//       }
//     },
//   },
//   plugins: [],
// }

// module.exports = {
//   theme: {
//     fontFamily: {
//       // 'display': ['Oswald', ...],
//     },
//   },
// };

const { fontawesome } = require("@fortawesome/fontawesome-free");
const { faCheckCircle } = require("@fortawesome/fontawesome-free-solid");

fontawesome.library.add(faCheckCircle);

// Big-Shoulders-Display
// outfit
