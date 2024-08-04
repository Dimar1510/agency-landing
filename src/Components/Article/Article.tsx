import article from "src/assets/images/article.png";
import tesla from "src/assets/images/tesla.png";
import ClientLogos from "../ClientLogos/ClientLogos";

const Article = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={article} alt="article img" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
            Basics of web security
          </h2>
          <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus.
          </p>
          <button className="btn-primary">Learn more</button>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center md:items-start">
          <img
            src={tesla}
            alt=""
            className="flex-1 object-cover max-w-[300px]"
          />

          <div className="flex-2">
            <div className="flex flex-col">
              <p className="md:w-4/5 text-sm text-neutralGrey leading-7 mb-8">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                John Doe
              </h5>
              <p className="text-sm text-neutralGrey mb-8">
                British Dragon Racing Association
              </p>
              <div className="flex gap-4 items-center flex-wrap">
                <ClientLogos number={7} />
                <p className="cursor-pointer font-bold text-brandPrimary hover:text-neutral-700">
                  Meet all customers &#8594;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
