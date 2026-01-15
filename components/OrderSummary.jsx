import Link from "next/link";
import { Button } from "@/components/ui/button";

export function OrderSummary({
  subtotal,
  shipping = 0,
  tax = 0,
  discount = 0,
  itemCount,
}) {
  const total = subtotal + shipping + tax - discount;

  return (
    <div className="bg-secondary rounded-lg p-6 space-y-4 sticky top-24">
      <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

      <div className="space-y-3 border-b border-border pb-4">
        <div className="flex justify-between text-foreground/70">
          <span>Subtotal ({itemCount} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {shipping > 0 && (
          <div className="flex justify-between text-foreground/70">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
        )}
        {tax > 0 && (
          <div className="flex justify-between text-foreground/70">
            <span>Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        )}
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Link href="/checkout">
        <Button className="mb-3 w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-base font-semibold">
          Proceed to Checkout
        </Button>
      </Link>

      <Link href="/products">
        <Button
          variant="outline"
          className="w-full border-foreground text-foreground hover:bg-foreground/10 bg-transparent py-3 text-base font-semibold"
        >
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
