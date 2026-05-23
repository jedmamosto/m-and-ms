"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart, cartCount, cartTotal, updateQuantity, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    // Redirect to checkout tab in /demo
    router.push("/demo?tab=checkout");
  };

  return (
    <>
      {/* HEADER NAV BAR */}
      <header className="sticky top-0 z-40 w-full border-b-3 border-on-surface bg-surface/90 backdrop-blur-md px-4 py-3 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border-3 border-on-surface bg-primary text-on-primary font-label-bold text-lg uppercase tracking-tight shadow-[3px_3px_0px_0px_var(--color-secondary)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
          >
            🇵🇭 M&Ms
            <span className="hidden sm:inline font-bold text-xs bg-tertiary-fixed text-on-tertiary-fixed border-l-2 border-on-surface pl-2 ml-1">
              MSME MARKET
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 font-label-bold text-sm tracking-wider uppercase text-on-surface">
            <Link
              href="/"
              className={`hover:text-primary transition-colors ${
                pathname === "/" ? "text-primary border-b-2 border-primary" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/demo"
              className={`hover:text-primary transition-colors ${
                pathname === "/demo" ? "text-primary border-b-2 border-primary" : ""
              }`}
            >
              Demo Sandbox
            </Link>
            <Link
              href="/demo?tab=quiz"
              className="hover:text-primary transition-colors"
            >
              Match Quiz
            </Link>
            <Link
              href="/demo?tab=apply"
              className="hover:text-primary transition-colors"
            >
              Seller Portal
            </Link>
          </nav>

          {/* Cart trigger & Demo Link */}
          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 border-2 border-on-surface rounded bg-surface-container font-label-bold text-xs uppercase hover:bg-surface-container-high"
            >
              Demo
            </Link>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative min-h-[44px] min-w-[44px] px-3 flex items-center gap-2 border-3 border-on-surface bg-tertiary-fixed text-on-tertiary-fixed rounded font-label-bold uppercase text-xs shadow-[3px_3px_0px_0px_var(--color-secondary)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1,0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0,1-1.12-1.243l1.264-12A1.125 1.125 0 0,1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1,1-.75 0 .375.375 0 0,1 .75 0Zm7.5 0a.375.375 0 1,1-.75 0 .375.375 0 0,1 .75 0Z"
                />
              </svg>
              <span className="hidden sm:inline font-black">Cart</span>
              <span className="bg-primary text-white border-2 border-on-surface text-[10px] w-5.5 h-5.5 flex items-center justify-center rounded-full font-black -ml-1">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* CART DRAWER BACKDROP */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* CART DRAWER CONTENT */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface border-l-3 border-on-surface z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b-3 border-on-surface bg-surface-container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛒</span>
            <h3 className="font-headline-md text-lg text-on-surface uppercase tracking-tight">Your Local Bag</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-12 h-12 border-3 border-on-surface bg-surface hover:bg-surface-container-high rounded flex items-center justify-center font-black text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Drawer Scroll Body */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <span className="text-4xl mb-4">🌴</span>
              <h4 className="font-headline-md text-base text-on-surface uppercase mb-2">Your cart is empty</h4>
              <p className="font-body-md text-xs text-on-surface-variant max-w-[240px] leading-relaxed">
                Add some authentic handwoven goods or mouthwatering delicacies to support local MSMEs!
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  router.push("/demo");
                }}
                className="mt-6 cta-primary min-h-[48px] text-xs uppercase"
              >
                Go to Demo Shop
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-4 bg-surface-container-lowest border-3 border-on-surface rounded-lg shadow-[3px_3px_0px_0px_var(--color-secondary)]"
              >
                {/* Visual frame placeholder */}
                <div
                  className={`w-16 h-16 rounded border-2 border-on-surface bg-gradient-to-br ${item.product.imageBg} shrink-0 flex items-center justify-center text-white text-lg font-black shadow-[2px_2px_0px_0px_var(--color-on-surface)]`}
                >
                  🇵🇭
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h5 className="font-headline-md text-sm text-on-surface leading-tight">
                      {item.product.name}
                    </h5>
                    <p className="font-label-bold text-[10px] text-primary uppercase tracking-wide mt-1">
                      {item.product.maker}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2.5">
                    {/* Quantity Selector */}
                    <div className="flex items-center border-2 border-on-surface rounded bg-surface">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-11 h-11 flex items-center justify-center font-bold hover:bg-surface-container-high border-r-2 border-on-surface text-xs cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-3.5 font-label-bold text-xs">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-11 h-11 flex items-center justify-center font-bold hover:bg-surface-container-high border-l-2 border-on-surface text-xs cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-label-bold text-xs text-on-surface">
                        ₱{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-error hover:text-red-700 text-xs font-bold px-3 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center border-l border-surface-container-highest cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer summary */}
        {cart.length > 0 && (
          <div className="p-6 border-t-3 border-on-surface bg-surface-container space-y-4">
            <div className="flex justify-between items-center font-headline-md text-base">
              <span className="uppercase">Total:</span>
              <span className="text-xl text-primary font-black">
                ₱{cartTotal.toLocaleString()}
              </span>
            </div>

            <p className="text-[10px] text-on-surface-variant font-medium leading-relaxed">
              * Support local fair-trade shipping. Secure, mock payment options GCash and PayMaya are pre-selected.
            </p>

            <button
              onClick={handleCheckoutClick}
              className="w-full cta-primary min-h-[48px] uppercase tracking-wider text-sm flex items-center justify-center gap-2"
            >
              Proceed to checkout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
