import Link from "next/link";

interface FaqProps {
  data: {
    heading: string;
    description: string;
    faq: Faq[];
  };
}

interface Faq {
  id: string;
  question: string;
  answer: string;
}

function Faq({ question, answer }: Faq) {
  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="my-3 text-3xl font-semibold">{question}</h3>
      <div className="space-y-1 leading-tight my-6">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function Faqs({ data }: FaqProps) {
  return (
    <section className="dark:bg-black dark:text-gray-100 m:py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-2 text-center">
        <h2 className="text-5xl font-bold">{data.heading}</h2>
        <p className="dark:text-gray-400">{data.description}</p>
      </div>
      <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.faq.map((faq: Faq, index: number) => (
          <Faq key={index} {...faq} />
        ))}
      </div>
    </section>
  );
}
