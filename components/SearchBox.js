import React from 'react'
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";

const mapStateToProps = store =>{
    const {JobTitleQuery,LocationQuery} = store.searchReducer;
    return { JobTitleQuery,LocationQuery }
  }
  const mapDispatchToProps = (dispatch) =>{
    return { 
      setQueries:(data)=>dispatch({type:'SET_QUERY', payload:data}),
    //   decrease:(id,amount)=>dispatch({type:'DECREASE', payload:{id,amount}}),
    }
   
  }

const SearchBox = ({JobTitleQuery,LocationQuery,setQueries}) => {

    const {register,handleSubmit,formState: { errors }} = useForm();

    const onSubmit = (data) =>{
        setQueries({type:'SET_QUERY',payload:data})
    }

    return (
        <>
     
        <form onSubmit={handleSubmit(onSubmit)}>
             <input className='search' {...register('jobtitle',{ required: true, maxLength: 70 })} placeholder="Position name or company name" /> 
             <input className='location' {...register('location', { required: true, maxLength:40 })} placeholder="Where" />
             <input value='Search' className='btn'  type="submit" />
        </form>


        

        <style jsx>{`
                form{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                form input{
                    margin:0 1rem;
                }
                .btn{
                    color:#fff;
                    padding: 0.6rem 1rem;
                    border-radius:5px;
                    cursor:pointer;
                    text-align:center;
                    align-self:center;
                    background-color:rgb(22, 64, 129);

                }

            /* Input search */
            input {
                outline: none;
            }

            .search {
                -webkit-appearance: textfield;
                -webkit-box-sizing: content-box;
                font-family: inherit;
                font-size: 100%;
                border-radius:5px;
            }
            input::-webkit-search-decoration,
            input::-webkit-search-cancel-button {
                display: none; 
            }
            .search {
                padding: 9px 10px 9px 32px;
                width: 20vw;
                background: url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
                border: solid 1px #ccc;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                transition: all .5s;
            }
            .search:focus {
                width: 21vw;
                background-color: #fff;
                border-color: black;
                -webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
                -moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
                box-shadow: 0 0 5px rgba(109,207,246,.5);
            }

            /* location input */

            .location {
                -webkit-appearance: textfield;
                -webkit-box-sizing: content-box;
                font-family: inherit;
                font-size: 100%;
                border-radius:5px;
            }
            input::-webkit-search-decoration,
            input::-webkit-search-cancel-button {
                display: none; 
            }


            .location {
                padding: 9px 10px 9px 32px;
                width: 20vw;
                background: url(https://img.icons8.com/material-outlined/20/000000/marker.png) no-repeat 9px center;
                border: solid 1px #ccc;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                transition: all .5s;
            }
            .location:focus {
                width: 21vw;
                background-color: #fff;
                border-color: black;
                -webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
                -moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
                box-shadow: 0 0 5px rgba(109,207,246,.5);
            }



                `}

            </style>

        </>

    )
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchBox)
