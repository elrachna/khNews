import Container from "@/components/Container";
import { datas } from "@/utils/datas";
import { truncateText5 } from "@/utils/truncateText5";
import Image from "next/image";
import Link from "next/link";

// This is a Server Component that fetches data
const Id = ({ params }) => {
  const data = datas.find((item) => item.id.toString() === params.id);
  if (!data) {
    return <div>id not found</div>;
  }

  return (
    <div className="my-4 w-full">
      <Container>
        <div className="grid grid-cols-3 gap-4">
          {/* Left */}
          <div className="col-span-2">
            <div className="mb-3">
              <h2 className="text-base sm:text-xl md:text-2xl text-red-700 ">
                {data.title}
              </h2>
              <p className="text-xs px-4 pt-1 w-[180px] bg-red-600 text-white">
                30 តុលា 2024 | ម៉ោង 02:08
              </p>
              <div className="bg-red-600 w-full h-1"></div>
            </div>
            <div className="text-xs md:text-base space-y-2">
              <p>{data.description}</p>
              <Image
                src={data.imageUrl}
                width={500}
                height={400}
                alt={data.title}
                className="w-full"
              />
              <p>{data.description}</p>
              <Image
                src={data.imageUrl}
                width={500}
                height={400}
                alt={data.title}
                className="w-full"
              />
              <p>{data.description}</p>
              <Image
                src={data.imageUrl}
                width={500}
                height={400}
                alt={data.title}
                className="w-full"
              />
              <p>{data.description}</p>
              <Image
                src={data.imageUrl}
                width={500}
                height={400}
                alt={data.title}
                className="w-full"
              />
            </div>
          </div>
          {/* Right */}
          <div className="col-span-1 space-y-4">
            <div className="space-y-3 md:space-y-2">
              <h2 className="text-red-600 text-base md:text-xl">
                អត្ថបទពេញនិយម
              </h2>
              {datas.map(
                (data, index) =>
                  index < 6 && (
                    <div key={index}>
                      <Link
                        href={`/article/${data.id}`}
                        key={index}
                        className="h-[60px] md:h-[90px] flex items-center rounded-lg overflow-hidden shadow-lg"
                      >
                        <Image
                          src={data.imageUrl}
                          width={200}
                          height={200}
                          alt="Image"
                          className="w-[360px] md:w-[300px] h-full overflow-hidden object-cover object-center"
                        />
                        <h3 className="py-2 px-2 text-[0.4rem] md:text-xs">
                          {truncateText5(`${data.title}`)}
                        </h3>
                      </Link>
                    </div>
                  )
              )}
            </div>
            <div className="space-y-3 md:space-y-2">
              <h2 className="text-red-600 text-base md:text-xl">អត្ថបទថ្មីៗ</h2>
              {datas.map(
                (data, index) =>
                  index < 6 && (
                    <div key={index}>
                      <Link
                        href={`/article/${data.id}`}
                        key={index}
                        className="h-[60px] md:h-[90px] flex items-center rounded-lg overflow-hidden shadow-lg"
                      >
                        <Image
                          src={data.imageUrl}
                          width={200}
                          height={200}
                          alt="Image"
                          className="w-[360px] md:w-[300px] h-full overflow-hidden object-cover object-center"
                        />
                        <h3 className="py-2 px-2 text-[0.4rem] md:text-xs">
                          {truncateText5(`${data.title}`)}
                        </h3>
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Id;
