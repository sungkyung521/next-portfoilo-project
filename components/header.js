import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

import { useTheme } from "next-themes";

//theme :현재 값 가져오기
//setTheme :현재 값 바꾸기
export default function Header() {
  const { theme } = useTheme();
  console.log(theme == "dark" ? true : false);

  return (
    <>
      <header
        className={
          "text-gray-400 body-font " +
          (theme === "dark" ? "header-bg-color-w" : "header-bg-color-d")
        }
      >
        <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link legacyBehavior href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-red-700 fill-red-700 align-self: center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>

              <span
                className={
                  "ml-3 text-sm hover:text-gray-400 header-text-color "
                  /*+ (theme === "dark" ? "header-bg-color-w" : "header-bg-color-d")*/
                }
              >
                CREATIVE KIM SUNG KYUNG
              </span>
            </a>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link legacyBehavior href="/">
              <a className={"mr-5 header-text-color "}>HOME</a>
            </Link>

            <Link legacyBehavior href="/projects">
              <a className={"mr-5 header-text-color "}>PROJECTS</a>
            </Link>

            <a
              href="https://open.kakao.com/o/s91Oe0Xe"
              className={"mr-5 header-text-color "}
            >
              KAKAO
            </a>

            {/* 다크모드 토글 버튼 작업해야함 */}
            <DarkModeToggleButton />
          </nav>
        </div>
      </header>
    </>
  );
}
