"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PRODUCTS, Product } from "../products/data";
import { useCart } from "../context/CartContext";

function DemoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { cart, cartTotal, addToCart, clearCart } = useCart();

  // Compute activeTab from searchParams dynamically to avoid synchronizing state in effects
  const tabParam = searchParams.get("tab");
  const activeTab = tabParam && ["shop", "quiz", "checkout", "apply"].includes(tabParam)
    ? tabParam
    : "shop";

  const handleTabChange = (tab: string) => {
    router.push(`/demo?tab=${tab}`);
  };

  // Product Card Details vs Story toggles
  const [cardToggles, setCardToggles] = useState<Record<string, "details" | "story">>({});

  const toggleCardView = (productId: string, view: "details" | "story") => {
    setCardToggles((prev) => ({ ...prev, [productId]: view }));
  };

  // Micro-alert state for Cart Feedback
  const [alertMsg, setAlertMsg] = useState("");
  const showMicroAlert = (msg: string) => {
    setAlertMsg(msg);
    setTimeout(() => setAlertMsg(""), 3000);
  };

  // 1. SHOP STATE
  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    showMicroAlert(`Added 1 x ${product.name} to local bag!`);
  };

  // 2. QUIZ STATE
  const [quizStep, setQuizStep] = useState(1);
  const [quizCategory, setQuizCategory] = useState("food");
  const [quizPurpose, setQuizPurpose] = useState("personal");
  const [quizResult, setQuizResult] = useState<Product | null>(null);
  const [isQuizCalculating, setIsQuizCalculating] = useState(false);

  const startQuizMatch = () => {
    setIsQuizCalculating(true);
    setTimeout(() => {
      // Find a product that matches the chosen category
      const matched = PRODUCTS.find((p) => {
        if (quizCategory === "food") return p.category === "Food Products";
        if (quizCategory === "crafts") return p.category === "Artisan Crafts";
        if (quizCategory === "textiles") return p.category === "Fashion & Accessories" && p.id.includes("yakan");
        if (quizCategory === "wellness") return p.category === "Health & Beauty" || p.id.includes("romblon");
        return true;
      });
      setQuizResult(matched || PRODUCTS[0]);
      setIsQuizCalculating(false);
      setQuizStep(3);
    }, 1500);
  };

  // 3. CHECKOUT STATE
  const [checkoutName, setCheckoutName] = useState("");
  const [checkoutEmail, setCheckoutEmail] = useState("");
  const [checkoutPhone, setCheckoutPhone] = useState("");
  const [checkoutAddress, setCheckoutAddress] = useState("");
  const [checkoutPayment, setCheckoutPayment] = useState("gcash");
  const [checkoutErrors, setCheckoutErrors] = useState<Record<string, string>>({});
  const [isCheckoutSubmitting, setIsCheckoutSubmitting] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [submittedOrderId, setSubmittedOrderId] = useState("");

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!checkoutName.trim()) errors.name = "Full name is required.";
    if (!checkoutEmail.trim()) errors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(checkoutEmail)) errors.email = "Enter a valid email.";
    if (!checkoutPhone.trim()) errors.phone = "Phone number is required.";
    if (!checkoutAddress.trim()) errors.address = "Delivery address is required.";

    if (Object.keys(errors).length > 0) {
      setCheckoutErrors(errors);
      return;
    }
    setCheckoutErrors({});

    if (cart.length === 0) {
      alert("Your cart is empty! Add some items first.");
      return;
    }

    setIsCheckoutSubmitting(true);

    try {
      const orderItems = cart.map((item) => `${item.product.name} (x${item.quantity})`).join(", ");
      await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: {
            name: checkoutName,
            email: checkoutEmail,
            phone: checkoutPhone,
          },
          painPoints: [`Order: ${orderItems}`],
          commitment: 10,
          budget: `Total: ₱${(cartTotal + 100).toLocaleString()}`,
          timeline: `PayMethod: ${checkoutPayment}`,
          score: 100,
          isQualified: true,
        }),
      });
      setSubmittedOrderId(`MM-${Math.floor(100000 + Math.random() * 900000)}`);
      setCheckoutSuccess(true);
      clearCart();
    } catch (e) {
      console.error(e);
      alert("Failed to connect to checkout API. Try again.");
    } finally {
      setIsCheckoutSubmitting(false);
    }
  };

  // 4. SELLER PORTAL STATE
  const [sellerBrand, setSellerBrand] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");
  const [sellerCategory, setSellerCategory] = useState("Artisan Crafts");
  const [sellerRegion, setSellerRegion] = useState("Luzon");
  const [sellerBio, setSellerBio] = useState("");
  const [sellerErrors, setSellerErrors] = useState<Record<string, string>>({});
  const [isSellerSubmitting, setIsSellerSubmitting] = useState(false);

  const handleSellerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!sellerBrand.trim()) errors.brand = "Brand name is required.";
    if (!sellerName.trim()) errors.name = "Founder name is required.";
    if (!sellerEmail.trim()) errors.email = "Email is required.";
    if (!sellerPhone.trim()) errors.phone = "Phone number is required.";

    if (Object.keys(errors).length > 0) {
      setSellerErrors(errors);
      return;
    }
    setSellerErrors({});
    setIsSellerSubmitting(true);

    try {
      await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: {
            name: sellerName,
            email: sellerEmail,
            phone: sellerPhone,
          },
          painPoints: [`Seller Registration: ${sellerBrand} (${sellerCategory})`],
          commitment: 10,
          budget: `Region: ${sellerRegion}`,
          timeline: `Bio: ${sellerBio}`,
          score: 100,
          isQualified: true,
        }),
      });

      // Redirect to scheduling calendar page prefilled
      router.push(`/book?name=${encodeURIComponent(sellerName)}&email=${encodeURIComponent(sellerEmail)}&phone=${encodeURIComponent(sellerPhone)}`);
    } catch (e) {
      console.error(e);
      alert("Failed to submit application.");
    } finally {
      setIsSellerSubmitting(false);
    }
  };

  return (
    <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8 relative">
      {/* Dynamic Floating Alert */}
      {alertMsg && (
        <div className="fixed bottom-6 right-6 z-50 px-6 py-4 bg-tertiary-fixed text-on-tertiary-fixed border-3 border-on-surface rounded-lg font-label-bold text-sm shadow-[4px_4px_0px_0px_var(--color-secondary)] uppercase tracking-wide animate-bounce">
          {alertMsg}
        </div>
      )}

      {/* Hero Badge */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="font-display-lg text-3xl md:text-5xl text-on-surface uppercase tracking-tight mb-4 leading-none">
          Marketplace Sandbox
        </h1>
        <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
          Test interactive custom-coded components styled with the Bold Localism system. Click any tab to review the layouts.
        </p>
      </div>

      {/* TABS SELECTOR CONTAINER */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 mb-10 border-b-3 border-on-surface pb-6 w-full max-w-md sm:max-w-none mx-auto">
        <button
          onClick={() => handleTabChange("shop")}
          className={`min-h-[48px] px-6 font-label-bold text-xs uppercase tracking-wider border-3 rounded transition-all cursor-pointer w-full sm:w-auto flex items-center justify-center ${
            activeTab === "shop"
              ? "bg-primary border-on-surface text-white shadow-[3px_3px_0px_0px_var(--color-secondary)] translate-y-[-2px] translate-x-[-2px]"
              : "bg-surface border-on-surface text-on-surface hover:bg-surface-container"
          }`}
        >
          <span role="img" aria-label="shop products" className="mr-1">🏺</span> Shop Products
        </button>
        <button
          onClick={() => handleTabChange("quiz")}
          className={`min-h-[48px] px-6 font-label-bold text-xs uppercase tracking-wider border-3 rounded transition-all cursor-pointer w-full sm:w-auto flex items-center justify-center ${
            activeTab === "quiz"
              ? "bg-primary border-on-surface text-white shadow-[3px_3px_0px_0px_var(--color-secondary)] translate-y-[-2px] translate-x-[-2px]"
              : "bg-surface border-on-surface text-on-surface hover:bg-surface-container"
          }`}
        >
          <span role="img" aria-label="matchmaker quiz" className="mr-1">🧩</span> Matchmaker Quiz
        </button>
        <button
          onClick={() => handleTabChange("checkout")}
          className={`min-h-[48px] px-6 font-label-bold text-xs uppercase tracking-wider border-3 rounded transition-all cursor-pointer w-full sm:w-auto flex items-center justify-center ${
            activeTab === "checkout"
              ? "bg-primary border-on-surface text-white shadow-[3px_3px_0px_0px_var(--color-secondary)] translate-y-[-2px] translate-x-[-2px]"
              : "bg-surface border-on-surface text-on-surface hover:bg-surface-container"
          }`}
        >
          <span role="img" aria-label="checkout form" className="mr-1">💳</span> Checkout form ({cart.length})
        </button>
        <button
          onClick={() => handleTabChange("apply")}
          className={`min-h-[48px] px-6 font-label-bold text-xs uppercase tracking-wider border-3 rounded transition-all cursor-pointer w-full sm:w-auto flex items-center justify-center ${
            activeTab === "apply"
              ? "bg-primary border-on-surface text-white shadow-[3px_3px_0px_0px_var(--color-secondary)] translate-y-[-2px] translate-x-[-2px]"
              : "bg-surface border-on-surface text-on-surface hover:bg-surface-container"
          }`}
        >
          <span role="img" aria-label="merchant application" className="mr-1">🧑‍🌾</span> Merchant application
        </button>
      </div>

      {/* --- TAB CONTENT 1: SHOP SANDBOX --- */}
      {activeTab === "shop" && (
        <div className="fade-in space-y-12">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => {
              const view = cardToggles[product.id] || "details";
              return (
                <div
                  key={product.id}
                  className="card flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_var(--color-secondary)] transition-all bg-surface-container-lowest"
                >
                  <div>
                    {/* Brand Color Application Technique 1: Product Gradient BG Frame */}
                    <div
                      className={`w-full aspect-square rounded border-3 border-on-surface bg-gradient-to-br ${product.imageBg} flex items-center justify-center text-white font-black text-4xl shadow-[3.5px_3.5px_0px_0px_var(--color-on-surface)] mb-4`}
                    >
                      {product.id === "inabel-runner" && "🌾"}
                      {product.id === "davao-chocolate" && "🍫"}
                      {product.id === "batangas-barako" && "☕"}
                      {product.id === "yakan-sling-bag" && "👜"}
                      {product.id === "paete-salad-bowl" && "🥣"}
                      {product.id === "benguet-honey" && "🍯"}
                      {product.id === "vco-soaps" && "🧼"}
                      {product.id === "romblon-beach-hat" && "👒"}
                    </div>

                    {/* Meta labels */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="tag text-[9px] uppercase tracking-wide px-2 py-0.5 font-bold">
                        {product.region}
                      </span>
                      <span className="font-label-bold text-xs text-primary uppercase font-bold">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="font-headline-md text-base text-on-surface leading-tight mb-1">
                      {product.name}
                    </h3>
                    <p className="font-label-bold text-[10px] text-on-surface-variant uppercase font-medium mb-3">
                      By: {product.maker}
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center gap-1 mb-4 text-xs font-semibold text-on-surface">
                      <span className="text-primary text-sm leading-none">★</span>
                      <span>{product.rating}</span>
                      <span className="text-on-surface-variant font-medium">({product.reviewsCount} reviews)</span>
                    </div>

                    {/* CARD TAB SWITCHER */}
                    <div className="flex border-b-2 border-on-surface mb-3.5 text-xs font-label-bold uppercase tracking-wider">
                      <button
                        onClick={() => toggleCardView(product.id, "details")}
                        className={`flex-1 py-3 border-b-2 transition-colors min-h-[44px] flex items-center justify-center cursor-pointer ${
                          view === "details" ? "border-primary text-primary" : "border-transparent text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        Details
                      </button>
                      <button
                        onClick={() => toggleCardView(product.id, "story")}
                        className={`flex-1 py-3 border-b-2 transition-colors min-h-[44px] flex items-center justify-center cursor-pointer ${
                          view === "story" ? "border-primary text-primary" : "border-transparent text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        Maker Story
                      </button>
                    </div>

                    {/* Dynamic Text Area */}
                    <div className="min-h-[100px] text-xs font-body-md text-on-surface-variant leading-relaxed mb-4">
                      {view === "details" ? (
                        <p>{product.description}</p>
                      ) : (
                        <p className="italic bg-surface-container/60 p-2.5 rounded border-2 border-dashed border-outline-variant">{product.makerStory}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4 pt-3 border-t-2 border-on-surface/10">
                      <span className="text-xs uppercase font-label-bold font-bold text-on-surface-variant">Price:</span>
                      <span className="font-headline-md text-lg text-primary">₱{product.price}</span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full cta-primary min-h-[48px] uppercase text-xs tracking-wider"
                    >
                      Add to Local Bag
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky sticker gallery at bottom of shop tab */}
          <div className="p-6 bg-surface-container rounded-lg border-3 border-on-surface shadow-[4px_4px_0px_0px_var(--color-secondary)]">
            <h4 className="font-label-bold text-xs uppercase tracking-wider text-on-surface-variant mb-4">Branding Stickers & Badges Gallery</h4>
            <div className="flex flex-wrap gap-4 items-center justify-around">
              <span className="sticker px-4 py-3 text-xs w-28 uppercase rotate-[-3deg]">
                <span>100% PINOY</span>
                <span className="text-[9px] font-medium">HERITAGE</span>
              </span>
              <span className="sticker px-4 py-3 text-xs w-28 bg-primary text-white uppercase rotate-[4deg]">
                <span>FAIR TRADE</span>
                <span className="text-[9px] font-medium">DIRECT SHIP</span>
              </span>
              <span className="sticker px-4 py-3 text-xs w-28 bg-surface text-on-surface uppercase rotate-[-6deg]">
                <span>SUPPORT</span>
                <span className="text-[9px] font-medium">MSMEs</span>
              </span>
              <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed border-3 border-on-surface rounded p-3 font-label-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--color-secondary)]">
                🔥 Hot Curated
              </span>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB CONTENT 2: MATCHMAKER QUIZ --- */}
      {activeTab === "quiz" && (
        <div className="fade-in max-w-xl mx-auto">
          <div className="bg-surface-container-lowest border-3 border-on-surface rounded-xl shadow-[6px_6px_0px_0px_var(--color-secondary)] overflow-hidden">
            {/* Header progress */}
            <div className="bg-surface-container px-6 py-4 border-b-3 border-on-surface flex items-center justify-between">
              <span className="font-label-bold text-xs text-primary uppercase">
                Interactive Quiz Mockup
              </span>
              <span className="font-label-bold text-xs text-on-surface-variant">
                Step {quizStep} of 3
              </span>
            </div>

            {/* Quiz Content Switcher */}
            <div className="p-6 md:p-8 min-h-[300px] flex flex-col justify-between">
              <div>
                {quizStep === 1 && (
                  <div className="fade-in space-y-4">
                    <h3 className="font-headline-md text-xl text-on-surface">What is your main search goal today?</h3>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      We match you with local products that align with your requirements.
                    </p>

                    <div className="space-y-3 pt-2">
                      {[
                        { id: "personal", label: "Indulging in local delicacies or home updates" },
                        { id: "gift", label: "Finding a unique, handmade gift for someone special" },
                        { id: "bulk", label: "Sourcing corporate giveaways or event souvenirs" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setQuizPurpose(item.id)}
                          className={`w-full text-left p-4 border-3 rounded-lg font-headline-md text-sm flex items-center justify-between transition-all duration-150 min-h-[48px] cursor-pointer ${
                            quizPurpose === item.id
                              ? "border-on-surface bg-tertiary-fixed text-on-tertiary-fixed shadow-[3px_3px_0px_0px_var(--color-secondary)] translate-y-[-2px] translate-x-[-2px]"
                              : "border-on-surface bg-surface text-on-surface hover:bg-surface-container"
                          }`}
                        >
                          <span>{item.label}</span>
                          <span className={`w-5 h-5 rounded-full border-2 border-on-surface flex items-center justify-center ${quizPurpose === item.id ? "bg-primary" : "bg-surface"}`}>
                            {quizPurpose === item.id && <span className="w-2.5 h-2.5 rounded-full bg-white" />}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="fade-in space-y-4">
                    <h3 className="font-headline-md text-xl text-on-surface">Which product category interests you most?</h3>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      Select a preference to trigger matching calculations.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {[
                        { id: "food", label: "Local Foods & Coffee", icon: "☕" },
                        { id: "crafts", label: "Woodcarvings", icon: "🥣" },
                        { id: "textiles", label: "Handwoven Weaves", icon: "👜" },
                        { id: "wellness", label: "Wellness & Fiber", icon: "🧼" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setQuizCategory(item.id)}
                          className={`p-4 border-3 rounded-lg font-headline-md text-xs uppercase flex flex-col items-center gap-3 transition-all duration-150 text-center cursor-pointer ${
                            quizCategory === item.id
                              ? "border-on-surface bg-tertiary-fixed text-on-tertiary-fixed shadow-[3px_3px_0px_0px_var(--color-secondary)] translate-y-[-2px] translate-x-[-2px]"
                              : "border-on-surface bg-surface text-on-surface hover:bg-surface-container"
                          }`}
                        >
                          <span className="text-3xl">{item.icon}</span>
                          <span className="font-bold">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 3 && quizResult && (
                  <div className="fade-in space-y-6 text-center">
                    <span className="sticker px-4 py-2 text-xs w-28 mx-auto bg-primary text-white rotate-[3deg] uppercase">
                      95% MATCH!
                    </span>
                    <h3 className="font-display-lg text-2xl text-on-surface uppercase tracking-tight">Your Pinoy Craft Match!</h3>
                    
                    {/* Curated matched item container */}
                    <div className="p-4 bg-surface-container rounded-lg border-3 border-on-surface max-w-sm mx-auto shadow-[3px_3px_0px_0px_var(--color-secondary)]">
                      <div className={`w-20 h-20 rounded-full border-3 border-on-surface bg-gradient-to-br ${quizResult.imageBg} flex items-center justify-center text-white text-3xl mx-auto shadow-[2.5px_2.5px_0px_0px_var(--color-on-surface)] mb-3`}>
                        {quizResult.id === "inabel-runner" ? "🌾" : quizResult.id === "davao-chocolate" ? "🍫" : quizResult.id === "batangas-barako" ? "☕" : "👜"}
                      </div>
                      <h4 className="font-headline-md text-base text-on-surface">{quizResult.name}</h4>
                      <p className="font-label-bold text-[10px] text-primary uppercase mt-1">₱{quizResult.price}</p>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mt-2.5">
                        {quizResult.description}
                      </p>
                    </div>

                    <div className="flex gap-3 justify-center pt-2">
                      <button
                        onClick={() => {
                          addToCart(quizResult, 1);
                          showMicroAlert(`Added ${quizResult.name} to cart!`);
                        }}
                        className="cta-primary min-h-[48px] text-xs uppercase"
                      >
                        Add Match to bag
                      </button>
                      <button
                        onClick={() => {
                          setQuizStep(1);
                          setQuizResult(null);
                        }}
                        className="px-4 py-3 min-h-[44px] border-3 border-on-surface bg-surface hover:bg-surface-container rounded font-button-text text-xs uppercase shadow-[2.5px_2.5px_0px_0px_var(--color-on-surface)] transition-all hover:translate-y-[2px] flex items-center justify-center cursor-pointer"
                      >
                        Retake Quiz
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation button footer */}
              {quizStep < 3 && (
                <div className="flex items-center justify-between border-t-3 border-on-surface pt-4 mt-6">
                  {quizStep > 1 ? (
                    <button
                      onClick={() => setQuizStep(1)}
                      className="px-4 py-3 min-h-[44px] border-3 border-on-surface bg-surface hover:bg-surface-container rounded font-button-text text-xs uppercase cursor-pointer flex items-center justify-center"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {quizStep === 1 ? (
                    <button
                      onClick={() => setQuizStep(2)}
                      className="cta-primary min-h-[48px] text-xs uppercase"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      onClick={startQuizMatch}
                      disabled={isQuizCalculating}
                      className="cta-primary min-h-[48px] text-xs uppercase flex items-center gap-2"
                    >
                      {isQuizCalculating ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full inline-block" />
                          Matching...
                        </>
                      ) : (
                        "Calculate Match"
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB CONTENT 3: CHECKOUT SANDBOX --- */}
      {activeTab === "checkout" && (
        <div className="fade-in">
          {checkoutSuccess ? (
            <div className="max-w-md mx-auto text-center p-8 bg-surface-container-lowest border-3 border-on-surface rounded-xl shadow-[6px_6px_0px_0px_var(--color-secondary)] space-y-6">
              <span className="sticker px-4 py-2 text-xs w-36 mx-auto bg-primary text-white rotate-[-3deg] uppercase">
                ORDER PLACED!
              </span>
              <h3 className="font-display-lg text-2xl text-on-surface uppercase tracking-tight">Thank You For Your Support!</h3>
              
              <div className="bg-surface-container p-4 rounded border-2 border-on-surface text-left text-xs font-body-md space-y-2">
                <p className="font-bold text-on-surface border-b-2 border-on-surface pb-2">Order ID: {submittedOrderId}</p>
                <p><span className="font-semibold">Customer:</span> {checkoutName}</p>
                <p><span className="font-semibold">Email:</span> {checkoutEmail}</p>
                <p><span className="font-semibold">Payment:</span> {checkoutPayment.toUpperCase()} (Mock)</p>
                <p className="pt-2 text-primary font-bold text-center">Your lead has been synced directly to GoHighLevel.</p>
              </div>

              <button
                onClick={() => {
                  setCheckoutSuccess(false);
                  setCheckoutName("");
                  setCheckoutEmail("");
                  setCheckoutPhone("");
                  setCheckoutAddress("");
                  handleTabChange("shop");
                }}
                className="cta-primary min-h-[48px] text-xs uppercase w-full"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Checkout Form */}
              <div className="card bg-surface-container-lowest">
                <h3 className="font-headline-md text-lg text-on-surface uppercase tracking-tight mb-6">Delivery & Contact Details</h3>
                
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Full Name</label>
                    <input
                      type="text"
                      value={checkoutName}
                      onChange={(e) => setCheckoutName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="form-input"
                    />
                    {checkoutErrors.name && <p className="font-label-bold text-xs text-error mt-0.5">{checkoutErrors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Email Address</label>
                    <input
                      type="email"
                      value={checkoutEmail}
                      onChange={(e) => setCheckoutEmail(e.target.value)}
                      placeholder="e.g. john@company.com"
                      className="form-input"
                    />
                    {checkoutErrors.email && <p className="font-label-bold text-xs text-error mt-0.5">{checkoutErrors.email}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Phone Number</label>
                    <input
                      type="tel"
                      value={checkoutPhone}
                      onChange={(e) => setCheckoutPhone(e.target.value)}
                      placeholder="e.g. +63 917 123 4567"
                      className="form-input"
                    />
                    {checkoutErrors.phone && <p className="font-label-bold text-xs text-error mt-0.5">{checkoutErrors.phone}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Shipping Address</label>
                    <textarea
                      value={checkoutAddress}
                      onChange={(e) => setCheckoutAddress(e.target.value)}
                      placeholder="House No, Street name, Barangay, City, Province, Postal Code"
                      rows={3}
                      className="form-input min-h-[90px]"
                    />
                    {checkoutErrors.address && <p className="font-label-bold text-xs text-error mt-0.5">{checkoutErrors.address}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Mock Payment Method</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["gcash", "paymaya", "cod"].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setCheckoutPayment(method)}
                          className={`py-3 border-2 border-on-surface rounded font-label-bold text-[10px] uppercase tracking-wide cursor-pointer transition-all min-h-[48px] flex items-center justify-center ${
                            checkoutPayment === method ? "bg-tertiary-fixed text-on-tertiary-fixed font-black border-on-surface" : "bg-surface hover:bg-surface-container"
                          }`}
                        >
                          {method === "gcash" && "📱 GCash"}
                          {method === "paymaya" && "💳 Maya"}
                          {method === "cod" && "💵 COD"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isCheckoutSubmitting || cart.length === 0}
                    className="w-full cta-primary min-h-[48px] uppercase tracking-wider text-xs flex items-center justify-center gap-2 mt-4"
                  >
                    {isCheckoutSubmitting ? "Placing Mock Order..." : `Place Mock Order (₱${(cartTotal + 100).toLocaleString()})`}
                  </button>
                </form>
              </div>

              {/* Cart Sticky Summary */}
              <div className="card bg-surface-container space-y-4 md:sticky md:top-28">
                <h3 className="font-headline-md text-lg text-on-surface uppercase tracking-tight">Order Summary</h3>
                
                {cart.length === 0 ? (
                  <div className="py-6 text-center text-xs text-on-surface-variant">
                    Your shopping bag is empty.
                  </div>
                ) : (
                  <div className="divide-y-2 divide-on-surface/10 space-y-3">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex justify-between items-center text-xs pt-3">
                        <div>
                          <p className="font-headline-md">{item.product.name}</p>
                          <p className="text-[10px] text-on-surface-variant font-medium">Qty: {item.quantity} x ₱{item.product.price}</p>
                        </div>
                        <span className="font-label-bold font-bold">₱{(item.product.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                    
                    <div className="pt-3 flex justify-between text-xs text-on-surface-variant font-medium">
                      <span>Items Subtotal:</span>
                      <span>₱{cartTotal.toLocaleString()}</span>
                    </div>

                    <div className="pt-3 flex justify-between text-xs text-on-surface-variant font-medium">
                      <span>Mock Shipping Fee:</span>
                      <span>₱100</span>
                    </div>

                    <div className="pt-3 flex justify-between font-headline-md text-sm text-on-surface border-t-2 border-on-surface">
                      <span className="uppercase">Grand Total:</span>
                      <span className="text-primary font-black">₱{(cartTotal + 100).toLocaleString()}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- TAB CONTENT 4: MERCHANT APPLICATION --- */}
      {activeTab === "apply" && (
        <div className="fade-in max-w-xl mx-auto">
          <div className="card bg-surface-container-lowest">
            <h3 className="font-headline-md text-lg text-on-surface uppercase tracking-tight mb-4 text-center">MSME Merchant Registration</h3>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed text-center mb-6">
              Apply to sell your products on our direct trade marketplace. Submitting this application will redirect you to scheduling your onboarding verification video call.
            </p>

            <form onSubmit={handleSellerSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Brand / Shop Name</label>
                <input
                  type="text"
                  value={sellerBrand}
                  onChange={(e) => setSellerBrand(e.target.value)}
                  placeholder="e.g. Lipa Coffee Growers Coop"
                  className="form-input"
                />
                {sellerErrors.brand && <p className="font-label-bold text-xs text-error mt-0.5">{sellerErrors.brand}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Founder / Contact Name</label>
                <input
                  type="text"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                  placeholder="e.g. Mang Cardo"
                  className="form-input"
                />
                {sellerErrors.name && <p className="font-label-bold text-xs text-error mt-0.5">{sellerErrors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Email Address</label>
                  <input
                    type="email"
                    value={sellerEmail}
                    onChange={(e) => setSellerEmail(e.target.value)}
                    placeholder="e.g. cardo@coop.org"
                    className="form-input"
                  />
                  {sellerErrors.email && <p className="font-label-bold text-xs text-error mt-0.5">{sellerErrors.email}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Phone Number</label>
                  <input
                    type="tel"
                    value={sellerPhone}
                    onChange={(e) => setSellerPhone(e.target.value)}
                    placeholder="e.g. 09170000000"
                    className="form-input"
                  />
                  {sellerErrors.phone && <p className="font-label-bold text-xs text-error mt-0.5">{sellerErrors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Primary Category</label>
                  <select
                    value={sellerCategory}
                    onChange={(e) => setSellerCategory(e.target.value)}
                    className="form-input bg-surface"
                  >
                    <option value="Artisan Crafts">Artisan Crafts</option>
                    <option value="Food Products">Food Products</option>
                    <option value="Fashion & Accessories">Fashion & Accessories</option>
                    <option value="Health & Beauty">Health & Beauty</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Regional Hub Origin</label>
                  <select
                    value={sellerRegion}
                    onChange={(e) => setSellerRegion(e.target.value)}
                    className="form-input bg-surface"
                  >
                    <option value="Luzon">Luzon (Ilocos, Benguet, Batangas)</option>
                    <option value="Visayas">Visayas (Romblon, Leyte)</option>
                    <option value="Mindanao">Mindanao (Davao, Basilan)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-bold text-xs uppercase text-on-surface-variant font-bold">Brand Story / Bio</label>
                <textarea
                  value={sellerBio}
                  onChange={(e) => setSellerBio(e.target.value)}
                  placeholder="Describe your craft, materials used, and how your business impacts your local community..."
                  rows={4}
                  className="form-input min-h-[100px]"
                />
              </div>

              <button
                type="submit"
                disabled={isSellerSubmitting}
                className="w-full cta-primary min-h-[48px] uppercase tracking-wider text-xs flex items-center justify-center gap-2 mt-4"
              >
                {isSellerSubmitting ? "Submitting Application..." : "Submit Brand & Book Call"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default function DemoClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center px-6 bg-surface noise-bg">
        <div className="w-full max-w-md bg-surface-container-lowest border-3 border-on-surface rounded-xl shadow-[4px_4px_0px_0px_var(--color-secondary)] p-8 flex flex-col items-center justify-center min-h-[250px]">
          <span className="w-8 h-8 border-3 border-primary border-t-transparent animate-spin rounded-full mb-3" />
          <span className="text-xs font-label-bold text-on-surface-variant uppercase tracking-wider">Loading Sandbox Portal...</span>
        </div>
      </div>
    }>
      <DemoContent />
    </Suspense>
  );
}
