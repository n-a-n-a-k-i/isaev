import React, {FC} from 'react';
import {SvgIcon, SvgIconProps} from "@mui/material";

const VKPlayIcon: FC<SvgIconProps> = (props) => (
    <SvgIcon {...props}>
        <svg
            width="24"
            height="24"
            viewBox="0 0 39 39"
        >
            <path
                d="M20.319 0C29.133 0 33.54 0 36.27 2.73 39 5.46 39 9.867 39 18.681v1.638c0 8.814 0 13.221-2.73 15.951C33.54 39 29.133 39 20.319 39h-1.638C9.867 39 5.46 39 2.73 36.27 0 33.54 0 29.133 0 20.32v-1.64C0 9.866 0 5.46 2.73 2.73 5.46 0 9.867 0 18.681 0h1.638z"
                fill="#07F"/>
            <path
                d="M.117 10.96C0 13.064 0 15.6 0 18.68v1.638c0 2.34 0 4.33.039 6.084C5.148 28.9 12.012 30.42 19.5 30.42c7.488 0 14.352-1.52 19.461-4.017C39 24.648 39 22.62 39 20.32v-1.638c0-3.08 0-5.616-.117-7.76H.117v.038z"
                fill="#0009B4"/>
            <circle cx="27.105" cy="19.695" stroke="#fff" stroke-width="3.897" r="3.705"/>
            <path d="M16.38 24.18L7.8 15.6m8.58 0L7.8 24.18" stroke="#fff" stroke-width="3.897"/>
        </svg>
    </SvgIcon>
)

export default VKPlayIcon