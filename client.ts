import apiRoot from "./src/BuildClient";

/**
 * Queries the latest 100 orders, filters for USD currency,
 * and sorts them from highest to lowest spend.
 */
const getHighestSpendOrders = async () => {
  try {
    // Query the latest 100 orders
    const response = await apiRoot
      .orders()
      .get({
        queryArgs: {
          limit: 100,
          sort: 'createdAt desc'
        }
      })
      .execute();
    
    // Extract orders from response
    const orders = response.body.results;
    
    // Filter for orders in USD
    const usdOrders = orders.filter(order => 
      order.totalPrice.currencyCode === 'USD'
    );
    
    // Sort by total price (highest to lowest)
    const sortedOrders = usdOrders.sort((a, b) => 
      b.totalPrice.centAmount - a.totalPrice.centAmount
    );
    
    // Log the results
    console.log('==== TOP USD ORDERS BY SPEND ====');
    sortedOrders.forEach((order, index) => {
      const totalAmount = (order.totalPrice.centAmount / 100).toFixed(2); // Convert cents to dollars
      console.log(`${index + 1}. Order ID: ${order.id}, Total: $${totalAmount}, Customer: ${order.customerId || 'Guest'}`);
    });
    
    return sortedOrders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Execute the function to see the logs
getHighestSpendOrders()
  .then(() => console.log('Query completed successfully'))
  .catch(err => console.error('Failed to run query:', err));

export { getHighestSpendOrders };

