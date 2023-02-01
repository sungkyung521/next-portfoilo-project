import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          내용 써야함
          <br className="hidden lg:inline-block" />
          내용 써야함
        </h1>
        <p className="mb-8 leading-relaxed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>

          <h2>Application Developer</h2>
          <a>안녕하세요! 꾸준히 성장하는 개발자 김성경 입니다.</a>
          <br />
          <a>메모하는 습관으로 체계적이고 효율성을 찾는 개발자</a>
          <br />
          <a>나중이란 없고 지금이라 생각하며 도전하고 실행 하는 개발자</a>
          <br />
          <a>꼼꼼하게 빈 틈을 채워나가는 개발자</a>
          <br />
          <a>고객이 필요로 하는 것이 무엇인지 고민하는 개발자</a>
          <br />
        </p>

        <p className="mb-8 leading-relaxed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-red-700 rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>

          <h2>Stack</h2>
          <h2>다룰 수 있는 기술/언어들 입니다.</h2>
          <a>MFC C++ Java C# VB</a>
          <br />
          <a>Oracle SQL PostgreSQL</a>
          <br />
          <a>HTML CSS JavaScript React Next.js </a>
          <br />
          <a>Git OA</a>
          <br />
        </p>

        <p className="mb-8 leading-relaxed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>

          <h2>기본인적사항</h2>
          <a>김성경 (SungKyung Kim)</a>
          <br />
          <a>Email : sungkyung521@gmail.com</a>
          <br />
          <a>1990.05.21</a>
          <br />
          <a>010-8711-1631</a>
          <br />
        </p>

        <p className="mb-8 leading-relaxed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
          <h2>학력</h2>
          <a>
            2016.03 ~ 2017.02 서일대학교 컴포터소프트웨어학과 (전공심화)
            졸업/4.44(4.5)
          </a>
          <br />
          <a>2011.03 ~ 2016.02 서일대학교 인터넷정보과 졸업/4.06(4.5)</a>
          <br />
          <a>2006.03 ~ 2009.02 덕소고등학교(인문계)</a>
          <br />
        </p>

        <p className="mb-8 leading-relaxed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>


          <h2>교육</h2>
          <a>
            2016.10 ~ 2017.04 [NCS] 기업이 요구하느느 자바 웹 개발자 양성과정 /
            KH정보교육원{" "}
          </a>
          <br />
        </p>

        <div className="flex justify-center">
          <Link legacyBehavior href="/projects">
            <a className="btn-project">Go To Projects</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
