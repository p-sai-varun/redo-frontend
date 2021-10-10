import React, {Container, CardTitle, Card, CardText, Button} from 'reactstrap';
import axios from 'axios';
import base_url from '../api/springbootapi';
import {toast} from 'react-toastify'

const Job = ( {userId,singleJob, updateArray} ) => {
    
    const postJob = (userId,jobId) => {
        axios.post(`http://localhost:8090/apply`,{},{
            params: {
              userId,
              jobId
            }
          }).then(
            (response) => {
                console.log(response);
                toast.success("Job Applied Successfully!");
            }, (error) => {
                console.log(error);
                toast.success("Job Applied Successfully");
            }
        );
    };
    const blockJob = (userId,jobId) => {
        axios.post(`http://localhost:8090/blocked`,{},{
            params: {
              userId,
              jobId
            }
          }).then(
            (response) => {
                console.log(response);
                toast.success("Job blocked Successfully!");
            }, (error) => {
                console.log(error);
                toast.success("Job not blocked");
            }
        );
    };
    

    

    return (
        <div>
            <Container>
                <Card body style={{ backgroundColor: '#2f4f4f', borderColor: '#ffffff'}}>
                    <CardTitle className="text-white" tag="h5">{singleJob.company}</CardTitle>
                    <CardText className="text-white">Role : {singleJob.role}</CardText>
                    {/* <CardText className="text-white">Salary : {singleJob.salary}</CardText> */}
                    <CardText className="text-white">Job Description : {singleJob.description}</CardText>
                    <CardText className="text-white">Level : {singleJob.level}</CardText>
                    <CardText className="text-white">Expiry : {singleJob.expiry}</CardText>
                    <CardText className="text-white">Skills : {singleJob.skills}</CardText>
                    <CardText className="text-white">Location:{singleJob.location}</CardText>
                    {/* {singleJob.candidates.map(function(d, idx){
         return (<li className='list' key={idx}>{d.username}</li>)
       })} */}
                    <Button  onClick={() => postJob(userId,singleJob.id)} className="bg-success" style={{borderColor: '#ffffff'}}>Apply</Button>
                    <br/>
                    <Button onClick={() =>blockJob(userId,singleJob.id) }className="bg-danger" style={{borderColor: '#ffffff'}}>Block</Button>
                </Card>
                <br/><br/>
            </Container>
        </div>

    );
};

export default Job;