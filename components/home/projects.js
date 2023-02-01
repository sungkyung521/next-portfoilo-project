
import ProjectItem from "../projects/project-item";

// 빌드 타임에 호출
// export async function getStaticProps() {

export default function Projects({projects}) {

    //console.log(projects);

    return (
        <Layout >
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
                <Head>
                    <title>KIM SUNG KYUNG PROJECTS</title>
                    <meta name="description" content="오늘도 빡코딩!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm:text-2xl">
                    ALL PROJECT :
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
