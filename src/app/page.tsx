import Header from "@/components/header";
import Footer from "@/components/footer";
import Features from "@/components/features";
import WrapperCenter from "@/components/wrapper";
import {StatTrackSidebar} from "@/components/stat-track-sidebar";




export default function Home() {
  return(

      <div>
          <StatTrackSidebar />
          <WrapperCenter>
          <Header/>
          <Features/>
          <Footer/>
          </WrapperCenter>
      </div>

  );
}
