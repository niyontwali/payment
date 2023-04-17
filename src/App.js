import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    console.log("element", script);
    script.src =
      "https://ap-gateway.mastercard.com/static/checkout/checkout.min.js";
    script.setAttribute("data-error", "errorCallback");
    script.setAttribute("data-cancel", "cancelCallback");
    script.setAttribute("data-complete", "completeCallback");
    script.async = true;

    // function errorCallback(error) {
    //   // When an error is encountered.
    //   console.log(JSON.stringify(error));
    // }
    // function cancelCallback() {
    //   // When the payer cancels the payment interaction
    //   console.log("Payment cancelled");
    // }
    // function completeCallback(resultIndicator) {
    //   // When the payer completes the payment interaction.
    //   console.log("Payment complete");
    //   console.log(resultIndicator);
    //   // compaire the resultIndicator to successIndicator value, should be similar for a successful transaction.
    //   // you can redirect your client to a success page at this point
    // }

    script.addEventListener("load", () => {
      console.log("here");
      window.Checkout.configure({
        session: {
          id: "ESSION0002014873411I57302725H0",
        },
      });
    });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleEmbeddedPage = () => {
    window.Checkout.showEmbeddedPage("#embed-target");
  };
  return (
    <div className="App">
      <div id="embed-target"> </div>
      <button onClick={handleEmbeddedPage}>
        Pay with Embedded Page
      </button>
    </div>
  );
}

export default App;
