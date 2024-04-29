import Link from "next/link";

interface DocumentSection {
  data: {
    header: string;
    document: Download[];
  };
}

interface Download {
  description: string;
}

function Download({ description, }: Download) {
  return (
    <div className="flex flex-row items-center p-4">
      <h3 className="my-3">{description}</h3>
      <div className="w-8" ></div>
      <h3 className="my-3"> Download </h3>
    </div>
  );
}

export default function Downloads({ data }: DocumentSection) {
  return (
    <section className="dark:bg-black dark:text-gray-100 m:py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-2 text-center">
        <h2 className="text-5xl font-bold">{data.header}</h2>
      </div>
      <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.document.map((download: Download, index: number) => (
          <Download key={index} {...download} />
        ))}
      </div>
    </section>
  );
}
