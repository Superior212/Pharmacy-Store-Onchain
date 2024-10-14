

import * as React from "react";

function Triangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="16" cy="16" r="16" fill="#1364FF" fillOpacity="0.42"/>
    <path d="M15.0124 9.71059C15.4513 8.95033 16.5487 8.95033 16.9876 9.71059L21.9406 18.2894C22.3795 19.0497 21.8309 20 20.953 20H11.047C10.1691 20 9.62047 19.0497 10.0594 18.2894L15.0124 9.71059Z" fill="#F9F9F9"/>
    </svg>
    
    
    
  );
}

const MemoTriangle= React.memo(Triangle);
export default MemoTriangle;



