import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon, MinusIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: newQuantity },
    });
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + parseFloat(item.totalPriceINR), 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      dispatch({ type: "CLEAR_CART" });
      setIsCheckingOut(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-4 text-gray-500">
              You haven't added any items to your cart yet.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.id} className="p-4 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-24 h-32 overflow-hidden rounded-md">
                          <img
                            src={item.formats["image/jpeg"]}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-medium text-gray-900">
                              {item.title.split(":")[0]}
                            </h3>
                            <button
                              onClick={() => handleRemoveFromCart(item.id)}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <XIcon className="h-5 w-5" />
                            </button>
                          </div>

                          <p className="mt-1 text-sm text-gray-500">
                            {item.authors
                              .map((author) => author.name)
                              .join(", ")}
                          </p>

                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                className="p-1 text-gray-400 hover:text-gray-500"
                              >
                                <MinusIcon className="h-4 w-4" />
                              </button>

                              <span className="mx-2 text-gray-700">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="p-1 text-gray-400 hover:text-gray-500"
                              >
                                <PlusIcon className="h-4 w-4" />
                              </button>
                            </div>

                            <div className="text-right">
                              <p className="text-lg font-medium text-gray-900">
                                ₹{item.totalPriceINR}
                              </p>
                              <p className="text-sm text-gray-500">
                                (${item.totalPriceUSD})
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{calculateTotal()}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">₹0.00</span>
                  </div>

                  <div className="flex justify-between border-t border-gray-200 pt-4">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-lg font-medium">
                      ₹{calculateTotal()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="mt-6 w-full bg-indigo-600 text-white bg-midnight py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400"
                >
                  {isCheckingOut ? "Processing..." : "Checkout"}
                </button>

                {isCheckingOut && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
                    <p>
                      Thank you for your order! You'll be redirected shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
