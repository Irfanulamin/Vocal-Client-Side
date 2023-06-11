import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Service = () => {
  return (
    <div className="bg_secondary p-12 py-24">
      <h1 className="text-center text-black bg-white mb-12  text-2xl lg:text-5xl">
        Testimonial
      </h1>
      <div className="bg-white p-12 rounded">
        <div className="flex flex-col gap-10">
          <div>
            <div>
              <Rating style={{ maxWidth: 240 }} value={4.5} readOnly />
              <h3 className=" text-2xl font-bold my-3">Sarah Sebastian</h3>
              <p>
                I am amazed by the quality and attention to detail of the
                stuffed toys I purchased from this website. <br /> They are
                incredibly soft and well-made. My kids absolutely adore them!
              </p>
            </div>
          </div>
          <div>
            <div className="bg_secondary p-3 rounded ">
              <Rating style={{ maxWidth: 240 }} value={4} readOnly />
              <h3 className=" text-2xl font-bold my-3">John kennedey</h3>
              <p>
                I have been searching for the perfect stuffed toy for my niece,
                and I finally found it on this website. <br /> The toy arrived
                promptly, and the quality is outstanding. My niece couldn\'t be
                happier. Thank you!
              </p>
            </div>
          </div>
          <div>
            <div className="p-3 rounded ">
              <Rating style={{ maxWidth: 240 }} value={5} readOnly />
              <h3 className=" text-2xl font-bold my-3">Micheal Philips</h3>
              <p>
                The stuffed toys I received exceeded my expectations. They are
                not only cute but also very durable. <br /> I appreciate the
                wide variety of options available on the website. Highly
                recommended!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
