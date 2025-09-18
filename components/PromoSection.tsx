import { Container } from "lucide-react";

const PromoSection = () => {
  const promos = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "On all orders over $50",
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: "🔒",
      title: "Secure Checkout",
      description: "100% protected payments",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Dedicated customer service",
    },
  ];

  return (
    <section className="bg-muted py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {promos.map((promo, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <span className="mb-2 text-3xl">{promo.icon}</span>
              <h3 className="mb-1 font-medium">{promo.title}</h3>
              <p className="text-sm text-muted-foreground">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
