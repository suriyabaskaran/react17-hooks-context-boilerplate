import React from 'react';
import {
  Container, Row, Col, Button, Form
} from 'react-bootstrap';
import { useFeTestSbStoreController, updateProduct, clearCart, clearCartItem } from "../../context";

const Cart = () => {
  const [controller, dispatch] = useFeTestSbStoreController();
  return (
    <Container>
      <Row>
        <Col>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h5 className="display-6 fw-normal">Cart</h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-responsive">
            <div className="top-section">
              <table className="table">
                <tbody>
                  {controller.products.map(product => (
                    <tr key={product.id}>
                      <td className='product-name'>{product.name}</td>
                      <td className='product-quantity'>
                        <Form.Control
                          type="number"
                          min="0"
                          id={`quantity-${product.id}`}
                          aria-describedby={`quantity of the prodct ${product.quantity}`}
                          value={product.quantity}
                          onChange={e => {
                            updateProduct(dispatch, product.id, e.target.value);
                          }}
                        />
                      </td>
                      <td className="cart-currency">{controller.currency}&nbsp;{parseFloat(product.quantity * product.price).toFixed(2)}</td>
                      <td className='clear-item'><svg onClick={e => clearCartItem(dispatch, product.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="darkgray" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='cart-total-section'>
              <table>
                <tbody>
                  <tr>
                    <td className='total-currency'>{controller.currency}&nbsp;{controller.total}</td>
                    <td className='text-right'><a aria-describedby='clear cart' className='cart-clear' id='clear-cart' onClick={e => clearCart(dispatch)}>Clear</a></td>
                    <td className='text-right'><Button name='checkout' aria-describedby='checkout' variant='primary'>Check Out <i className="bi bi-chevron-right"></i></Button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
