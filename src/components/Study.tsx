
const Study = () => {
 return (
  <main className="site-main">
   <h2 className="page-title">Custom Flashcards</h2>
   <p className="page-lead">
    Flip through cards. Mark words you know to track progress.
   </p>
   <div className="stats-row">
    <div className="stat-box">
     <div className="num" style={{"color": "#14b8a6"}}>
      12
     </div>
     <div className="lbl">Remaining</div>
    </div>
    <div className="stat-box">
     <div className="num" style={{"color": "#14b8a6"}}>
      8
     </div>
     <div className="lbl">Learned</div>
    </div>
    <div className="stat-box">
     <div className="num" style={{"color": "#14b8a6"}}>
      20
     </div>
     <div className="lbl">Total</div>
    </div>
   </div>
   <div className="flashcard">
    <div className="word">example</div>
    <p className="hint">пример</p>
   </div>
   <div className="btn-group" style={{"justifyContent":"center"}}>
    <button type="button" className="btn btn-outline">
     Don't know
    </button>
    <button type="button" className="btn btn-primary">
     Know
    </button>
   </div>
   <div className="progress-bar">
    <div className="progress-fill" style={{"width": "40%"}}></div>
   </div>
  </main>
 );
};

export default Study;
