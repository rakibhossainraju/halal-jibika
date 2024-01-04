import style from "./JobDetailsPage.module.css";
import JobDetailCardComponent from "../../components/job-detail-card/JobDetailCardComponent.jsx";
import JobPortal from "../../components/job-portal/JobPortal.jsx";

const JobDetailsPage = () => {
  return (
    <main className={style.detailsPageSection}>
      <section className={style.jobDetailsHeaderSection}>
        <h3>Job Details</h3>
        <h5>
          &ldquo; Embark on a Journey with Us. Explore Our Job Opportunities &
          Requirements! &ldquo;
        </h5>
      </section>
      <section className={style.jobDetailsSection}>
        <div>
          <div>
            <p className={style.jobPostedDate}>
              13 October 2024 by <span>Deloitte</span>
            </p>
            <h4 className={style.jobPostTitle}>
              Learning and Development Manager
            </h4>
            <div className={style.socialLinksContainer}>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Copy</a>
            </div>
          </div>
          <div className={style.overview}>
            <h5>Overview</h5>
            <p>
              When team members told us they needed more flexibility around
              where and how they worked, we acted, creating two options to
              accommodate two different styles of work. One non-negotiable
              principle along the way? We had to retain our deep culture of
              collaboration, both among ourselves and with our clients.
              Introducing Work From Near and Work From Anywhere at WillowTree.
              Please indicate which location(s) you're interested.
            </p>
          </div>
          <div className={style.jobDescription}>
            <h5>Job Description</h5>
            <p>
              As a Product Designer at WillowTree, you’ll give form to ideas by
              being the voice and owner of product decisions. You’ll drive the
              design direction, and then make it happen!
            </p>
            <p>
              We understand our responsibility to create a diverse, equitable,
              and inclusive place within the tech industry, while pushing to
              make our industry more representative.
            </p>
          </div>
          <div className={style.responsibilities}>
            <h5>Responsibilities</h5>
            <ul>
              {responsibilities.map((data) => (
                <li key={data}>
                  <p>{data}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.requiredSkills}>
            <h5>Required Skills:</h5>
            <ul>
              {requiredSkills.map((data) => (
                <li key={data}>
                  <p>{data}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.requiredSkills}>
            <h5>Benefits:</h5>
            <ul>
              {benefits.map((data) => (
                <li key={data}>
                  <p>{data}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <JobDetailCardComponent />
      </section>
      <JobPortal
        btnBg="transparent"
        style={{ marginBlock: 0, paddingBlock: "10rem" }}
      />
    </main>
  );
};

export default JobDetailsPage;

const responsibilities = [
  "Collaborate daily with a multidisciplinary team of Software Engineers, Researchers, Strategists, and Project Managers.",
  "Co-lead ideation sessions, workshops, demos, and presentations with clients on-site.",
  "Push for and create inclusive, accessible design for all.",
  "Maintain the quality of the design process and ensure that when designs are translated into code, they accurately reflect the design specifications.",
  "Sketch, wireframe, build IA, motion design, and run usability tests.",
  "Design pixel-perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel.",
  "Ensure content strategy and design are perfectly in-sync.",
  "Give and receive design critique to help constantly refine and push our work.",
];
const requiredSkills = [
  "You’ve been designing digital products for 2+ years.",
  "A portfolio that exemplifies strong visual design and a focus on defining the user experience.",
  "You’ve proudly shipped and launched several products.",
  "You have some past experience working in an agile environment – Think two-week sprints.",
  "Experience effectively presenting and communicating your design decisions to clients and team members.",
  "Up-to-date knowledge of design software like Figma, Sketch, etc.",
];
const benefits = [
  "We are a remote-first company.",
  "100% company-paid health insurance premiums for you & your dependents.",
  "Vacation stipend.",
  "Unlimited paid vacation and paid company holidays.",
  "Monthly wellness/gym stipend.",
];
