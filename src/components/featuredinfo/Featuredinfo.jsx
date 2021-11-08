import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">No. of Users</span>
        <div className="featuredTotalContainer">
          <span className="featuredTotal">415</span>
          <span className="featuredCompare">
            -11 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">No. of Notices</span>
        <div className="featuredTotalContainer">
          <span className="featuredTotal">190</span>
          <span className="featuredCompare">
            + 14 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
