import React from 'react'

interface StepperProps {
    steps: string[];
    activeIndex: number;
    completed: boolean;
}
const Stepper:React.FC<StepperProps> = ({steps, activeIndex, completed }) => {
    const len = React.useMemo(() => steps.length - 1, [steps])
    const dotRef = React.useRef<HTMLSpanElement | null>(null)
    const gradientRef = React.useRef<HTMLSpanElement | null>(null)
    React.useEffect(() => {
        if(!gradientRef.current || !dotRef.current) return
        const percentageComplete = (activeIndex / len) * 100
        gradientRef.current.style.width = `${percentageComplete}%`
        if(!percentageComplete) {
            dotRef.current.style.left = `-4px`
        }
        else dotRef.current.style.left = `calc(${percentageComplete}% - 4px)`
        
    }, [activeIndex, len])
    return (
        <div className='w-full h-20 flex flex-col justify-center px-4 sm:px-6 lg:px-12'>
            <div className='w-full rounded-sm h-1 bg-light-gray relative'>
                <span ref={gradientRef} className='absolute left-0 top-0 rounded-full h-full transition-width duration-500 bg-gradient-to-r from-sharp-indigo to-grayish-indigo'/>
                <span ref={dotRef} className='bg-dark-gray z-10 rounded-full w-2 h-2 absolute transition-left duration-500' style={{top: '-2px'}}/>
            </div>
            <div className='w-full relative mt-3'>
                {
                    steps.map((step, index) =>{
                        const left = (index / len) * 100
                        const style = {
                            ...(index === len && {left: '100%'}),
                            ...((index > 0 && index < len) && {left: `calc(${left}% - 4px)`}),
                            ...(index === 0 && {left: '-4px'})
                        }
                        let color = activeIndex === index ? 'text-dark-gray' : 'text-sleek-gray'
                        color = index < activeIndex ? 'text-sharp-indigo' : color
                        return <span key={index} className={`text-xs sm:text-sm md:text-md ${color} relative top-0 font-normal`} style={style}>
                            <span className='absolute px-4' style={{left: '-30px'}}>{step}</span>
                        </span>
                    })
                }
            </div>
        </div>
    )
}

export default Stepper