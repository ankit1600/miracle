import React from "react";
// import Image from "next/image";
// import Image from "../../public/img/miracle1.png";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Biodegradable Trash Bags",
      description: (
        <p>
          uae eius ratione, adipisci voluptas suscipit reprehenderit saepe
          dolorem doloribus. Dignissimos quae expedita quas facere accusamus
          eius eveniet doloremque atque omnis corporis, fugiat maiores eos
          ratione veniam adipisci itaque voluptatum odit assumenda quos.
          Tenetur, cumque nostrum deserunt veniam sequi corporis optio molestias
          sint error? Nemo, maiores. Accusantium id reprehenderit fugiat porro!
          Non quos vitae, reprehenderit libero beatae architecto itaque..
        </p>
      ),
      image: "/img/miracle1.png",
    },
    {
      id: 2,
      name: "Drawstring Garbage Bags",
      description: (
        <p>
          uae eius ratione, adipisci voluptas suscipit reprehenderit saepe
          dolorem doloribus. Dignissimos quae expedita quas facere accusamus
          eius eveniet doloremque atque omnis corporis, fugiat maiores eos
          ratione veniam adipisci itaque voluptatum odit assumenda quos.
          Tenetur, cumque nostrum deserunt veniam sequi corporis optio molestias
          sint error? Nemo, maiores. Accusantium id reprehenderit fugiat porro!
          Non quos vitae, reprehenderit libero beatae architecto itaque..
        </p>
      ),
      image: "/img/miracle2.png",
    },
    {
      id: 3,
      name: "Heavy-Duty Contractor Bags",
      description: (
        <p>
          uae eius ratione, adipisci voluptas suscipit reprehenderit saepe
          dolorem doloribus. Dignissimos quae expedita quas facere accusamus
          eius eveniet doloremque atque omnis corporis, fugiat maiores eos
          ratione veniam adipisci itaque voluptatum odit assumenda quos.
          Tenetur, cumque nostrum deserunt veniam sequi corporis optio molestias
          sint error? Nemo, maiores. Accusantium id reprehenderit fugiat porro!
          Non quos vitae, reprehenderit libero beatae architecto itaque..
        </p>
      ),
      image: "/img/miracle3.png",
    },
  ];

  return (
    <div className="m-4 p-4  bg-slate-100">
      <div className="flex flex-col px-6 md:px-14 gap-10 md:gap-40">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col gap-10`}
          >
            <div className="flex md:basis-1/2 flex-col gap-3 mt-10 md:mt-0 items-start">
              <div className="flex flex-col align-left my-2">
                <p className="text-base text-purple-700">Product</p>
                <p className="text-4xl font-medium text-purple-800">
                  {product.name}
                </p>
              </div>
              <p className="text-purple-900/95 bg-purple-100/60 w-11/12 rounded-lg p-4 text-sm">
                {product.description}
              </p>
            </div>
            <div className="flex md:basis-1/2 md:h-[22rem] mr-5 md:mr-0 overflow-hidden duration-700 rounded-lg shadow-xl hover:shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
