import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useCart } from "../../context/CartContext";
import { SITE_SETTINGS } from "../../constants/settings";

function Checkout() {
    const {
        cartItems,
        cartTotal,
    } = useCart();

    const [deliveryDate, setDeliveryDate] =
        useState(null);

    const [customerName, setCustomerName] =
        useState("");

    const [address, setAddress] =
        useState("");

    const [landmark, setLandmark] =
        useState("");

    const [phone, setPhone] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [notes, setNotes] =
        useState("");

    const now = new Date();

    const cutoffHour = Number(
        SITE_SETTINGS.cutoffTime.split(":")[0]
    );

    const minimumDate =
        now.getHours() >= cutoffHour
            ? new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate() + 1
            )
            : now;

    const maximumDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() +
        SITE_SETTINGS.deliveryDaysAhead
    );

    const cutoffPassed =
        now.getHours() >= cutoffHour;

    const handleProceedToPayment = () => {
        if (!deliveryDate) {
            alert("Please select a delivery date.");
            return;
        }

        if (!customerName.trim()) {
            alert("Please enter your full name.");
            return;
        }

        if (!address.trim()) {
            alert("Please enter a delivery address.");
            return;
        }

        if (!landmark.trim()) {
            alert(
                "Please enter a landmark or bus stop."
            );
            return;
        }

        if (!phone.trim()) {
            alert("Please enter your phone number.");
            return;
        }

        if (!/^\d+$/.test(phone)) {
            alert(
                "Phone number can contain only numbers."
            );
            return;
        }

        if (phone.length !== 11) {
            alert(
                "Phone number must contain exactly 11 digits."
            );
            return;
        }

        if (!email.trim()) {
            alert("Please enter your email.");
            return;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert(
                "Please enter a valid email address."
            );
            return;
        }

        const order = {
            orderNumber: `TP-${Date.now()}`,

            customer: {
                name: customerName,
                email,
                phone,
                address,
                landmark,
            },

            items: cartItems,
            subtotal: cartTotal,
            deliveryFee: 0,
            total: cartTotal,
            paymentMethod: "paystack",
            paymentStatus: "pending",
            orderStatus: "pending",
            deliveryDate,
            deliveryNotes: notes,
            createdAt: new Date(),
        };

        console.log(order);
        alert("Redirecting to payment...");
    };

    return (
        <main className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-4xl mx-auto px-4">

                <h1 className="text-3xl font-bold">
                    Checkout
                </h1>

                <div className="mt-10 bg-white rounded-2xl p-6 space-y-6">
                    <div>
                        <label className="block mb-2 font-medium">
                            Delivery Date
                        </label>
                        {cutoffPassed && (
                            <div className="mb-4 bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-xl">
                                Orders placed after {SITE_SETTINGS.cutoffTime}
                                cannot be delivered today.
                                Please select another delivery date.
                            </div>
                        )}

                        <DatePicker
                            selected={deliveryDate}
                            onChange={(date) =>
                                setDeliveryDate(date)
                            }
                            minDate={minimumDate}
                            maxDate={maximumDate}
                            placeholderText="Select delivery date"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Delivery Address
                        </label>

                        <input
                            type="text"
                            value={address}
                            onChange={(e) =>
                                setAddress(e.target.value)
                            }
                            placeholder="Enter delivery address"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Landmark / Bus Stop
                        </label>

                        <input
                            type="text"
                            value={landmark}
                            onChange={(e) =>
                                setLandmark(e.target.value)
                            }
                            placeholder="Example: Opposite Domino's Pizza"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) =>
                                setCustomerName(e.target.value)
                            }
                            placeholder="Enter your full name"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                                const value = e.target.value.replace(
                                    /\D/g,
                                    ""
                                );

                                setPhone(value);
                            }}
                            placeholder="Enter phone number"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter email address"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Delivery Instructions
                        </label>

                        <textarea
                            value={notes}
                            onChange={(e) =>
                                setNotes(e.target.value)
                            }
                            placeholder="Optional instructions for delivery"
                            rows="4"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                    </div>

                    <div className="bg-gray-50 rounded-xl p-5">
                        <div className="flex justify-between text-xl font-bold">
                            <span>Order Total</span>

                            <span>
                                ₦{cartTotal.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={handleProceedToPayment}
                        className="w-full bg-red-600 text-white py-4 rounded-xl"
                    >
                        Proceed To Payment
                    </button>

                </div>

            </div>
        </main>
    );
}

export default Checkout;