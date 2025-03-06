import { motion } from 'framer-motion';

interface NotifDialogProps {
    isOpen: boolean;
    title: string;
    msg: string;
    code: 'success' | 'error' | 'notif' | 'warning';
    hideNotif: () => void;
}

const NotifDialog: React.FC<NotifDialogProps> = ({
    isOpen, title, msg, code, hideNotif
}) => {

    if(!isOpen) return null;

    return (
        <div className='notif-container'>
            <motion.div
                initial={{scale: .9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: .9, opacity: 0}}
                className={`motion-container`}
            >
                <div className={`motion-container-top
                    ${code === 'success' ? `bg-primary`
                    : code === 'error' ? `bg-red-stroke`
                    : code === 'notif' ? `bg-tertiary-stroke`
                    : `bg-teal-700`
                }`}>
                </div>
                <div className='notif-title-div'>
                    <span className={`notif-title-spana
                        ${code === 'success' ? `text-primary`
                        : code === 'error' ? `text-red-stroke`
                        : code === 'notif' ? `text-tertiary-stroke`
                        : `text-teal-700`
                    }`}>{title}! </span>
                    <span className='notif-title-spanb'>{msg} </span>
                </div>
                <div className='notif-text-div'> 
                    <div 
                        onClick={hideNotif}
                        className={`
                            notif-text
                            ${code === 'success' ? 'bg-primary' 
                            : code === 'error' ? 'bg-red-stroke'
                            : code === 'notif' ? 'bg-tertiary-stroke'
                            : 'bg-teal-700'
                        }`}
                    >
                        <img src={'/assets/img/landing-page/error2.svg'} className='error-icon'></img>
                    </div>
                </div> 
            </motion.div>
        </div>
    )
}

export default NotifDialog;