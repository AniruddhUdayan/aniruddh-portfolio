// import { Content } from "@prismicio/client";
"use client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Content, KeyTextField, asLink } from "@prismicio/client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Avatar from "@/components/Avatar";


export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;


const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  
  const pathname = usePathname();
  const { website_link, github_link } = slice.primary;

  const hasWebsiteLink = website_link.link_type === 'Web' && website_link;
  const hasGithubLink = github_link.link_type === 'Web' && github_link;



  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-16 sm:gap-2">
        {" "}
        <div className="flex flex-col">
          <PrismicRichText field={slice.primary.text} />{" "}
          <div className="flex flex-row gap-4 mt-[20px]">
            
            {hasGithubLink && (
              <PrismicNextLink
                className={clsx(
                  "group relative block overflow-hidden rounded px-3 sm:text-3xl font-bold text-slate-300 hover:text-slate-900"
                )}
                field={slice.primary.github_link}
                // onClick={() => setOpen(false)}
                aria-current={
                  pathname.includes(asLink(slice.primary.github_link) as string)
                    ? "page"
                    : undefined
                }
              >
                <span
                  className={clsx(
                    "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                    pathname.includes(
                      asLink(slice.primary.github_link) as string
                    )
                      ? "translate-y-6"
                      : "translate-y-18"
                  )}
                />
                <span className="relative">Github Link</span>
              </PrismicNextLink>
            )}
          </div>
        </div>
        {hasWebsiteLink && (
              <PrismicNextLink
               
                field={slice.primary.website_link}
                // onClick={() => setOpen(false)}
                aria-current={
                  pathname.includes(
                    asLink(slice.primary.website_link) as string
                  )
                    ? "page"
                    : undefined
                }
              >
               <Avatar
          image={slice.primary.project_image}
          className="row-start-1 max-w-sm md:min-w-[400px] md:col-start-2 md:row-end-3"
        />
              </PrismicNextLink>
            )}
        
      </div>
    </div>
  );
};

export default TextBlock;
