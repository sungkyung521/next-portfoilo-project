import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";


export default function Projects({projects}) {

    //console.log(projects);

    return (
        <Layout >
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
                <Head>
                    <title>Kim Projects</title>
                    <meta name="description" content="오늘도 빡코딩!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm:text-2xl">
                    ALL PROJECTS :
                    <span className="pl-4 text-blue-500">{projects.results.length}</span>
                </h1>        
                
                <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-4">
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div>
                       
            </div>
        </Layout>
    );
}

// 빌드 타임에 호출
// export async function getStaticProps() {
    //getStaticProps
    //getServerSideProps
    //getStaticPaths


export async function getServerSideProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: '이름',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projects = await res.json();

  if (!res.ok || !projects.results) {
    console.error('🚨 Notion API 오류:', projects);
    return {
      props: {
        projects: { results: [] },
      },
    };
  }

  return {
    props: { projects },
  };
}

    
/*
// 각 요청 때마다 호출
export async function getServerSideProps() {

    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-02-22',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          sorts: [
              {
                  "property": "이름",
                  "direction": "ascending"
              }
          ],
          page_size: 100
      })
      };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    console.log(projects);

    //const projectNames = projects.results.map((aProject) =>(
     //   aProject.properties.이름.title[0].plain_text
    //))
    const projectNames = projects?.results?.map((aProject) => {
        return (
      aProject?.properties?.이름?.title?.[0]?.plain_text || '제목 없음'
    );
    }) || [];

    console.log(`projectNames : ${projectNames}`);

    return {
      props: {projects}, // will be passed to the page component as props
      // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
      // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
    }
}
//*/