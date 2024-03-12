import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2" size="lg">
        {slice.primary.heading}
      </Heading>
      <div className="mt-8">
        {" "}
        <Heading as="h3" size="sm">
          <span className="text-slate-500">What Others Say About My Work</span>
        </Heading>
      </div>
      {slice.items.map((testimonial, index) => (
        <div
          key={index}
          className="prose prose-xl prose-slate prose-invert col-start-1 mt-[30px]"
        >
          <div>
            <div className="text-[80px] leading-[50px] relative top-[15px]">{`❝`}</div>
            <div className="ml-6">
              <PrismicRichText field={testimonial.description} />
              <div>
                <Heading size="sm">
                  <span className="text-slate-500">
                    @{testimonial.designation}
                  </span>
                </Heading>
                <div className="text-slate-500 relative bottom-[30px]">
                  {testimonial.company_name}
                </div>
                <div className="text-slate-500">
                  <PrismicNextLink
                  field={testimonial.link}
                    type="submit"
                    className="bg-tertiary py-2 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary border-[2px] hover:border-yellow-300 hover:text-yellow-300 no-underline"
                  >
                  {testimonial.link_name}
                  </PrismicNextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default Testimonials;
