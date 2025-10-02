/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PaymentTable = () => {
  const connections = [1, 2, 3, 4, 5, 6];
  return (
    <div className="bg-white p-6 rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-base font-medium">User Name</TableHead>
            <TableHead className="text-base font-medium">User Role</TableHead>
            <TableHead className="text-base font-medium">
              Amount
            </TableHead>
            <TableHead className="text-base font-medium">Payment ID</TableHead>
            <TableHead className="text-base font-medium">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {connections?.map((item: any) => (
            <TableRow key={item.id} className="border-none text-base">
              <TableCell className="py-4">
                {item?.title || "Magha Alam"}
              </TableCell>
              <TableCell>{item?.title || "Parent"}</TableCell>
              <TableCell>{item?.region || "20 BDT"}</TableCell>
              <TableCell>{item?.region || "#-G123"}</TableCell>
              <TableCell>{item?.region || "Successful"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentTable;
