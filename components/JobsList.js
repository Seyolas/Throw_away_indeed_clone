import React from 'react'
import { connect } from 'react-redux'
import SingleJob from './SingleJob';

const mapStateToProps = store =>{
    const {JobTitleQuery,LocationQuery, selectedItemId, selectedItem} = store.searchReducer;
    return { JobTitleQuery,LocationQuery,selectedItem,selectedItemId }
  }

  const mapDispatchToProps = (dispatch) =>{
    return { 
      setQueries:(data)=>dispatch({type:'SET_QUERY', payload:data}),
      setSelectedItem:(id,qualifications_and_requirements)=>dispatch({type:'SET_SELECTED_ITEM', payload:{id,qualifications_and_requirements}}),
    }
    
  }


const JobsList = ({JobTitleQuery,LocationQuery,setSelectedItem,data}) => {

    let searchResult;

    searchResult = data.filter((item)=>item.job_title.includes(JobTitleQuery) 
    && item.location.includes(LocationQuery))
    


    if (searchResult.length===0) {
        return <h1 style={{textAlign:'center'}}>No Result dude</h1>
    }

    return (
        <main>
            <article className='left'>
            {searchResult.map((singleJob)=>{
                const {id,company_name,job_title,location,
                    work_type,qualifications_and_requirements} = singleJob;
                   
                    return (
                        <div onClick={()=>setSelectedItem(id,qualifications_and_requirements)} key={id} className="item">
                            <h2>{job_title}</h2>
                            <h3>{company_name}</h3>
                            <h3>{location}</h3> <span>{work_type}</span>
                           <h3>{qualifications_and_requirements.substring(0,70)}...</h3>
                        </div>
                    )

            })}
            </article>
            <SingleJob/>

        

            <style jsx>{`
                
                main{
                    width:80%;
                    max-width:80%;
                    display:flex;
                    justify-content:flex-start;
                    margin:2rem auto;
                }
                .left{
                    width:40%;
                    max-width:40%;
                }
                
                .item{
                    padding:1rem;
                    margin:1rem;
                    cursor:pointer;
                    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
                }
                h2{
                    font-size:1.3rem;
                }
                h3{
                    font-size:1rem;
                }
                `}

            </style>
        </main>
    )
    
}

export default connect(mapStateToProps,mapDispatchToProps)(JobsList)

