import { Card } from "flowbite-react";

const Services = () => {
  const services = [
    {
      icon: "groups",
      title: "Membership Organizations",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, fugit asperiores delectus voluptatibus exercitationem eveniet.",
    },
    {
      icon: "apartment",
      title: "National Associations",
      desc: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, fugit asperiores delectus voluptatibus exercitationem eveniet.",
    },
    {
      icon: "partner_exchange",
      title: "Clubs And Groups",
      desc: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, fugit asperiores delectus voluptatibus exercitationem eveniet.",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with Fortune 500+ clients
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center  gap-8">
          {Array(7)
            .fill(null)
            .map((n, i) => (
              <img
                key={i}
                src={`/src/assets/images/clients/${i + 1}.png`}
                alt="company logo"
              />
            ))}
        </div>
      </div>
      <div className="mt-20 md:max-w-lg mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <Card
            key={service.title}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow  hover:-translate-y-3 hover:border-indigo-700 transition-all duration-300"
          >
            <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex justify-center items-center">
              <span className="material-symbols-sharp text-4xl">
                {service.icon}
              </span>
            </div>
            <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
              {service.title}
            </h4>
            <p className="text-sm text-neutralGrey">{service.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
