import SitePage from "./site-page";
import { siteContent } from "./site-content";

export default function Home() {
  return <SitePage content={siteContent.tr} />;
}
