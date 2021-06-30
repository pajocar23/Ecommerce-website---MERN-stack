import React from 'react'
import {Helmet} from 'react-helmet'
export const MetaData = ({title}) => {
    return (
        <Helmet>
            <title>{`${title} - Oktopod Shop`}</title>
        </Helmet>
    )
}
export default MetaData