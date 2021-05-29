import React from "react";
import { Container } from "react-bootstrap";

const TnC = () => {
  return (
    <Container fluid className="TnC">
      <h1>Terms & Conditions of the Contest</h1>
      <hr/>
      <ol>
        <li> 20 Lucky winners everyday will be selected at random.</li>
        <li>
          {" "}
          Winners will be informed within 24 hours of order placed via SMS on
          registered phone number and/or email on the registered email ID
        </li>
        <li>
          {" "}
          Complimentary Amazon Fire TV Stick CODE will be sent to the winners on
          order completion. (Order Completion duration: When the order is
          delivered and return period of 14 days is over)
        </li>
        <li>
          {" "}
          The coupon code is redeemable on amazon.in. To claim, follow the steps
          sent on email to order complementary Amazon Fire TV Stick
        </li>
        <li>
          {" "}
          The purchase needs to be made from the Mirzapur inspired Sunglasses
          Collection only.
        </li>
        <li>
          {" "}
          The offer is subject to change without any prior notice and at the
          sole discretion of Lenskart and Amazon.
        </li>
        <li>
          {" "}
          Offer valid from 16th November 2018 till 23rd November 2018. Codes
          needs to be used before 31st December 2018.
        </li>
        <li>
          {" "}
          In case of failure on coupon code redemption, please follow <a rel='noreferrer' href='https://www.amazon.in' target='_blank'>Amazon's
          T&C.</a>
        </li>
        <li>
          {" "}
          For after sale service of Amazon Fire TV Stick, please follow <a rel='noreferrer' href='https://www.amazon.in' target='_blank'>Amazon's
          T&C.</a>
        </li>
      </ol>
    </Container>
  );
};

export default TnC;
