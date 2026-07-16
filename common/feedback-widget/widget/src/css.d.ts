/* esbuild --loader:.css=text — CSS를 문자열로 import한다 (Shadow DOM 주입용) */
declare module "*.css" {
  const css: string;
  export default css;
}
