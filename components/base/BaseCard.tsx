import React from "react";

const BaseCard = ({
  title,
  children,
  className = "",
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`shadow-card-shadow rounded-xl p-4 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        {title && (
          <h3
            className="animated wow zoomIn mb-3 text-5xl font-semibold text-text"
            data-wow-duration="1.3s"
            data-wow-delay="0s"
          >
            {title}
          </h3>
        )}
        {/* <slot name="topTitle"></slot> */}
      </div>
      {/* <slot name="title" /> */}
      {children}
    </div>
  );
};

export default BaseCard;

{
  /* <template>

</template>

<script setup>
defineProps({
  title: {
    required: false,
  },
});
</script>

 */
}
