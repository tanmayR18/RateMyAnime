/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
      ],
  theme: {
    fontFamily:{
        poppins: ["Poppins","Arial"]
    },
    colors: {
        richblack:{
            5: "#3A3A3E",
            10: "rgba(0, 0, 0, 0.15)",
            20: "rgba(36,36,41,0.8)",
            30: "#757575",
            40: "#2F2F33", 
            50: "#242428",
            80: "#121315",
            90: "#121315",
            100: "#000"
        },
        richwhite:{
            100: "#FFFFFF",
            50: "#ccc",
            20: "rgba(255,255,255,0.175)",
            10: "rgba(255,255,255,0.101)",
            5: "#91AAA0"
        },
        richyellow:{
            50: "#FFDD78",
            40: "#FFDD95",
            10: "rgba(249,218,153,0.08)"
        },
        socialMedia:{
            discord: "#6F85D5",
            telegram: "#0088CC",
            reddit: "#FF3C1F",
            twitter: "#1D9BF0"
        },
        richpink:{
            10: "rgba(246,152,171,0.65)"
        }
    },
    extend: {
        aspectRatio: {
          '3/5': '3 / 5',
        },
        keyframes: {
          "fadeDown":{
            "0%": {
                transform: "translateY(-20%)",
                opacity: 0
              },
              "100%": {
                transform: "translateY(0)",
                opacity: 100
              }
          },
          "fadeRight":{
            "0%": {
                transform: "translateX(-50%)",
                opacity: 0
              },
              "100%": {
                transform: "translateX(0)",
                opacity: 100
              }
          },
        },
          animation: {
            "fadeDown": 'fadeDown 1s ease-in-out normal',
            "fadeRight": 'fadeRight 0.5s linear normal',
          }
      }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

