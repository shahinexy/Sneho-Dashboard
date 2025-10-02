/* eslint-disable @typescript-eslint/no-explicit-any */
import MyTitle from "@/components/common/MyTitle";
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
import AddMedicineModal from "../MedicineAndTest/AddMedicineModal";

const Parents = () => {
  const connections = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="flex justify-between gap-2 mb-6">
        <MyTitle title="Parents" />
        <AddMedicineModal />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-base font-medium">
              Post Details
            </TableHead>
            <TableHead className="text-base font-medium">Day List</TableHead>
            <TableHead className="text-base font-medium">Status</TableHead>
            <TableHead className="text-base font-medium">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {connections?.map((item: any) => (
            <TableRow key={item.id} className="text-base">
              <TableCell className="max-w-[150px]">
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
                    <p>
                      nec vehicula, ex leo. elit. scelerisque diam Nullam
                      tortor. volutpat Nullam Nullam maximus Sed ullamcorper
                      ultrices non.
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{item?.title || "Day 01"}</TableCell>
              <TableCell>{item?.region || "Active"}</TableCell>
              <TableCell>
                <EllipsisVertical />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Parents;
