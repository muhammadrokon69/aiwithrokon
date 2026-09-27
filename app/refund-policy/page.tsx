export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-cyan-400 hover:text-cyan-300 transition">
          ← Back to Home
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Refund & Replacement Policy
        </h1>

        <p className="mt-3 text-gray-400">Last Updated: September 2026</p>

        <div className="mt-10 space-y-8 text-gray-300 leading-7">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. Before Payment</h2>
            <p className="mt-3">
              Customers are encouraged to ask any questions and confirm the
              product, duration, price, and delivery process before making
              payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">2. Refund Requests</h2>
            <p className="mt-3">
              Refund requests are reviewed on a case-by-case basis. Customers
              should contact us as soon as possible if there is a problem with
              an order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">3. Replacement</h2>
            <p className="mt-3">
              If an access-related problem occurs after delivery and the issue
              is verified, we may provide a replacement or another appropriate
              resolution depending on the circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">4. Ineligible Claims</h2>
            <p className="mt-3">
              Refund or replacement may not be available when a problem results
              from misuse, violation of a third-party service's terms,
              customer-provided incorrect information, or other circumstances
              outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">5. Third-Party Service Changes</h2>
            <p className="mt-3">
              Changes made by third-party providers, including changes to
              features, policies, eligibility, or service availability, may
              affect access and will be handled according to the circumstances
              of the specific order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">6. How to Request Support</h2>
            <p className="mt-3">
              To request support, contact us through WhatsApp with your order
              details and a clear description of the issue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">7. Final Review</h2>
            <p className="mt-3">
              Each refund or replacement request will be reviewed based on the
              order details and the nature of the issue.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
