import React , {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";

import * as client from "./client";

// function ModuleList() {
//   const { courseId } = useParams();
//   const modules = db.modules;
//   return (
//     <ul className="list-group">
//       {
//        modules
//          .filter((module) => module.course === courseId)
//          .map((module, index) => (
//            <li key={index} className="list-group-item">
//              <h3>{module.name}</h3>
//              <p>{module.description}</p>
//            </li>
//       ))
//       }
//     </ul>
//   );
// }
// export default ModuleList;


function ModuleList() {
  const { courseId } = useParams();

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //       ...modules,
  //   ]);
  // };

  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    console.log(moduleId,"**************4");
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };


  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button className="btn btn-danger wd-margin"
          onClick={handleAddModule}>
        Add</button>
        

        <button className="btn btn-info" onClick={handleUpdateModule}>
                Update
        </button>

        <input value={module.name} className="form-control wd-margin"
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description} className="form-control wd-margin"
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

      {
        modules 
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item list-group-item-secondary">

            <button
              className="btn btn-success float-end"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

            <button
              className="btn btn-warning float-end"
              onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>

             <h3>{module.name}</h3>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;