
const Words = () => {
 return (
  <main className="site-main">
   <h2 className="page-title">Word List</h2>
   <p className="page-lead">Manage vocabulary for your flashcard deck.</p>
   <section className="card card-flush">
    <table className="data-table">
     <thead>
      <tr>
       <th>English</th>
       <th>Translation</th>
       <th></th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>hello</td>
       <td>привет</td>
       <td className="table-actions">
        <button className="btn btn-sm btn-outline">Edit</button>
        <button className="icon-btn" title="Delete">
         &times;
        </button>
       </td>
      </tr>
      <tr>
       <td>world</td>
       <td>мир</td>
       <td className="table-actions">
        <button className="btn btn-sm btn-outline">Edit</button>
        <button className="icon-btn" title="Delete">
         &times;
        </button>
       </td>
      </tr>
      <tr>
       <td>time</td>
       <td>время</td>
       <td className="table-actions">
        <button className="btn btn-sm btn-outline">Edit</button>
        <button className="icon-btn" title="Delete">
         &times;
        </button>
       </td>
      </tr>
      <tr>
       <td>people</td>
       <td>люди</td>
       <td className="table-actions">
        <button className="btn btn-sm btn-outline">Edit</button>
        <button className="icon-btn" title="Delete">
         &times;
        </button>
       </td>
      </tr>
     </tbody>
    </table>
   </section>
   <section className="card">
    <div className="card-body">
     <h3 className="section-heading">Add word</h3>
     <div className="form-row">
      <div className="field">
       <label className="form-label">English</label>
       <input className="form-control" />
      </div>
      <div className="field">
       <label className="form-label">Translation</label>
       <input className="form-control" placeholder="привет" />
      </div>
      <button className="btn btn-primary">Add word</button>
     </div>
    </div>
   </section>
  </main>
 );
};

export default Words;
