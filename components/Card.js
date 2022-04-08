
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import { deleteData } from '../utils/fetchData';
import Link from 'next/link';

function Card({ id, title, desc }) {
    const removeData = async () => {
        if (window.confirm('Are you sure')) {
            await deleteData(`posts/${id}`)
        }
    }
    return (
        <div className='card mb-2 mt-2'>
            <div className={`${styles.cardd} shadow p-3 bg-body rounded`}>
                <h6>{title}</h6>
                <span>{desc}</span>
                <div>
                    <Link href={`/${id}`}>
                        <i style={{ color: 'blue' }}
                            className="bi bi-pencil-square"
                        ></i>
                    </Link>
                    <i style={{ color: "red" }}
                        className="bi bi-trash-fill"
                        onClick={() => removeData()}
                    ></i>
                </div>
            </div>
        </div>
    );
}

export default Card;