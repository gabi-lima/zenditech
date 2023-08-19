/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#031966",
        "custom-text": "#332F2F",
        "custom-red": "#f44336",
        "custom-deliveries": "#DEEBFC",
        "custom-pending": "#FDFFA1",
        "custom-complete": "#C2FFC0",
        "custom-available": "#C2FFC0",
        "custom-sent": "#C1C0FE",
        "custom-transit": "#DBC0FE",
        "custom-delivered": "#C2FFC0",
        "custom-cancelled": "#FFC8C8",
        "custom-courier": "#DEEBFC",
        "custom-notifications": "#D4F9E7",
        "custom-history": "#EFF1F8",
        "custom-customer": "#F8F9FB",
      },
      padding: {
        "72px": "72px", // Adicionando um valor de padding customizado
        96: "24rem", // Adicionando outro valor de padding customizado
      },
      fontFamily: { body: ["Lato"] },
    },
  },
  plugins: [],
};
