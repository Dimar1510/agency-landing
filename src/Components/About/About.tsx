import about from "src/assets/images/about.png";

const StatCard = ({
  icon,
  number,
  title,
}: {
  icon: string;
  number: number;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <span className="material-symbols-sharp text-brandPrimary text-4xl">
        {icon}
      </span>
      <div>
        <h4 className="text-2xl text-neutralDGrey font-semibold">
          {number.toLocaleString()}
        </h4>
        <p>{title}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={about} alt="about img" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis.
            </p>
            <button className="btn-primary">Learn more</button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Helping a local
              <div className="text-brandPrimary">business reinvent itself</div>
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Hard work and dedication
            </p>
          </div>

          <div className="flex-1 flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <StatCard title="Members" number={224534} icon="group" />
              <StatCard title="Clubs" number={4121} icon="partner_exchange" />
            </div>
            <div className="space-y-8">
              <StatCard
                title="Event Bookings"
                number={56221}
                icon="event_available"
              />
              <StatCard title="Payments" number={1214129} icon="credit_card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
