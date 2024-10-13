

import * as React from "react";

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="32" height="32" rx="16" fill="#98BAFC"/>
    <path d="M10 15.5358L13.5358 19.0717L20.6058 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    
  );
}

const MemoCheck= React.memo(Check);
export default MemoCheck;



