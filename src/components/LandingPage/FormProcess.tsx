interface ProcessFormProps {
    number: string;
    title: string;
    msg: string;
}


const ProcessForm:React.FC<ProcessFormProps> = ({number, title, msg}) => {
    return (
        <div className='about-tag'>
            <div className='about-number'>{number}</div>
            <span className='about-title'>{title}</span>
            <span className='about-msg'>{msg}</span>
        </div>
    )
}

export default ProcessForm;