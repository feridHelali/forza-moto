import { useMotorbikeData } from "../../../hooks/useMotorbikedata"

function MotorbikeList() {
  const [motorbikes,getAllMotorbikes,addNewMotorbike]= useMotorbikeData()

  return (
    <div>
      <pre>
        <code>
         {JSON.stringify(motorbikes,null,3)} 
        </code>
      </pre>
    </div>
  )
}

export default MotorbikeList

//TODO: to implement MotorbikeList (urgent)
// load All motorbikes from api - done
// render motorbikes in table
// implement Add New Motorbike --> navigate to AddMotorbike Form
// Once successfully, redirect --> MotorbikeList
// implement update motorbike --> navigate to update form (not yet implemented)
// once updated --> redirect to MotorbikeList
// bis : implement upload photo, cover in updateForm
// implement remove motorbike