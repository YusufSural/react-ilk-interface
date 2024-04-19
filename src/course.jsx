import React from "react";

function Course({course}){
    const {id,title,description,price,image} = course;


    return(
        <div className='course'>
            <img src={image} width={300} height={170}/>
            <h4 className='baslik'>{title}</h4>
            <p className='course-desc'>{description}</p>
            <h3 className='fiyat'>Fiyat: {price} ₺</h3>

        </div>
    )

}
export default Course