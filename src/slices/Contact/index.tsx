"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Contacts from "@/components/Contacts"
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className="">
        <Heading size="xl" className="col-start-1">
          {slice.primary.title}
        </Heading>
        <div className="">
        <Contacts />
        </div>
   
        </div>
    </Bounded>
  );
};

export default Contact;
