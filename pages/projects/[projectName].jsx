import React, { useEffect, useState } from "react";
import ProjectShowcase from '../../components/pages/project-showcase';

const Page = () => {
    // const { projectName } = useRouter().query;
    // const [DynamicComponent, setDynamicComponent] = useState(null);
    
    // useEffect(() => {
    //   const loadComponent = async () => {
    //     if(projectName){
    //         try {
    //             const dynamicModule = await import(`../../components/pages/projects/${projectName}`);
    //             setDynamicComponent(dynamicModule.default);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //   }
    
    //   loadComponent();
    // }, [projectName])
    
    
    return <div>
        <ProjectShowcase/>
    </div>;
};

export default Page;
