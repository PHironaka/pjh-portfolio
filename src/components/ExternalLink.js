import React from 'react'
import styled from "styled-components"

const WebsiteExternal = styled.svg`
    margin-left:10px;
    stroke-width: 2px;
`
const SvgComponent = props => (
<WebsiteExternal xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></WebsiteExternal>

)

export default SvgComponent