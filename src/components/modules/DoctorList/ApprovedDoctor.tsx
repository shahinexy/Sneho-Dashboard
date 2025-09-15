import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const ApprovedDoctor = () => {
  const datas = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="grid md:grid-cols-3 md:gap-6 gap-4">
      {datas?.map((item) => (
        <div
          key={item}
          className="md:p-3 p-2 md:space-y-4 space-y-2 rounded-xl bg-white "
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <Image
                src={"/placeholders/image_placeholder.png"}
                alt="image"
                width={90}
                height={90}
                className="md:w-12 w-10 md:h-12 h-10 rounded-full"
              />
              <div>
                <p className="md:text-xl">Annette Black</p>
                <p className="text-sm text-grayText">
                  victoriahughes@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center md:gap-6 gap-3">
            <div>
              <p className="font-medium">Victoria Hughes</p>
              <p className="text-sm text-grayText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias earum veritatis!
              </p>
            </div>
            <div className="bg-primary p-2 rounded-full text-white">
              <MoveUpRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApprovedDoctor;
