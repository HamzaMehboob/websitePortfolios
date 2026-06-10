import Link from "next/link";

export const metadata = {
  title: "Order confirmed",
};

export default function ConfirmationPage() {
  return (
    <div className="mx-auto max-w-lg text-center">
      <h1 className="font-serif text-3xl">Thank you for your order</h1>
      <p className="mt-4 text-stone-600">Your order is confirmed (demo). A receipt would be sent to your email.</p>
      <Link href="/shop" className="mt-8 inline-block bg-stone-900 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-stone-800">
        Continue shopping
      </Link>
    </div>
  );
}
