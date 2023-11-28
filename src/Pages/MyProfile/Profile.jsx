import PropTypes from 'prop-types';

const Profile = ({user}) => {

    const { email, name, photo,role } = user;


    return (
        <div className="max-w-4xl mx-auto my-10">
                <div className="card w-96 mx-auto bg-base-100 shadow-2xl mt-8">
                    <div className="px-10 pt-10 w-1/2 mx-auto">
                        <img src={photo} alt="Shoes" className="rounded-full w-full" />
                    </div>
                    <div className="card-body ">
                        <h2 className='text-[17px]'><span className='font-bold'>Name:</span> {name}</h2>
                        <p className='text-[17px]'><span className='font-bold'>Email:</span> {email}</p>
                        {
                            role ? <p className='text-[17px]'><span className='font-bold'>Role:</span> {role}</p> : <p><span className='font-bold'>Role:</span> Normal User</p>
                        }
                        

                    </div>
                </div>
            </div>
    );
};

Profile.propTypes = {
    user:PropTypes.object,
};

export default Profile;