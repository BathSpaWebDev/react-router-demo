function Checkbox({title, checked, onChange, index}) {
    return (
        <div key={`cb-${index}`}>
            <input
            type="checkbox"
            id={title}
            name={title}
            value={title}
            checked={checked}
            onChange={onChange}
            />
            <label htmlFor={title}>{title}</label>
        </div>
    )
}

export default Checkbox;