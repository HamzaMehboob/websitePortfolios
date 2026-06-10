"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

type Step = 1 | 2 | 3;

interface FormErrors {
  [key: string]: string;
}

export function CheckoutForm() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const orderTotal = useCartStore((s) => s.total());
  const clearCart = useCartStore((s) => s.clearCart);
  const [step, setStep] = useState<Step>(1);
  const [errors, setErrors] = useState<FormErrors>({});
  const firstErrorRef = useRef<HTMLInputElement | null>(null);

  const steps = ["Shipping", "Payment", "Review"];

  function validateStep(current: Step): FormErrors {
    const form = document.getElementById("checkout-form") as HTMLFormElement;
    const data = new FormData(form);
    const e: FormErrors = {};

    if (current >= 1) {
      if (!String(data.get("name")).trim()) e.name = "Full name is required";
      if (!String(data.get("email")).trim()) e.email = "Email is required for your receipt";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email")))) e.email = "Enter a valid email address";
      if (!String(data.get("address")).trim()) e.address = "Street address is required";
      if (!String(data.get("city")).trim()) e.city = "City is required";
    }
    if (current >= 2) {
      if (!String(data.get("card")).trim()) e.card = "Card number is required";
      else if (String(data.get("card")).replace(/\s/g, "").length < 15) e.card = "Enter a valid card number";
      if (!String(data.get("expiry")).trim()) e.expiry = "Expiry date is required";
      if (!String(data.get("cvc")).trim()) e.cvc = "Security code is required";
    }
    return e;
  }

  function handleNext(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validateStep(step);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      firstErrorRef.current?.focus();
      return;
    }
    if (step < 3) setStep((s) => (s + 1) as Step);
    else {
      clearCart();
      router.push("/checkout/confirmation");
    }
  }

  if (items.length === 0 && step === 1) {
    return <p className="text-stone-600">Your cart is empty. Add items before checkout.</p>;
  }

  return (
    <div>
      <div className="mb-8 flex gap-2" aria-label="Checkout progress">
        {steps.map((label, i) => {
          const n = (i + 1) as Step;
          return (
            <div
              key={label}
              className={`flex-1 border-b-2 py-2 text-center text-sm ${step >= n ? "border-stone-900 font-medium" : "border-stone-200 text-stone-400"}`}
            >
              {label}
            </div>
          );
        })}
      </div>

      {Object.keys(errors).length > 0 && (
        <div className="mb-6 rounded border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
          Please fix the highlighted fields below.
        </div>
      )}

      <form id="checkout-form" onSubmit={handleNext} className="space-y-6" noValidate>
        {step === 1 && (
          <fieldset className="space-y-4">
            <legend className="font-serif text-xl">Guest shipping</legend>
            <p className="text-sm text-stone-500">No account required — checkout as guest.</p>
            {["name", "email", "address", "city"].map((field, idx) => (
              <div key={field}>
                <label htmlFor={field} className="text-sm font-medium capitalize">
                  {field === "name" ? "Full name" : field}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  ref={idx === 0 ? firstErrorRef : undefined}
                  aria-invalid={!!errors[field]}
                  aria-describedby={errors[field] ? `${field}-error` : undefined}
                  className="mt-1 w-full border border-stone-300 px-3 py-2"
                />
                {errors[field] && (
                  <p id={`${field}-error`} className="mt-1 text-sm text-red-600">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="space-y-4">
            <legend className="font-serif text-xl">Payment</legend>
            <div className="flex gap-4 text-xs text-stone-500" aria-hidden="true">
              <span className="rounded border px-2 py-1">🔒 SSL Secure</span>
              <span className="rounded border px-2 py-1">Money-back guarantee</span>
              <span className="rounded border px-2 py-1">Free returns 30d</span>
            </div>
            {["card", "expiry", "cvc"].map((field, idx) => (
              <div key={field}>
                <label htmlFor={field} className="text-sm font-medium capitalize">
                  {field === "card" ? "Card number" : field === "cvc" ? "CVC" : "Expiry"}
                </label>
                <input
                  id={field}
                  name={field}
                  ref={idx === 0 ? firstErrorRef : undefined}
                  aria-invalid={!!errors[field]}
                  className="mt-1 w-full border border-stone-300 px-3 py-2"
                  placeholder={field === "card" ? "4242 4242 4242 4242" : undefined}
                />
                {errors[field] && <p className="mt-1 text-sm text-red-600">{errors[field]}</p>}
              </div>
            ))}
          </fieldset>
        )}

        {step === 3 && (
          <div>
            <h2 className="font-serif text-xl">Review order</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {items.map((item) => (
                <li key={`${item.productId}-${item.size}`} className="flex justify-between">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-lg font-medium">Total: {formatPrice(orderTotal)}</p>
          </div>
        )}

        <div className="flex gap-3">
          {step > 1 && (
            <button type="button" onClick={() => setStep((s) => (s - 1) as Step)} className="border border-stone-300 px-6 py-3 text-sm">
              Back
            </button>
          )}
          <button type="submit" className="flex-1 bg-stone-900 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-stone-800">
            {step === 3 ? "Place order" : "Continue"}
          </button>
        </div>
      </form>
    </div>
  );
}
