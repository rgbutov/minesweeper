/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
