import React from 'react'


const addAddressesYup = Yup.object().shape({
  street: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postal: Yup.string().required("Required"),
});

const testing = (props) => {
    return (
        <div>
            
        </div>
    )
}

export default testing
