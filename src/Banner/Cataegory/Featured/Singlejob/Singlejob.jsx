const Singlejob = ({ suj }) => {
  const {
    id,
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    job_type,
    salary,
   } = suj;
  return (
    <div>
       
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src= {logo}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {company_name}
              <div className="badge badge-secondary">{job_title}</div>
            </h2>
            <p> {company_name}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlejob;
