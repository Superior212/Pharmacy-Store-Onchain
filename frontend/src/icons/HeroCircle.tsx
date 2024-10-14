import * as React from "react";

function HeroCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 478 343" fill="none" {...props}>
      <circle cx={306.5} cy={171.5} r={171.5} fill="#BBDEFB" />
      <ellipse
        cx={149}
        cy={171.5}
        rx={148}
        ry={147.5}
        stroke="#fff"
        strokeWidth={0.759}
      />
    </svg>
  );
}

const MemoHeroCircle = React.memo(HeroCircle);
export default MemoHeroCircle;
