var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {

  var results = {};
  for (company in salesData) {
    var totalSales = companySalesData[company].sales.reduce(function(a, b) {
      return a + b;
    });

    var afterTax = totalSales * taxRates[salesData[company].province];
    var companyName = companySalesData[company].name;

    if (results.hasOwnProperty(companySalesData[company].name)) {
    results[companyName].totalSales += totalSales;
    results[companyName].totalTaxes += afterTax;
    } else {
    results[companyName] = {
      totalSales: totalSales,
      totalTaxes: afterTax
    }
   }
  }
  return results;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));
