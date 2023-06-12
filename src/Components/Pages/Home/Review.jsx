import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Fade, Flip, JackInTheBox } from "react-awesome-reveal";

const Review = () => {
  return (
    <div className="bg_secondary p-12 py-24">
      <h1 className="text-center font-bold text-black bg-white mb-12  text-2xl lg:text-5xl">
        Review
      </h1>
      <div className="bg-white p-12 rounded">
        <div className="flex flex-col gap-10">
          <Fade>
            <div>
              <Rating style={{ maxWidth: 240 }} value={4.5} readOnly />
              <h3 className="text-2xl font-semibold">Sarah Sebastian</h3>
              <p>
                I recently enrolled in online music classes on this website, and
                I couldn't be happier with my experience. The platform offers a
                wide range of musical classes, catering to beginners as well as
                more advanced learners. The instructors are highly skilled and
                passionate about teaching music, which is evident in their
                engaging and informative lessons.
              </p>
            </div>
          </Fade>
          <Flip>
            <div>
              <Rating style={{ maxWidth: 240 }} value={4} readOnly />
              <h3 className="text-2xl font-semibold">John kennedey</h3>
              <p>
                I have been using this website for online music classes, and I
                must say it has been a convenient and flexible learning
                experience. The platform offers a wide variety of musical
                classes, allowing you to explore different instruments and
                genres at your own pace.
              </p>
            </div>
          </Flip>
          <JackInTheBox>
            <div>
              <Rating style={{ maxWidth: 240 }} value={5} readOnly />
              <h3 className="text-2xl font-semibold">Micheal Philips</h3>
              <p>
                Enrolling in music classes on this website has been a truly
                inspiring journey for me. From the moment I signed up, I felt
                welcomed and supported by the passionate community of
                instructors and fellow students.
              </p>
            </div>
          </JackInTheBox>
        </div>
      </div>
    </div>
  );
};

export default Review;
