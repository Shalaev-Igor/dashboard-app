import { useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectAllPosition } from 'store/positions/position-selector';

const JobList = () => {
  const positions = useSelector(selectAllPosition);

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};