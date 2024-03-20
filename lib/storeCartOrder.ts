// const createCart = () => {
//     return apiRoot
//     .carts()
//     .post({
//       //The cart draft is the object within the body
//       body:{
//         currency: "USD",
//         store:{
//           key: "data-model-uriel",
//           typeId: "store"
//         },
//         lineItems:[
//           {
//             sku: "WF-100",
//             quantity: 400,
//             distributionChannel:{
//               key: "data-model-uriel-channel",
//               typeId: "channel"
//             },
//             supplyChannel:{
//               key: "data-model-uriel-channel",
//               typeId: "channel"
//             },
//             inventoryMode: "ReserveOnOrder"
//           }
//         ],
//         shippingAddress:{
//           country: "US"
//         }
//       }
//         })
//     .execute() 
//     .then(response => {
//       // Assuming the response includes a cart object with an id
//       const cartId: string = response.body.id;
//       const version: number = response.body.version;
//       // Now, use this cartId to post line items to the cart
//       // This example assumes you have a method to add line items and that method returns a Promise
//       // return addLineItemsToCart(cartId, version); // You need to define this function and the lineItems variable
//       return createOrder(cartId, version);
//     });
//   }
  
  
//   const createOrder = (cartId: string, version:number) =>{
//     return apiRoot
//     .orders()
//     .post({
//       body: {
//         version,
//         cart:{
//           typeId:"cart",
//           id: cartId
//         }
//       }
//     })
//     .execute()
//   }

// createCart()
//   .then(orderResponse => {
//     // Handle the successful order creation here
//     console.log('Order created successfully:', orderResponse);
//   })