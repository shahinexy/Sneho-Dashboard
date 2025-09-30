/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

const MedicineList = () => {
  const connections = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-base font-medium">
              Medicine Name
            </TableHead>
            <TableHead className="text-base font-medium">
              Company Name
            </TableHead>
            <TableHead className="text-base font-medium">Status</TableHead>
            <TableHead className="text-base font-medium">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {connections?.map((item: any) => (
            <TableRow key={item.id} className="text-base">
              <TableCell>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/placeholders/image_placeholder.png"}
                    alt="medicine"
                    width={150}
                    height={150}
                    className="w-16 h-16 rounded-md bg-white"
                  />
                  <div className="space-y-2">
                    <h4 className="font-medium">
                      {item?.title || "DulcoLax Dragees"}
                    </h4>
                    <p>500mg</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{item?.title || "Square Pharma"}</TableCell>
              <TableCell>{item?.region || "Active"}</TableCell>
              <TableCell> <EllipsisVertical /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MedicineList;
