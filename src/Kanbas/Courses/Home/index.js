import Modules from "../Modules/index";
import "./index.css";

function Home() {
  return (
    <div className="row">
    <div className="col-9">
        <Modules />
    </div>
    <div className="col-3">
    <div>
                Course Status <br/>
                
                <button className="btn btn-secondary wd-margin">UnPublish</button>
                <button className="btn btn-success wd-margin">Publish</button>
                <ul className="list-group">
                    <li class="list-group-item">Import Existing Content</li>
                    <li class="list-group-item">Import From Commons</li>
                    <li class="list-group-item">Choose Home Page</li>
                    <li class="list-group-item">View Course Stream</li>
                    <li class="list-group-item">New Announcement</li>
                    <li class="list-group-item">New Analytics</li>
                    <li class="list-group-item">View Course Notifications</li>
                    
                </ul>

                <p className="wd-margin">To Do</p>
                <hr />
                <p>Grade A1</p>
                
                <br/><br/>

                <p>Comming Up</p>
                View Calendar
                <hr />
                <ul class="list-group">
                    <li class="list-group-item">CS5610 17367 Sep 11 at 4pm</li>
                    <li class="list-group-item">CS5610 17367 Sep 11 at 4pm</li>
                    <li class="list-group-item">CS5610 17367 Sep 11 at 4pm</li>
                </ul>
            </div>


    </div>
    </div>
  );
}
export default Home;