const { initializeAnalytics } = require("../dist/analytics.cjs");

initializeAnalytics()
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });
