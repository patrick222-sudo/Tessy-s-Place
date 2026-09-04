import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  LoaderCircle,
  MapPin,
  ShoppingBag,
} from "lucide-react";

import "react-datepicker/dist/react-datepicker.css";

import MainLayout from "../../layouts/MainLayout";
import { useCart } from "../../context/CartContext";
import { SITE_SETTINGS } from "../../constants/settings";

function Checkout() {
  const {
    cartItems,
    cartTotal,
  } = useCart();

  const [deliveryDate, setDeliveryDate] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const now = new Date();

  const cutoffHour = Number(
    SITE_SETTINGS.cutoffTime.split(":")[0]
  );

  const cutoffPassed =
    now.getHours() >= cutoffHour;

  const getNextAvailableDate = (date) => {
    const nextDate = new Date(date);

    if (cutoffPassed) {
      nextDate.setDate(nextDate.getDate() + 1);
    }

    while (nextDate.getDay() === 0) {
      nextDate.setDate(nextDate.getDate() + 1);
    }

    return nextDate;
  };

  const minimumDate = getNextAvailableDate(now);

  const maximumDate = new Date(now);

  maximumDate.setDate(
    maximumDate.getDate() +
      SITE_SETTINGS.deliveryDaysAhead
  );

  const isDeliveryDay = (date) => {
    return date.getDay() !== 0;
  };

  const handleProceedToPayment = () => {
    setError("");

    if (cartItems.length === 0) {
      setError("Your cart is empty. Please add a meal before checkout.");
      return;
    }

    if (!deliveryDate) {
      setError("Please select a delivery date.");
      return;
    }

    if (!customerName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!address.trim()) {
      setError("Please enter your delivery address.");
      return;
    }

    if (!landmark.trim()) {
      setError("Please enter a landmark or bus stop.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^\d+$/.test(phone)) {
      setError("Phone number can contain only numbers.");
      return;
    }

    if (phone.length !== 11) {
      setError("Phone number must contain exactly 11 digits.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    const order = {
      orderNumber: `TP-${Date.now()}`,
      customer: {
        name: customerName.trim(),
        email: email.trim(),
        phone,
        address: address.trim(),
        landmark: landmark.trim(),
      },
      items: cartItems,
      subtotal: cartTotal,
      deliveryFee: 0,
      total: cartTotal,
      paymentMethod: "paystack",
      paymentStatus: "pending",
      orderStatus: "pending",
      deliveryDate: deliveryDate.toISOString(),
      deliveryNotes: notes.trim(),
      createdAt: new Date().toISOString(),
    };

    console.log(order);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <MainLayout>
      <main className="min-h-screen bg-gray-50 py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center">
              <CreditCard
                size={22}
                className="text-red-600"
              />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Checkout
              </h1>

              <p className="text-gray-500 mt-1">
                Complete your order details before payment.
              </p>
            </div>

          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8 mt-10">

            <div className="space-y-6">

              <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <CalendarDays
                      size={20}
                      className="text-red-600"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Delivery Date
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Choose when you want to receive your order.
                    </p>
                  </div>
                </div>

                {cutoffPassed && (
                  <div className="mt-5 bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-xl text-sm leading-relaxed">
                    Today's delivery cutoff has passed. Orders placed after{" "}
                    <strong>
                      {SITE_SETTINGS.cutoffTime}
                    </strong>{" "}
                    cannot be delivered today.
                  </div>
                )}

                <div className="mt-6">

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select delivery date
                  </label>

                  <DatePicker
                    selected={deliveryDate}
                    onChange={(date) => {
                      setDeliveryDate(date);
                      setError("");
                    }}
                    minDate={minimumDate}
                    maxDate={maximumDate}
                    filterDate={isDeliveryDay}
                    placeholderText="Select a delivery date"
                    dateFormat="dd MMMM yyyy"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-white outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Delivery is available Monday to Saturday. Packages are
                    sent out from 12 PM daily.
                  </p>

                </div>

              </section>

              <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <MapPin
                      size={20}
                      className="text-red-600"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Delivery Details
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Where should we deliver your order?
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mt-6">

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) =>
                        setCustomerName(e.target.value)
                      }
                      placeholder="Enter your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Address
                    </label>

                    <input
                      type="text"
                      value={address}
                      onChange={(e) =>
                        setAddress(e.target.value)
                      }
                      placeholder="Enter your delivery address"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Landmark / Bus Stop
                    </label>

                    <input
                      type="text"
                      value={landmark}
                      onChange={(e) =>
                        setLandmark(e.target.value)
                      }
                      placeholder="Example: Kolex Bus Stop"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={11}
                      value={phone}
                      onChange={(e) => {
                        const value =
                          e.target.value.replace(
                            /\D/g,
                            ""
                          );

                        setPhone(value);
                      }}
                      placeholder="08012345678"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="Enter your email address"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Instructions
                      <span className="font-normal text-gray-400">
                        {" "}
                        (Optional)
                      </span>
                    </label>

                    <textarea
                      value={notes}
                      onChange={(e) =>
                        setNotes(e.target.value)
                      }
                      placeholder="Any additional instructions for the rider..."
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none resize-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                    />
                  </div>

                </div>

              </section>

              {error && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-4 rounded-xl">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0"
                  />

                  <p className="text-sm font-medium">
                    {error}
                  </p>
                </div>
              )}

            </div>

            <aside className="lg:sticky lg:top-28 h-fit">

              <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">

                <div className="flex items-center gap-3">

                  <ShoppingBag
                    size={21}
                    className="text-red-600"
                  />

                  <h2 className="text-xl font-bold text-gray-900">
                    Order Summary
                  </h2>

                </div>

                <div className="mt-6 space-y-4">

                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <p className="font-medium text-gray-800 truncate">
                          {item.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="font-semibold text-gray-900 shrink-0">
                        ₦
                        {(
                          item.price * item.quantity
                        ).toLocaleString()}
                      </p>
                    </div>
                  ))}

                </div>

                <div className="border-t border-gray-100 mt-6 pt-5">

                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>

                    <span>
                      ₦{cartTotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600 mt-3">
                    <span>Delivery</span>

                    <span>Calculated later</span>
                  </div>

                  <div className="flex justify-between items-center mt-5">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-red-600">
                      ₦{cartTotal.toLocaleString()}
                    </span>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={handleProceedToPayment}
                  disabled={isSubmitting || cartItems.length === 0}
                  className={`w-full mt-7 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white transition ${
                    isSubmitting || cartItems.length === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle
                        size={20}
                        className="animate-spin"
                      />
                      Preparing Payment...
                    </>
                  ) : (
                    <>
                      <CreditCard size={20} />
                      Proceed To Payment
                    </>
                  )}
                </button>

                <p className="mt-4 text-xs text-gray-500 text-center leading-relaxed">
                  Payment will be required before your order is placed.
                </p>

              </div>

              <Link
                to="/cart"
                className="flex items-center justify-center gap-2 mt-5 text-gray-500 hover:text-red-600 transition text-sm font-medium"
              >
                <ArrowLeft size={16} />
                Back to Cart
              </Link>

            </aside>

          </div>

        </div>
      </main>
    </MainLayout>
  );
}

export default Checkout;