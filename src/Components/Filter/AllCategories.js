
import {useSelector, useDispatch} from 'react-redux';
import { getSelectedCategory, setSelectedCategory } from '../../redux/goodsSlice';

const AllCategories = () => {

    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    const allCategories = ['All','Smart Blood Pressure Monitors',
    'Smart Glucometers',
    'Smart Hearing Aids',
    'Smart Oximeters',
    'Smart Pill Dispensers',
    'Smart Scales',
    'Smart Sleep Monitors',
    'Smart Thermometers'];

    const handleCategoryChange = (e) => {
        
        dispatch(setSelectedCategory(e.target.value));
    }

    return(
        <div>
            <label className="chooseCategory" htmlFor="category-selector">Choose a category:</label>
            <select  id="category-selector" 
            onChange={handleCategoryChange} value={selectedCategory}>
                {allCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default AllCategories;