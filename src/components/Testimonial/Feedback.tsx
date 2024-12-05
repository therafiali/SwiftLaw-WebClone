import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Feedback = () => {
  return (
    <div>
      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center space-y-4 pb-6 mx-auto">
          <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
            Testimonial
          </h2>
          <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
            What our users are saying
          </h3>
        </div>
        <div className="relative">
          <div className="max-w-2xl mx-auto relative">
            <div className="overflow-hidden">
              <div
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                }}
                className="flex -ml-4"
              >
                <div className="min-w-0 shrink-0 grow-0 basis-full pl-4">
                  <div className="p-2 pb-5">
                    <div className="text-center">
                      {/* <TestimonialSVG /> */}
                      <div
                        style={{
                          opacity: 1,
                          filter: "blur(0px)",
                          willChange: "auto",
                          transform: "translateY(-6px)",
                        }}
                        className="my-8"
                      >
                        <blockquote className="h3 relative text-xl">
                          <span className="md:absolute -left-2 md:top-0 md:block ">
                            “
                          </span>
                          We want to free the lawyer from mundane, routine
                          tasks, so that they can focus on what matters —
                          strategy, advice, and judgment. This has become the
                          mantra for my team.{/* */}“
                        </blockquote>
                        <div className="flex flex-1 flex-col items-center justify-center gap-sm md:items-start"></div>
                      </div>
                      <div className="mt-8 max-w-md mx-auto">
                        <figcaption>
                          <div className="universal-text-2 font-semibold flex items-center justify-center space-x-4 my-4">
                            <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p>David Wakeling</p>
                          </div>
                          <div className="universal-text-2 font-normal text-gray-900">
                            Global Head of Markets Innovation Group (MIG) and AI
                            Advisory Practice, A&amp;O Shearman
                          </div>
                        </figcaption>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
