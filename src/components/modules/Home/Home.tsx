import MyTitle from "@/components/common/MyTitle";
import OverView from "./Component/OverView";
import UserChart from "./Component/UserChart";
import DemographicChart from "./Component/DemographicChart";
import AppointmentChart from "./Component/AppointmentChart";

const Home = () => {
  return (
    <div className="space-y-6 mb-6">
      <MyTitle title="Good Morning" />
      <OverView />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <h2 className="md:text-2xl text-xl font-medium">Weekly Activity</h2>
          <UserChart />
        </div>
        <div className="space-y-4">
          <h2 className="md:text-2xl text-xl font-medium">User Demographic</h2>
          <DemographicChart />
        </div>
      </div>
      <div className="space-y-4">
         <h2 className="md:text-2xl text-xl font-medium">Doctor Appointment History</h2>
      <AppointmentChart />
      </div>
    </div>
  );
};

export default Home;
