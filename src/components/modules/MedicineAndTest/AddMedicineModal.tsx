"use client"
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const AddMedicineModal = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="bg-primary px-4 py-3 rounded-md text-white">Add Medicine</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center md:text-3xl text-2xl mb-6">Add Medicine</DialogTitle>
            <DialogDescription>
              <div className="">
                <MyFormWrapper onSubmit={handleSubmit}>
                  <MyFormInput
                    name="MedicineName"
                    label="Medicine Name"
                    placeholder="Enter medicine name"
                  />
                  <MyFormInput
                    name="MedicineName"
                    label="Medicine Mg"
                    placeholder="Enter medicine mg"
                  />
                  <MyFormInput
                    name="MedicineName"
                    label="Company"
                    placeholder="Enter company name"
                  />
                  <MyFormInput
                    type="file"
                    acceptType="image/*"
                    name="photo"
                    label="Medicine Photo*"
                    placeholder="Enter company name"
                    filePlaceholder="Upload medicine photo"
                  />
                </MyFormWrapper>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddMedicineModal;
