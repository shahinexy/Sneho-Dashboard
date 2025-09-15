import { Captions } from "lucide-react";
import Image from "next/image";

const InstantCall = () => {
  const datas = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="grid md:grid-cols-3 md:gap-6 gap-4">
      {datas?.map((item, idx) => (
        <div
          key={item}
          className="md:p-3 p-2 md:space-y-4 space-y-2 rounded-xl bg-white "
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <p>{idx + 1}</p>
              <Image
                src={"/placeholders/image_placeholder.png"}
                alt="image"
                width={90}
                height={90}
                className="md:w-12 w-10 md:h-12 h-10 rounded-full"
              />
              <div className="space-y-1">
                <p>Annette Black</p>
                <p className="text-sm text-grayText">Annette Black</p>
              </div>
            </div>

            <div className="">
              <p className="bg-yellow-500 px-2 py-1 rounded-full text-white inline-block">
                Waiting
              </p>
            </div>
          </div>
          <div>
            <p className="font-medium">Problem:</p>
            <p className="text-sm text-grayText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              earum veritatis, cum architecto quaerat nemo!
            </p>
          </div>

          <div>
            <p className="font-medium">Attachments:</p>
            <div className="flex gap-3">
              <Image
                src={"/placeholders/image_placeholder.png"}
                alt="image"
                width={90}
                height={90}
                className="md:w-24 w-20 md:h-24 h-20 rounded-xl"
              />
              <Image
                src={"/placeholders/image_placeholder.png"}
                alt="image"
                width={90}
                height={90}
                className="md:w-24 w-20 md:h-24 h-20 rounded-xl"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex ga2 justify-center items-center w-full px-4 py-3 bg-gradient-to-r from-secondary to-primary hover:from-blue-600 hover:to-purple-700 transition-all text-white rounded-lg duration-300">
              <Captions /> Notify Doctor
            </button>
            <Image
              src={"/placeholders/image_placeholder.png"}
              alt="image"
              width={90}
              height={90}
              className="md:w-12 w-10 md:h-12 h-10 rounded-xl border border-primary"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstantCall;
