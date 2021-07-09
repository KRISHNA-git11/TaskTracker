import Button from './Button'
const Header = ({title,onShow,showAddTask}) => {
    // const onClick = (event) => {
    //     event.preventDefault();
    //     // console.log('click')
    // }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={!showAddTask?'Add':'Close'} onClick={onShow} />
        </header>
    )
}

export default Header
