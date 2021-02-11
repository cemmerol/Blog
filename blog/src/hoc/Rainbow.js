import React from 'react';

const Rainbow =(WrappedComponent)=>{

const colors=['black'];

const randomColor=colors[Math.floor(Math.random()*2)];
const className=randomColor+'-text';

return(props) =>(

<div className={className}>
    <WrappedComponent {...props}/>
</div>
)

}
export default Rainbow;