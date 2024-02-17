import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/PaymentCheckoutForm/CheckoutForm";
import "./Payment.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51OgRRoAs6G2CVNijceDJJtx3AFoevp0u6kewKHzYucn8ziY85nkml1rzOFIGZbaqSOTQW3UTRemWXh0jw2aEO6oL00HMO4F5LD"
);

interface PaymentProps {}

const Payment: React.FC<PaymentProps> = () => {
  const [clientSecret, setClientSecret] = useState<string>("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8080/api/payments/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe" as const,
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
      <div className="h-screen flex justify-center items-center">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
  );
};

export default Payment;