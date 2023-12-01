import paypal from "@paypal/checkout-server-sdk";

const clientId =
  "AT637dMJYkLi2R8wfKzpRa3v72k_umQ2hi44dWZrfSzPddY2NxHRCEjhtJ2soLWge5jMD4PMBTa5bhRA";

const clientSecret =
  "EJ58utDjZ8NjRFFsaPWK1gqstu6YCe4b8i8G7dvJlQNF3lJk2dJSoLeCiH1SkSuz3VlnRr2Xiops5HPZ";

const enviroment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(enviroment);

export async function POST() {
  const request = new paypal.orders.OrdersCreateRequest();

  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "MXN",
          value: "200.00",
          breakdown: {
            item_total: {
                currency_code: "MXN",
                value: "200.00",
            }
          }
        },
        items: [
          {
            name: "Juego 1",
            description: "Juego para Xbox",
            quantity: "1",
            unit_amount: {
              currency_code: "MXN",
              value: "200.00",
            }
          },
        ],
      },
    ],
  });

  const response = await client.execute(request);

  return response;
}
