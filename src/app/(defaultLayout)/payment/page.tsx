import MyTitle from "@/components/common/MyTitle";
import PaymentTable from "@/components/modules/Payment/Payment";

const page = () => {
  return (
    <div className="space-y-6">
        <MyTitle title="Payment History"/>
      <PaymentTable />
    </div>
  );
};

export default page;
