import { useState } from "react"
import { Form, Button, Col } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"

import CheckoutSteps from "../components/CheckoutSteps"
import FormContainer from "../components/FormContainer"

import { savePaymentMethod } from "../actions/cartActions"

const ShippingScreen = ({ history }) => {
  const { shippingAddress } = useSelector((state) => state.cart)
  if (!shippingAddress) {
    history.push("/shipping")
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push("/placeorder")
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>PAYMENT</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}
export default ShippingScreen
