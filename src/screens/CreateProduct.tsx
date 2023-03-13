import React, { useState } from 'react'
import { addProduct } from '../store/slices/productSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        price: "0",
    });

    const dispatch = useDispatch();
    const nav = useNavigate();

    const changeFormState = (type: string, value: string) => {
        setFormState({ ...formState, [type]: value })
    }

    const onSaveButtonClick = () => {
        dispatch(addProduct({
            ...formState,
            id:0,
            price:parseFloat(formState.price)
        }))
        nav("/product");
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
                placeholder='Title'
                value={formState.title}
                onChange={(e) => changeFormState("title", e.target.value)}
            />
            <input
                placeholder='Description'
                value={formState.description}
                onChange={(e) => changeFormState("description", e.target.value)}
            />
            <input
                type="number"
                placeholder='Price'
                value={formState.price}
                onChange={(e) => changeFormState("price", e.target.value)} />
            <button onClick={onSaveButtonClick}>Kaydet</button>
        </div>
    )
}

export default CreateProduct