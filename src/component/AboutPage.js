import React from "react";
import { TfiHandPointRight } from "react-icons/tfi";
const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 ">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8">
        About Us
      </h1>

      {/* About Paragraph */}
      <p className="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
        justo vel quam tincidunt pharetra a a neque. Sed at ligula in orci
        aliquam pharetra Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque error rerum fugiat recusandae, necessitatibus magni ducimus
        officiis quo culpa deleniti doloribus ipsum? Eos fugiat est repellendus
        quo minima, debitis expedita perferendis labore? Dolorum omnis eius
        atque quis dolor repellendus sapiente maxime laudantium! Aperiam,
        consequatur quasi nam vel enim maiores obcaecati quis quae, asperiores
        ab accusantium saepe blanditiis reprehenderit modi, vero a distinctio
        laboriosam praesentium quos expedita necessitatibus cum soluta.
        Provident voluptates nostrum dolorem, fugit, expedita, neque aliquam
        doloribus delectus alias corrupti eos officiis reiciendis perferendis
        nam dicta? Corrupti nisi dolorem error nulla aut minima inventore
        nesciunt. Officia quisquam facilis earum doloremque quidem laudantium id
        est quia, iure perspiciatis molestiae sunt ex quis! Temporibus
        laudantium cupiditate ullam consectetur, quae eius quisquam odit
        corrupti eum, illum facilis vitae voluptates aliquid numquam, velit
        officia quam tenetur ducimus nihil soluta qui laboriosam. Veritatis
        error labore molestias placeat vitae natus, omnis perferendis fugit
        velit est totam at quas aliquam et sit repellendus nobis facilis
        molestiae voluptates sequi soluta commodi inventore. Voluptatibus
        voluptas quis natus? Accusantium, voluptas? Suscipit, id deserunt.
        Numquam, quisquam cumque. Veritatis beatae explicabo vitae veniam?
        Impedit sunt facere doloremque perspiciatis commodi molestias rerum unde
        quae eius ratione, adipisci voluptas suscipit reprehenderit saepe
        dolorem doloribus. Dignissimos quae expedita quas facere accusamus eius
        eveniet doloremque atque omnis corporis, fugiat maiores eos ratione
        veniam adipisci itaque voluptatum odit assumenda quos. Tenetur, cumque
        nostrum deserunt veniam sequi corporis optio molestias sint error? Nemo,
        maiores. Accusantium id reprehenderit fugiat porro! Non quos vitae,
        reprehenderit libero beatae architecto itaque..
      </p>

      {/* Mission, Vision, Values Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission Section */}
        <div className="bg-white p-6 rounded-md shadow-lg hover:shadow-2xl transition duration-300 hover:bg-[#128F8B]">
          <h2 className="text-xl font-semibold mb-4">Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod lobortis ullamcorper.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white p-6 rounded-md shadow-lg hover:shadow-2xl transition duration-300 hover:bg-[#128F8B]">
          <h2 className="text-xl font-semibold mb-4">Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod lobortis ullamcorper.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white p-6 rounded-md shadow-lg hover:shadow-2xl transition duration-300 hover:bg-[#128F8B]">
          <h2 className="text-xl font-semibold mb-4">Values</h2>
          <ul>
            <li className="mb-2 flex">
              <TfiHandPointRight size={25} />
              Lorem ipsum dolor sit amet
            </li>
            <li className="mb-2 flex">
              <TfiHandPointRight size={25} /> Consectetur adipiscing elit
            </li>
            <li className="mb-2 flex">
              <TfiHandPointRight size={25} /> Nullam euismod lobortis
              ullamcorper
            </li>
            <li className="mb-2 flex">
              <TfiHandPointRight size={25} /> Sed at ligula in orci aliquam
              pharetra
            </li>
            <li className="mb-2 flex">
              <TfiHandPointRight size={25} /> Quisque quis justo vel quam
              tincidunt
            </li>
            <li className="mb-2 flex">
              <TfiHandPointRight size={25} /> A a neque
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
