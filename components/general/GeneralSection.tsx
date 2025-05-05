import React from "react";
import Image from "next/image";

type Props = {
  item: {
    image: string;
    title: string;
    heading: string;
    desc: string;
  };
  button?: boolean;
  welcome?: boolean;
  mainBg?: boolean;
};

const GeneralSection = ({ ...props }: Props) => {
  return (
    <div className="bg-right-bottom bg-no-repeat">
      <div className="bg-[left_3rem_top] bg-no-repeat">
        <div className="container grid grid-cols-1 items-center gap-5 bg-left-top bg-no-repeat md:grid-cols-2">
          <div className="h-full w-full">
            <Image
              width={560}
              height={700}
              src={props.item.image}
              alt={props.item.title}
              className="max-w-full animated wow fadeInLeft mx-auto h-[700px] max-h-full w-[560px] rounded-b-[300px] rounded-t-[300px] object-cover"
              data-wow-duration="1.3s"
              data-wow-delay="0s"
            />
          </div>
          <div className="max-w-[600px] space-y-5 bg-right-bottom bg-no-repeat">
            {/* <!-- <div
          class="animated wow fadeInRight flex items-center gap-4 uppercase text-primary"
          v-if="welcome"
          data-wow-duration="1.3s"
          data-wow-delay="0s"
        >
          {{ $t("TITLES.welcome") }}
          <hr class="hidden w-[50%] border-primary md:flex" />
        </div> --> */}
            <h3
              className="animated wow fadeInRight text-[48px] font-extrabold"
              data-wow-duration="1.3s"
              data-wow-delay="0s"
              dangerouslySetInnerHTML={{
                __html: props.item.title || props.item.heading,
              }}
            ></h3>
            <div
              className="animated wow fadeInRight font-thin text-third"
              data-wow-duration="1.3s"
              data-wow-delay="0s"
              dangerouslySetInnerHTML={{
                __html: props.item.desc || props.item.desc,
              }}
            ></div>
            {/* <!-- <nuxt-link
          :to="localePath('/')"
          className="base-btn animated wow fadeInUp w-fit"
          data-wow-duration="1.3s"
          data-wow-delay="0s"
          v-if="button"
        >
          {{ $t("BUTTONS.discover more") }}
        </nuxt-link> --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
