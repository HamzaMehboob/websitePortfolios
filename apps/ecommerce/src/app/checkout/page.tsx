import { CheckoutForm } from "@/components/CheckoutForm";

export const metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-lg">
      <h1 className="font-serif text-3xl">Checkout</h1>
      <p className="mt-2 text-sm text-stone-600">Guest checkout — no account needed.</p>
      <div className="mt-8">
        <CheckoutForm />
      </div>
    </div>
  );
}
