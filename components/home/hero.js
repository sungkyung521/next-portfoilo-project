import Animation from "./animation";
import Link from "next/link";


export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          자기소개 써야 함
          <br className="hidden lg:inline-block" />
          자기소개 써야 함
        </h1>
        <p className="mb-8 leading-relaxed">
          자기 소개 써야 함
        </p>
        <div className="flex justify-center">
        <Link legacyBehavior href="/projects">
          <a className="btn-project">
            프로젝트 바로가기
          </a>
        </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">        
        <Animation/>
      </div>
    </>
  );
}
