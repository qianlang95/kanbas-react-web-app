import ModuleList from "./ModuleList";

function Modules() {
  return (
    <div>
      <div>
      <div className="row">
      <div className="col-12">
        <div class="float-end">
            <button type="button" class="btn btn-secondary">Collapse All</button>
            <button type="button" class="btn btn-secondary">View Progress</button>

                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-check-circle"  aria-hidden="true"></i> Publish All</button>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Publish All</a></li>
                <li><a class="dropdown-item" href="#">Publish all items and Modules</a></li>
                <li><a class="dropdown-item" href="#">UnPublish</a></li>
                </ul>

            <button type="button" class="btn btn-danger"> 
                <i class="fa fa-plus" aria-hidden="true"></i>Module</button>
                </div>
        </div>
        </div>
        <hr />
      <ModuleList />
      </div>
      
      
    </div>
  );
}
export default Modules;