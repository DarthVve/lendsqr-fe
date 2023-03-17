import './filterModal.scss';

const FilterModal = () => {
    return (
        <div className='filter-modal'>
            <form className='fm-form'>
                <div className="fm-form-field">
                    <label>Organisation</label>
                    <select name="organisation" defaultValue=''>
                        <option value='' disabled>Select</option>
                    </select>
                </div>
                <div className="fm-form-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder='Username'/>
                </div>
                <div className="fm-form-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder='Email'/>
                </div>
                <div className="fm-form-field">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" placeholder='Date'/>
                </div>
                <div className="fm-form-field">
                    <label htmlFor="phonenumber">Phone number</label>
                    <input type="text" name="phonenumber" id="phonenumber" placeholder='Phone Number'/>
                </div>
                <div className="fm-form-field">
                    <label>Status</label>
                    <select name="status" defaultValue=''>
                        <option className='fm-select-text' value='' disabled>Select</option>
                        <option>Active</option>
                        <option>Blacklisted</option>
                        <option>Inactive</option>
                        <option>Pending</option>
                    </select>
                </div>
                <div className='fm-form-btns'>
                    <button className='fm-form-btn-reset'>Reset</button>
                    <button className='fm-form-btn-filter'>Filter</button>
                </div>
            </form>
        </div>
    )
};

export default FilterModal;