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
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span
                className={
                  "ml-3 text-sm hover:text-gray-400 header-text-color " 
                }
              >
                CREATIVE KIM SUNG KYUNG
              </span>
            </a>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link legacyBehavior href="/">
              <a
                className={
                  "mr-5 header-text-color " 
                }
              >
                HOME
              </a>
            </Link>

            <Link legacyBehavior href="/projects">
              <a
                className={
                  "mr-5 header-text-color "
                }
              >
                PROJECTS
              </a>
            </Link>

            <a
              href="https://open.kakao.com/o/s91Oe0Xe"
              className={
                "mr-5 header-text-color " 
              }
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
