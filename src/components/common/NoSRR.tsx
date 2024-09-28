import dynamic from "next/dynamic";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const NoSsr = (props: any) => <React.Fragment>{props.children}</React.Fragment>;
export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
