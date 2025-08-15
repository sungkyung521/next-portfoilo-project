import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Remark.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    return diffInMs / (1000 * 60 * 60 * 24);
  };

  return (
    <div className="project-card">
      {/* ✅ 이미지 흰 배경 래퍼 */}
      <div className="bg-white dark:bg-white p-3 flex items-center justify-center rounded-t-xl">
        <Image
          src={imgSrc}
          alt="cover image"
          width="100"
          height="50"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={github} className="text-blue-500 hover:underline">
          깃허브 바로가기
        </a>

        <p className="my-1">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2 flex-wrap">
          {tags.map((aTag) => (
            <span
              className="px-2 py-1 mr-2 mb-2 rounded-md bg-sky-200 dark:bg-sky-700 w-fit"
              key={aTag.id}
            >
              {aTag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
