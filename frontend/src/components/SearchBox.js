import React, {useState} from 'react';
import { Form, Button, Col} from 'react-bootstrap';

const SearchBox = ({history}) => {
  const [ keyword, setKeyword] = useState('');

  const submitHandler = (e) =>{
    e.preventDefault();
    if(keyword.trim()){
      history.push(`/search/${keyword}`)
    }else{
      history.push('/')
    }
  }

  return (
    <Form className=" pt-sm-3 pt-md-0" onSubmit={submitHandler} inline>
     
    <Form.Control type="text" name='q' onChange={(e)=> setKeyword(e.target.value)} placeholder='Search Products...' className=' searchBox mr-sm-2 ml-sm-5'></Form.Control>
    
    <Button type='submit'   variant='outline-success ' className='p-2 searchBtn'>Search</Button>
    
    </Form>
  )
}

export default SearchBox
