import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReviewItem = ({
  id,
  title,
  text,
  name,
  rating,
  setIdToDelete,
  bootcampId
}) => {
  return (
    <>
      <tr className='align-middle'>
        <td>{name}</td>
        <td>{rating}</td>
        <td>
          <div className='float-end'>
            <Link
              to={{
                pathname: `/createreview/${bootcampId}`,
                state: {
                  editMode: true,
                  bootcampId,
                  bootcampName: name,
                  reviewTitle: title,
                  reviewText: text,
                  reviewRating: rating,
                  reviewId: id
                }
              }}
              className='btn btn-secondary me-2'
            >
              <FaPencilAlt />
            </Link>
            <button
              type='button'
              className='btn btn-danger'
              data-bs-toggle='modal'
              data-bs-target='#reviewModal'
              onClick={() => setIdToDelete(id)}
            >
              <FaTimes />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ReviewItem;
