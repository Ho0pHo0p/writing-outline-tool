import "./Body.css"
import Sequences from "./SequencesPage"
import Sidebar from "./Sidebar"
import Home from "./HomePage"
import Scenes from "./ScenesPage"
import { useState } from "react"
import { v4 as uuid } from 'uuid'
import { updateInput, updateSeqInput } from "./utils"

export default function Body(){
  const [page, setPage] = useState('home');
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [selectedProject, setSelectedProject] = useState(projectName);

  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [title4, setTitle4] = useState('');
  const [title5, setTitle5] = useState('');
  const [title6, setTitle6] = useState('');
  const [title7, setTitle7] = useState('');
  const [title8, setTitle8] = useState('');

  const [summary1, setSummary1] = useState('');
  const [summary2, setSummary2] = useState('');
  const [summary3, setSummary3] = useState('');
  const [summary4, setSummary4] = useState('');
  const [summary5, setSummary5] = useState('');
  const [summary6, setSummary6] = useState('');
  const [summary7, setSummary7] = useState('');
  const [summary8, setSummary8] = useState('');

  const [seq1, setSeq1] = useState({ 
    id: uuid(),
    title:'',
    summary: '',
    seqNum: 1,
    marker: true,
    markerOn: false,
  });
  const [seq2, setSeq2] = useState({ 
    id: uuid(),
    title: '',
    summary: '',
    seqNum: 2,
    marker: true,
    markerOn: false,
  });
  const [seq3, setSeq3] = useState({ 
    id: uuid(),
    title: '',
    summary:  '',
    seqNum: 3,
    marker: false,
    markerOn: false,
  });
  const [seq4, setSeq4] = useState({ 
    id: uuid(),
    title: '',
    summary:  '',
    seqNum: 4,
    marker: true,
    markerOn: false
  });
  const [seq5, setSeq5] = useState({ 
    id: uuid(),
    title: '',
    summary:  '',
    seqNum: 5,
    marker: false,
    markerOn: false,
  });
  const [seq6, setSeq6] = useState({ 
    id: uuid(),
    title: '',
    summary:  '',
    seqNum: 6,
    marker: true,
    markerOn: false,
  });
  const [seq7, setSeq7] = useState({ 
    id: uuid(),
    title: '',
    summary:  '',
    seqNum: 7,
    marker: true,
    markerOn: false,
  });
  const [seq8, setSeq8] = useState({ 
    id: uuid(),
    title: '',
    summary:  '',
    seqNum: 8,
    marker: false,
    markerOn: false,
  });

  const [sequences, setSequences] = useState([seq1, seq2, seq3, seq4, seq5, seq6,seq7,seq8]);

  const updateTitle = (e, num) => {
    updateInput(e, num, setTitle1, setTitle2, setTitle3, setTitle4, setTitle5, setTitle6, setTitle7, setTitle8, title1, title2, title3, title4, title5, title6, title7, title8)
  }

  const updateSummary = (e, num) => {
    e.preventDefault();
    updateInput(e, num, setSummary1, setSummary2, setSummary3, setSummary4, setSummary5, setSummary6, setSummary7, setSummary8)
  }

  const updateSeq = (e, title1, title2, title3, title4, title5, title6, title7, title8) => {
    setSeq1(prevSeq => {
      console.log(prevSeq) 
      console.log(title1)
     const newOne = {...prevSeq, title: title1 }
     return newOne
    })
    setSeq2(prevSeq => {
      const newOne = {...prevSeq, title: title2, summary: summary2}
      return newOne
    })
    setSeq3(prevSeq => {
      return {...prevSeq, title: title3, summary: summary3}
    })
    setSeq1(prevSeq => {
      return {...prevSeq, title: title4, summary: summary4}
    })
    setSeq1(prevSeq => {
      return {...prevSeq, title: title5, summary: summary5}
    })
    setSeq1(prevSeq => {
      return {...prevSeq, title: title6, summary: summary6}
    })
    setSeq1(prevSeq => {
      return {...prevSeq, title: title7, summary: summary7}
    })
    setSeq1(prevSeq => {
      return {...prevSeq, title: title8, summary: summary8}
    })
  }

  const updatePageSequences = (e) => {
    e.preventDefault();
    setProjectName('');
    setPage('sequences');
  }
  const updatePageScenes = (e) => {
    e.preventDefault();
    setPage('scenes')
  }

  const updateProjects = (e) => {
    setProjects(prevProjects => {
      console.log(prevProjects)
      e.preventDefault();
      setSelectedProject(projectName)
      return [...prevProjects, {project:projectName, id:uuid(), sequences:{sequences}}]
  })}

  const updateProjectName = (e) => {
    setProjectName(e.target.value);
  }

  const updateSelectedProject = (e) => {
    setSelectedProject(e.target.innerText)
  }


  return(
    <section className="Body">
      {page === 'home' && <Home project={projectName} updateProject={updateProjectName} updateProjects={updateProjects} updatePage={updatePageSequences}/>}
      {page === 'sequences' && <Sidebar updateSelectedProj={updateSelectedProject} project={projectName} updateProject={updateProjectName} updateProjects={updateProjects} updatePage={updatePageSequences} projectList={projects} selectedProject={selectedProject} />}
      {page === 'sequences' && <Sequences selectedProject={selectedProject} projects={projects} setProjects={setProjects} sequences={sequences} updateTitle={updateTitle} updateSummary={updateSummary} updateProjects={updateProjects} title1={title1} title2={title2} title3={title3} title4={title4} title5={title5} title6={title6} title7={title7} title8={title8} summary1={summary1} summary2={summary2} summary3={summary3} summary4={summary4} summary5={summary5} summary6={summary6} summary7={summary7} summary8={summary8} updateSeq={updateSeq}/>}
      {page === 'scenes' && <Sidebar />}
      {page === 'scenes' && <Scenes />}
    </section>
  )
}