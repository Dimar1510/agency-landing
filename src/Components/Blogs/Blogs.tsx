import blog1 from "src/assets/images/blog1.png";
import blog2 from "src/assets/images/blog2.png";
import blog3 from "src/assets/images/blog3.png";

const Blogs = () => {
  const blogs = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: blog1,
    },
    {
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: blog2,
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image: blog3,
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Caring is new marketing
        </h2>
        <p className="md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.title} className="mx-auto relative mb-12">
            <img
              src={blog.image}
              alt="blog"
              className="w-[400px] object-cover hover:scale-95 transition-transform duration-300 cursor-pointer"
            />
            <div className="text-center p-4 bg-white shadow-lg rounded-md md:w-3/4 mx-auto sm:absolute left-0 right-0 -bottom-12">
              <h3>{blog.title}</h3>
              <a className="cursor-pointer font-bold text-brandPrimary hover:text-neutral-700">
                Read more &#8594;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
