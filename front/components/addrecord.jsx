import { useState, useRef } from 'react';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import toast from 'react-hot-toast';
// import RegisTmg from '../../images/regisimg2.jpg';

function Addrecord() {
      const [formdata, SetFormdata] = useState({
            date: "",
            machine: "",
            customer: "",
            name: "",
            work_time: "",
            stop_time: "",
            start_time: "",
            machine_time: "",
            
      });
      const SubmitForm = async (e) => {
            e.preventDefault();
            console.log("send data")
      }
      const handleChange = (e) => {
            SetFormdata({...formdata, [e.target.name]: e.target.value})
      }

      console.log(formdata)

      return (
            <>
            <form onSubmit={SubmitForm}>
                  <label>
                        <span> วันที่ </span>
                        <input 
                              type="date" 
                              value={formdata.date}
                              onChange={handleChange}
                              name = "date"
                        />
                  </label>
                  <label>
                        <select name="machine">
                              <option value="disable" disabled selected>เลือกเครื่องจักร</option>
                              <option value="m1">m1</option>
                              <option value="m2">m2</option>
                              <option value="m3">m2</option>
                        </select>
                  </label>
                  <label>
                        <input 
                              type="text" 
                              value={formdata.customer}
                              onChange={handleChange}
                              name = "customer"
                        />
                  </label>
                  <label>
                        <input 
                              type="text" 
                              value={formdata.name}
                              onChange={handleChange}
                              name = "name"
                        />
                  </label>
                  <label>
                        <input 
                              type="text" 
                              value={formdata.work_time}
                              onChange={handleChange}
                              name = "work_time"
                        />
                  </label>
                  <label>
                        <input 
                              type="text" 
                              value={formdata.start_time}
                              onChange={handleChange}
                              name = "start_time"
                        />
                  </label>
                  <label>
                        <input 
                              type="text" 
                              value={formdata.stop_time}
                              onChange={handleChange}
                              name = "stop_time"
                        />
                  </label>
                  <label>
                        <input 
                              type="text" 
                              value={formdata.machine_time}
                              onChange={handleChange}
                              name = "machine_time"
                        />
                  </label>

                  <button type='submit'></button>
            </form>
            </>
      )
}

export default Addrecord;