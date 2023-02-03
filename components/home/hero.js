import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
       {/*<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          내용 써야함
          <br className="hidden lg:inline-block" />
          내용 써야함
        </h1> */}

        {/* 01. Application Developer START*/}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
        <div className="mb-8 leading-relaxed">
          <h1>Application Developer</h1>
          <a>안녕하세요! 꾸준하게 성장하는 개발자 김성경 입니다.</a>
          <br />
          <a>메모하는 습관 통해 체계적이고 효율성을 찾는 개발자</a>
          <br />
          <a>나중에 NO! 지금 OK! 부지런한 개발자</a>
          <br />
          <a>꼼꼼하게 빈 틈을 채워나가는 개발자</a>
          <br />
          <a>고객이 원하는 니즈가 무엇인지 고민하는 개발자</a>
          <br />     
        </div>
        {/*Application Developer END*/}

        {/* 02. Stack START*/}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-red-700 rounded-full align-self: center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
        </div>
        <div className="mb-8 leading-relaxed">
          <h1>Stack</h1>
          <h2>주로 사용했던 기술/언어들 입니다.</h2>
          <div className="pb-4 pt-4">
            <a className="px-2 py-1 mr-2 rounded-md bg-red-300 dark:bg-red-300 w-30">
              MFC
            </a>
            <a className="px-2 py-1 mr-2 rounded-md bg-red-500 dark:bg-red-500 w-30">
              C++
            </a>
            <a className="px-2 py-1 mr-2 rounded-md bg-indigo-600 dark:bg-indigo-600 w-30">
              VB
            </a>
            <a className="px-2 py-1 mr-2 rounded-md bg-sky-400 dark:bg-sky-400 w-30">
              PostgreSQL
            </a>           
          </div>

          <h2>다룰 수 있는 기술/언어들 입니다.</h2>
          <div className="pb-4 pt-4">
            <a className="px-2 py-1 mr-2 rounded-md bg-fuchsia-600 dark:bg-fuchsia-600 w-30">
              Java
            </a>
            <a className="px-2 py-1 mr-2 rounded-md bg-cyan-500 dark:bg-cyan-500 w-30">
              C#
            </a>            
            <br />
           
          </div>
          <div className="pb-4">
          <a className="px-2 py-1 mr-2 rounded-md bg-green-500 dark:bg-green-500 w-30">
              Oracle SQL
            </a> 
          </div>
          <div className="pb-4 ">
            <a className="px-2 py-1 mr-2 rounded-md bg-lime-600 dark:bg-lime-600 w-30">
              HTML
            </a>
            <a className="px-2 py-1 mr-2 rounded-md bg-yellow-400 dark:bg-yellow-400 w-30">
              CSS
            </a>
            <a className="px-2 py-1 mr-2 rounded-md bg-violet-700 dark:bg-violet-700 w-30">
              JavaScript
            </a>
            <a className="px-2 py-1 mr-2 rounded-md bg-blue-700 dark:bg-blue-700 w-30">
              React
            </a>
            <a className="px-2 py-1 mr-2 rounded-md bg-neutral-500 dark:bg-neutral-500 w-30">
              Next.js
            </a>
            <br />
          </div>
          <div className="pb-4">
            <a className="px-2 py-1 mr-2 rounded-md bg-purple-500 dark:bg-purple-500 w-30">
              Git
            </a>
            <a className="px-2 py-1 mr-2 rounded-md bg-red-400 dark:bg-red-400 w-30">
              OA
            </a>
            <br />
          </div>
        </div>
        {/* 02. Stack END*/}

        {/* 03. 기본인적사항 START*/}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
        </div>
        <div className="mb-8 leading-relaxed">
          <h1>Basic Personal Information</h1>
          <a>김성경 (SungKyung Kim)</a>
          <br />
          <a>Email : sungkyung521@gmail.com</a>
          <br />
          <a>1990.05.21</a>
          <br />
          <a>010-8711-1631</a>
          <br />
        </div>
        {/* 03. 기본인적사항 END*/}

        {/* 04. 학력, 교육 START*/}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </div>
        <div className="mb-8 leading-relaxed">
          <h1>Education</h1>
          <a>
            2016.10 ~ 2017.04 [NCS] 기업이 요구하는 자바 웹 개발자 양성과정 / KH정보교육원
          </a>
          <br />
          <a>
            2016.03 ~ 2017.02 서일대학교 컴포터소프트웨어학과 (전공심화) 졸업/4.44(4.5)
          </a>
          <br />
          <a>2011.03 ~ 2016.02 서일대학교 인터넷정보과 졸업/4.06(4.5)</a>
          <br />
          <a>2006.03 ~ 2009.02 덕소고등학교(인문계)</a>
          <br/>
        </div>
        {/* 04. 학력, 교육 END*/}

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
