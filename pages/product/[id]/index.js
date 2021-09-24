import { useRouter } from 'next/dist/client/router'
import React from 'react'

function Product() {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <h1>Product Id - {id}</h1>
        </div>
    )
}

export default Product
