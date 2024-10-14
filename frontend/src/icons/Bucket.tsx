

import * as React from "react";

function Bucket(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1.5em" height="1.5em"  viewBox="0 0 24 24" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M6.625 7.4375L7.31304 17.758C7.38308 18.8086 8.25568 19.625 9.30861 19.625H13.6914C14.7443 19.625 15.6169 18.8086 15.687 17.758L16.375 7.4375M6.625 7.4375H9.0625M6.625 7.4375H5M16.375 7.4375H18M16.375 7.4375H13.9375M13.9375 7.4375V7C13.9375 5.89543 13.0421 5 11.9375 5H11.0625C9.95793 5 9.0625 5.89543 9.0625 7V7.4375M13.9375 7.4375H9.0625" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  );
}

const MemoBucket= React.memo(Bucket);
export default MemoBucket;



