import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="bg-[#0e1a2b] text-white w-full">
        {/* 🧱 풀 와이드 배경 이미지 */}
        <div
          className="w-full h-[1500px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-logistics.jpg')" }}
        ></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 md:px-16 lg:px-32 py-12 gap-12">
        {/* 왼쪽 텍스트 */}
       <div className="w-full md:w-1/5 space-y-6 text-white">
          <div className="flex items-center gap-2">
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
            <h1 className="text-2xl font-bold text-black dark:text-white">Application Developer</h1>
          </div>
          <p className="font-semibold text-black dark:text-white">
            꾸준함과 실행력으로 성장하는 개발자 김성경입니다.
          </p>

          <div>
            <h2 className="font-semibold text-black dark:text-white">✔️ 작은 습관에서 시작된 큰 변화</h2>
            <p>
              매일 메모하는 습관으로 업무를 구조화하고,<br />
              반복되는 작업 속에서도 효율을 찾아냅니다.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black dark:text-white">✔️ “나중에”는 없다, 지금 당장!</h2>
            <p>
              주어진 일은 미루지 않고 바로 실행합니다.<br />
              빠른 실행력은 곧 신뢰와 성과로 이어집니다.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black dark:text-white">✔️ 빈틈을 그냥 두지 않습니다</h2>
            <p>
              기능과 기능 사이의 연결을 생각하고,<br />
              팀워크의 균형을 세심하게 맞추며,<br />
              원활한 협업을 위해 한 걸음 더 나아갑니다.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-black dark:text-white">✔️ ‘고객의 니즈’에 집착합니다</h2>
            <p>
              개발은 결국 사용자를 위한 것.<br />
              기능 하나를 설계할 때도,<br />
              고객이 진짜로 원하는 것이 무엇인지 끊임없이 고민합니다.
            </p>
          </div>

          <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
            <p className="italic text-blue-800 dark:text-blue-200">
              💡 제가 추구하는 개발자는 단순히 기능을 만드는 사람이 아니라,<br />
              문제를 해결하고 가치를 전달하는 사람입니다.
            </p>
            <p className="mt-1">그런 개발자로 오늘도 한 걸음 더 성장합니다.</p>
          </div>
        </div>

        {/*Application Developer END*/}

        {/* 주요업무 */}
        <div className="w-full md:w-1/5 space-y-6 text-white">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
            <h1 className="text-2xl font-bold text-black dark:text-white">주요업무</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            물류 자동화 시스템(WCS, ECS) 설계, 개발 및 운영 지원
          </p>

          {/* 업무 섹션 반복 구조 */}
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">
              ⚙️ <span>1. 시스템 설계 및 아키텍처</span>
            </h2>
            <ul className="list-disc list-inside text-sm ml-4 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
              <li>고객 요구사항 기반 모듈 구조 설계</li>
              <li>설비 연동용 프로토콜 구성</li>
              <li>장애 대응 로직 및 예외 처리 플로우 설계</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">
              💻 <span>2. 소프트웨어 개발</span>
            </h2>
            <ul className="list-disc list-inside text-sm ml-4 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
              <li>WCS/ECS 핵심 모듈(CV, SC, AGV, AMR, BCR 등) 구현</li>
              <li>실시간 제어 로직 개발 (MFC, C++, C#, Java)</li>
              <li>설비 상태·작업 흐름 UI/UX 화면 개발</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">
              🏗️ <span>3. 현장 구축 및 테스트</span>
            </h2>
            <ul className="list-disc list-inside text-sm ml-4 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
              <li>자동화 설비 통합 테스트(SIT, FAT, SAT)</li>
              <li>실제 가동 시뮬레이션 및 이슈 대응</li>
              <li>시리얼/네트워크 기반 장비 연동 검증</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">
              🔧 <span>4. 운영 및 유지보수</span>
            </h2>
            <ul className="list-disc list-inside text-sm ml-4 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
              <li>고객사 운영 환경 모니터링 및 장애 대응</li>
              <li>예외 처리 및 소프트웨어 패치 지원</li>
              <li>운영 리포트 분석 및 개선사항 반영</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">
              📝 <span>5. 문서화 및 커뮤니케이션</span>
            </h2>
            <ul className="list-disc list-inside text-sm ml-4 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
              <li>요구사항 정의서, 설계서, 매뉴얼 작성</li>
              <li>고객사 미팅 및 기술 대응</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">
              🔌 <span>6. 통신 프로토콜 연동</span>
            </h2>
            <ul className="list-disc list-inside text-sm ml-4 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
              <li>커스텀 프로토콜 및 메시지 구현</li>
              <li>SECS/GEM, OPC UA, LLRP, MQTT 등 대응</li>
            </ul>
          </div>
        </div>


        {/* 02. Stack START*/}
        <div className="w-full md:w-1/5 space-y-6 text-white">
          <div className="flex items-center gap-2">
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
            <h1 className="text-2xl font-bold text-black dark:text-white"> Stack</h1>
          </div>


          {/* 그룹: 주로 사용한 기술 */}
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">📌 주로 사용한 기술</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-red-300 text-black font-medium">MFC</span>
              <span className="px-3 py-1 rounded-md bg-red-500 text-white font-medium">C++</span>
              <span className="px-3 py-1 rounded-md bg-indigo-600 text-white font-medium">VB</span>
              <span className="px-3 py-1 rounded-md bg-cyan-500 text-black font-medium">C#</span>
              <span className="px-3 py-1 rounded-md bg-green-500 text-black font-medium">JAVA</span>
            </div>
          </div>

          {/* 카드: 제어형 백엔드 */}
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">🛠 설비 제어형 백엔드</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-red-500 text-white font-medium">C++</span>
              <span className="px-3 py-1 rounded-md bg-cyan-500 text-black font-medium">C#</span>
              <span className="px-3 py-1 rounded-md bg-indigo-600 text-white font-medium">VB</span>
              <span className="px-3 py-1 rounded-md bg-green-500 text-black font-medium">JAVA</span>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              - 실시간 제어 로직, 큐 기반 이벤트 처리<br />
              - 멀티스레드 및 타이머 기반 스케줄링
            </p>
          </div>

          {/* 카드: 통신 및 연동 */}
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">🔌 통신/프로토콜</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-gray-600 text-white font-medium">TCP/IP</span>
              <span className="px-3 py-1 rounded-md bg-orange-500 text-white font-medium">OPC</span>
              <span className="px-3 py-1 rounded-md bg-green-500 text-black font-medium">MQTT</span>
              <span className="px-3 py-1 rounded-md bg-purple-600 text-white font-medium">SECS</span>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              - 설비 ↔ 시스템 간 실시간 통신
            </p>
          </div>

          {/* 카드: 데이터 처리 */}
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">📊 데이터 처리</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-green-500 text-black font-medium">Oracle SQL</span>
              <span className="px-3 py-1 rounded-md bg-red-400 text-black font-medium">MSSQL</span>
              <span className="px-3 py-1 rounded-md bg-sky-400 text-black font-medium">PostgreSQL</span>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              - 작업 이력 저장 및 조회<br />
              - 트랜잭션 제어 및 로그 수집
            </p>
          </div>

          {/* 그룹: 프론트엔드 */}
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">🎨 프론트엔드</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-lime-600 text-white font-medium">HTML</span>
              <span className="px-3 py-1 rounded-md bg-yellow-400 text-black font-medium">CSS</span>
              <span className="px-3 py-1 rounded-md bg-violet-700 text-white font-medium">JavaScript</span>
              <span className="px-3 py-1 rounded-md bg-blue-700 text-white font-medium">React</span>
              <span className="px-3 py-1 rounded-md bg-neutral-500 text-white font-medium">Next.js</span>
            </div>
          </div>

          {/* 그룹: 기타 도구 */}
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white">🧰 기타 도구</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-purple-500 text-white font-medium">Git</span>
              <span className="px-3 py-1 rounded-md bg-red-400 text-black font-medium">OA</span>
            </div>
          </div>
        </div>

        {/* 02. Stack END*/}

        {/* 03. 기본인적사항 START*/}
        <div className="w-full md:w-1/5 space-y-6 text-white">
          <div className="flex items-center gap-2">
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
            <h1 className="text-2xl font-bold text-black dark:text-white">Basic Personal Information</h1>
          </div>

          <p>👤 김성경 (SungKyung Kim)</p>
          <p>📧 Email: <a href="mailto:sungkyung521@gmail.com" className="text-blue-600 dark:text-blue-400 underline">sungkyung521@gmail.com</a></p>
          <p>🎂 1990.05.21</p>
          <p>📞 010-XXXX-XXXX</p>
        </div>
        {/* 03. 기본인적사항 END*/}

        {/* 04. 학력, 교육 START*/}
        <div className="w-full md:w-1/5 space-y-6 text-white">
          <div className="flex items-center gap-2">
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
            <h1 className="text-2xl font-bold text-black dark:text-white">Education</h1>
          </div>
          <p>📘 2016.10 ~ 2017.04
            <br/>
            [NCS] 기업이 요구하는 자바 웹 개발자 양성과정 / KH정보교육원
          </p>

          <p>🎓 2016.03 ~ 2017.02
            <br/>
            서일대학교 컴퓨터소프트웨어학과 (전공심화) 졸업 / 평점: 4.44 (4.5)
          </p>

          <p>🎓 2011.03 ~ 2016.02
            <br/>
            서일대학교 인터넷정보과 졸업 / 평점: 4.06 (4.5)
          </p>

          <p>🏫 2006.03 ~ 2009.02
            <br/>
            덕소고등학교 (인문계)
          </p>

        </div>



      </div>


      <div className="flex justify-center">
        <Link legacyBehavior href="/projects">
          <a className="btn-project">Go To Projects</a>
        </Link>
      </div>
      <br/>
      <br/>

    </>
  );
}
