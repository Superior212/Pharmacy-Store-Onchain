import * as React from "react";

function Transparency(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 82 83" fill="none" {...props}>
      <rect y={0.333} width={82} height={82} rx={15} fill="#1364FF" />
      <path
        d="M49.5 38.653l-3.5-2.8v-2.52h1a1 1 0 001-1v-5a1 1 0 00-1-1H35a1 1 0 00-1 1v5a1 1 0 001 1h1v2.52l-3.5 2.8a4 4 0 00-1.5 3.12v11.56a3 3 0 003 3h14a3 3 0 003-3v-11.56a4 4 0 00-1.5-3.12zM36 28.333h2v1.5h2v-1.5h2v1.5h2v-1.5h2v3H36v-3zm8 5v2h-6v-2h6zm-10.25 6.88l3.6-2.88h7.3l3.6 2.88a1.999 1.999 0 01.75 1.56v1.56H33v-1.56a2 2 0 01.75-1.56zM49 45.333v5H33v-5h16zm-1 9H34a1 1 0 01-1-1v-1h16v1a1 1 0 01-1 1z"
        fill="#fff"
      />
      <path d="M47 46.833H35v2h12v-2z" fill="#fff" />
    </svg>
  );
}

const MemoTransparency = React.memo(Transparency);
export default MemoTransparency;
