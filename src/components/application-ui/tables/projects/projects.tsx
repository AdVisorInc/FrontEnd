import { useCallback, useEffect, useState } from 'react';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import { projectsApi } from 'src/mocks/projects';
import { Project } from 'src/models/project';
import Results from './results';

function Component() {
  const isMountedRef = useRefMounted();
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = useCallback(async () => {
    try {
      const response = await projectsApi.getProjects();

      if (isMountedRef()) {
        setProjects(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return <Results projects={projects} />;
}

export default Component;
