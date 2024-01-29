"use client"
import Bounded from "@/components/Bounded";
import { Content , ImageField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Heading from '@/components/Heading'
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PrismicImage } from "@prismicio/react";


/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

type ExperienceType = {
  time_period: string | null;
  iconBg: string | null;
  title: string | null;
  institution: string | null;
  description: string | null;
  logo: ImageField | null;
};

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => (

    <VerticalTimelineElement
      contentStyle={{
        background: "#64748B",
        color: "#fff",
      }}
      visible={true}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.time_period ?? ''}
      // iconStyle={{ background: experience.iconBg ?? '' }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
         <PrismicImage
            field={experience.logo}
            // alt={experience.title}
            className='rounded-[50%]'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title ?? ''}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.institution ?? ''}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        <div
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {experience.description ?? ''}
        </div>
      </ul>
    </VerticalTimelineElement>

);

const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2" size="lg">
        {slice.primary.heading ?? ''}
      </Heading>
     <div className="mt-8"> <Heading as="h3" size="sm">
            <span className="text-slate-500">My Work Experience</span>
          </Heading>
</div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline >
          {slice.items.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience as ExperienceType}
            />
          ))}
        </VerticalTimeline>
      </div>
    </Bounded>
  );
};

export default Experience;