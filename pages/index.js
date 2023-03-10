import Head from "next/head";
import Image from "next/image";
import Banner from "../components/homepage/banner";
import Blogs from "../components/homepage/blogs";
import EliteDevelopers from "../components/homepage/elite-developers";
import FeaturedDevelopers from "../components/homepage/featured-developers";
import ForumsAndNewsletters from "../components/homepage/forums-newsletters";
import HotProjects from "../components/homepage/hot-projects";
import Map from "../components/homepage/map";
import ListedProperties from "../components/homepage/properties-for-sale";
import TrendingLinks from "../components/trending-links";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zilaay | Real Estate Portal</title>
      </Head>
      <Banner />
      <Map />
      <HotProjects />
      <EliteDevelopers />
      <FeaturedDevelopers />
      <ListedProperties title={"Properties For Sale"} color={"#aa4ff1"} />
      <ListedProperties
        title={"Properties For Rent"}
        color={"rgba(98, 157, 96, 1)"}
      />
      <ListedProperties
        title={"Properties For Sharing"}
        color={"rgba(100, 160, 231, 1"}
      />
      <Blogs />
      <ForumsAndNewsletters />
      <TrendingLinks />
    </div>
  );
}
