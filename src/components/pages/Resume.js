import ResumeFile from "../../Assets/AnnemarieSheridanResume.pdf"

const Resume = () => {
    
    return <a class="resumeframe" href={ResumeFile}><iframe title ="resume" src={ResumeFile}/></a>
}










export default Resume;