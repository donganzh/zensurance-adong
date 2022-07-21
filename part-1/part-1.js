/**
 * Refer to the following data when completing your answers: (The following JSON
 * file contains providers available for an industry)
 */

const PROVIDERS = require('../shared/data.json');

/**
 * Create a query that returns total premiums and fees available for retail industry
 */
function task1() {
  let totalPrem = 0;
  let totalFees = 0;
  for (var i = 0; i < PROVIDERS.length; i++) {
    if (PROVIDERS[i].industry == 'retail') {
      PROVIDERS[i].prices.forEach(e => {
        if (e.premium != null && e.premium != '') {
          totalPrem += parseInt(e.premium);
        }
        if (e.fee != null && e.fee != '') {
          totalFees += parseInt(e.fee);
        }
      });
    }
  }

  return [{ totalPremium: totalPrem, totalFees: totalFees }];
}

/**
 * Create a query that returns the minimum premium available among the providers for technology industry
 */
function task2() {
  let minPrem = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < PROVIDERS.length; i++) {
    if (PROVIDERS[i].industry == 'technology') {
      PROVIDERS[i].prices.forEach(e => {
        if (e.premium != null && e.premium != '') {
          minPrem = Math.min(parseInt(e.premium), minPrem);
        }
      });
    }
  }
  return [{ totalPremium: minPrem }];
}

/**
 * Create a query that returns all the provider names available for the technology industry
 * that has a premium amount greater than or equal to 1000
 */
function task3() {
  /**
   * TODO: Your body goes here
   */
  let results = [];
  for (var i = 0; i < PROVIDERS.length; i++) {
    if (PROVIDERS[i].industry == 'technology') {
      PROVIDERS[i].prices.forEach(e => {
        if (e.premium != null && e.premium != '') {
          if (parseInt(element.premium) >= 1000) {
            results.push(PROVIDERS[i].name);
          }
        }
      });
    }
  }
  return results;
}

/**
 * To see the expected results, please refer to ./expected-data.json file in part-1 directory!
 * NOTE: Please ensure that all the tests in part-1.spec.js are passing!
 */

module.exports = {
  task1,
  task2,
  task3,
};
