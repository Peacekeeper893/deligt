import {React , useState} from 'react'



import { BiCaretRight } from "react-icons/bi"
import spoon from '../assets/spoon.png'

const Tableherores = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
  
    today = yyyy + '-' + mm + '-' + dd;
  
    const [datetype, setdatetype] = useState("text")
  
    const [date, setDate] = useState(today)
    const [members, setMembers] = useState(null)  
    const [time, setTime] = useState(null)
  
    function handleChangeDate(event)
    {
      setDate(event.target.value)
    }
  
    function handleSubmit(event)
    {
      event.preventDefault()
      console.log(`A table for ${members} on ${date} at ${time}`)
    }
  
    function handleChangeTime(event)
    {
      setTime(event.target.value)
    }
  return (
    <div className='min-h-screen bg-primary textwhite pb-5'>
        
    <div className="h-[30rem] bg-[url('https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/redux/banner.png')] bg-center bg-cover  bg-no-repeat flex flex-col justify-center bg-opacity-10 ">
        
          <div class="absolute inset-0 bg-stone-800 bg-opacity-40 h-[30rem] md:top-[5.0rem] top-[85px] "></div> 
    
          <div className="flex justify-center md:text-5xl text-golden font-poppins z-10 font-bold text-3xl">HOME <BiCaretRight/>BOOK TABLE</div>

</div>

<div className="border-golden border-2 mx-8 mt-28 p-8 flex flex-col">
  <div className="justify-center  text-center text-3xl text-white font-cormant "> Reservations</div>
  <div className="flex justify-around "> <img src={spoon} alt="Welcome" className='w-10 mt-2' /></div>

  <div className="justify-center  text-center text-5xl text-golden font-cormant py-6 "> Book a Table</div>

  <form className=' text-white' onSubmit={handleSubmit}>

    <div className="flex justify-center flex-col md:flex-row">
      <input type="number" className='mx-2 md:w-1/4 bg-primary border-gray-400 px-3 py-2 border-2' placeholder='Enter the number of people' value={members} onChange={(event) => {setMembers(event.target.value)} } />
      <input type={datetype} className='mx-2 md:w-1/4 focus:bg-white focus:text-black bg-primary border-gray-400 px-3 py-2 border-2' placeholder='Date of booking (DD/MM/YYYY)' value={date} onFocus={() => { setdatetype("date") }} onBlur={() => {
        setdatetype("text")
      }} onChange={handleChangeDate} />
      

      <select className='mx-2 md:w-1/4 bg-primary border-gray-400 px-3 py-2 border-2' placeholder='Enter the time' id='time' name='time' onChange={handleChangeTime} value={time}>
      <option value="null">Select the time</option>
      <option value="6">6:00 PM</option>
      <option value="7">7:00 PM</option>
      <option value="8" >8:00 PM</option>
      <option value="9">9:00 PM</option>
      <option value="10">10:00 PM</option>
      <option value="11">11:00 PM</option>
      </select>
      
    </div>

    <div className="flex justify-around font-cormant text-2xl my-8 mb-4"><button type='submit' className='bg-amber-100 text-black p-3 rounded-md hover:bg-primary hover:text-golden border-2 hover:border-golden  hover:ease-in duration-150 font-semibold'>Book Table</button></div>

  </form>



</div>


        


</div>
  )
}

export default Tableherores